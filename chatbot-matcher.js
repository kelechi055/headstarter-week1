(function createPortfolioAssistantMatcher(global) {
    'use strict';

    const MINIMUM_SCORE = 2.35;
    const TERSE_INTENT_ALIASES = Object.freeze({
        ai: 'ai_ml',
        aws: 'cloud',
        fastapi: 'backend',
        'fast api': 'backend',
        svelte: 'frontend',
        'what does he do': 'overview',
        'what does kelechi do': 'overview'
    });
    const CONTEXTUAL_INTENT_ALIASES = Object.freeze([
        {
            previousIntentId: 'backend',
            inputPattern: /^(which|what) projects$|^projects$/,
            intentId: 'backend_projects'
        },
        {
            previousIntentId: 'ai_ml',
            inputPattern: /^(which|what) projects$|^projects$/,
            intentId: 'ai_projects'
        },
        {
            previousIntentId: 'certifications',
            inputPattern: /^(what about )?python(?: cert| certificate| certification| credential| training)?$/,
            intentId: 'python_credential'
        },
        {
            previousIntentId: 'certifications',
            inputPattern: /^(what about )?(aws|amazon web services)(?: cert| certificate| certification| credential| training)?$/,
            intentId: 'aws_training'
        }
    ]);
    const GENERIC_WORDS = new Set([
        'a', 'about', 'an', 'and', 'are', 'at', 'can', 'did', 'do', 'does', 'for',
        'he', 'her', 'him', 'his', 'how', 'i', 'in', 'is', 'it', 'kelechi', 'know',
        'me', 'of', 'on', 'or', 'show', 'tell', 'that', 'the', 'them', 'there',
        'these', 'they', 'this', 'to', 'use', 'what', 'when', 'where', 'which',
        'who', 'why', 'with', 'work', 'works'
    ]);

    const CONTEXT_RELATIONS = Object.freeze({
        overview: ['education', 'role_interests', 'tech_origin', 'interests'],
        interests: ['tech_origin', 'overview', 'projects', 'contact'],
        tech_origin: ['overview', 'education', 'technical_skills', 'best_project'],
        arm: ['cloud', 'linux', 'systems', 'performance', 'python'],
        internships: ['arm', 'cybervillage', 'openqquantify', 'nasa_lspace'],
        cloud: ['arm', 'linux', 'systems', 'aws_training'],
        linux: ['arm', 'systems', 'performance', 'cloud'],
        systems: ['arm', 'linux', 'performance', 'cloud'],
        performance: ['arm', 'linux', 'systems'],
        frontend: ['fullstack', 'backend', 'technical_skills', 'accessibility'],
        backend: ['backend_projects', 'fullstack', 'python', 'databases'],
        fullstack: ['frontend', 'backend', 'projects', 'technical_skills'],
        technical_skills: ['python', 'java', 'javascript_typescript', 'backend', 'frontend', 'cloud', 'linux'],
        projects: ['best_project', 'backend_projects', 'ai_projects', 'python_projects', 'solo_projects', 'hackathons'],
        best_project: ['bucket', 'projects', 'backend_projects', 'hackathons'],
        backend_projects: ['budgetmaxxing', 'stattrack', 'daily_dose', 'backend'],
        ai_projects: ['bucket', 'huzzhub', 'cardwiz', 'daily_dose', 'ai_ml'],
        python_projects: ['budgetmaxxing', 'gamestock', 'python'],
        hackathons: ['bucket', 'gamestock', 'huzzhub'],
        certifications: ['aws_training', 'codepath_tip', 'python_credential', 'software_engineering_training', 'security_ctf'],
        codepath_tip: ['technical_skills', 'python', 'certifications'],
        leadership: ['colorstack', 'hiring', 'overview'],
        colorstack: ['leadership', 'hiring', 'contact'],
        hiring: ['role_interests', 'arm', 'projects', 'leadership'],
        resume: ['contact', 'linkedin', 'github'],
        contact: ['linkedin', 'github', 'resume']
    });

    function normalizeText(value) {
        return String(value || '')
            .normalize('NFKD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/[’']/g, '')
            .replace(/\bwhatd\b/g, 'what did')
            .replace(/\bwhats\b/g, 'what is')
            .replace(/\bwhens\b/g, 'when is')
            .replace(/\bwhos\b/g, 'who is')
            .replace(/\bheres\b/g, 'here is')
            .replace(/\bhes\b/g, 'he is')
            .replace(/\bdoesnt\b/g, 'does not')
            .replace(/\bdidnt\b/g, 'did not')
            .replace(/\bcant\b/g, 'can not')
            .replace(/\bnewgrad\b/g, 'new grad')
            .replace(/([a-z0-9])\.([a-z0-9])/g, '$1 $2')
            .replace(/[^a-z0-9+#]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function containsPhrase(input, phrase) {
        if (!input || !phrase) return false;
        return ` ${input} `.includes(` ${phrase} `);
    }

    function tokenPrefixMatch(inputToken, keywordToken) {
        if (inputToken.length < 4 || keywordToken.length < 4) return false;
        const sharedLength = Math.min(inputToken.length, keywordToken.length);
        if (sharedLength < 4) return false;
        return inputToken.startsWith(keywordToken) || keywordToken.startsWith(inputToken);
    }

    function isContextualFollowUp(normalizedInput, tokens) {
        if (tokens.length <= 3) return true;
        return /\b(there|that|those|them|ones|it|what else|which ones)\b/.test(normalizedInput) ||
            /^(tell me )?more$/.test(normalizedInput);
    }

    function hasExplicitContextCue(normalizedInput) {
        return /\b(there|that|those|them|ones|it|what else|which ones)\b/.test(normalizedInput) ||
            /^(tell me )?more$/.test(normalizedInput);
    }

    function findContextualAlias(previousIntentId, input) {
        const alias = CONTEXTUAL_INTENT_ALIASES.find(candidate => (
            candidate.previousIntentId === previousIntentId &&
            candidate.inputPattern.test(input)
        ));

        return alias ? alias.intentId : null;
    }

    function buildIntentIndex(data) {
        const keywordFrequency = new Map();
        const intents = data.intents.map(intent => {
            const keywords = (intent.keywords || []).map(normalizeText).filter(Boolean);
            const phrases = (intent.phrases || []).map(normalizeText).filter(Boolean);
            const id = normalizeText(intent.id.replace(/_/g, ' '));
            const category = normalizeText(intent.category.replace(/_/g, ' '));

            new Set(keywords).forEach(keyword => {
                keywordFrequency.set(keyword, (keywordFrequency.get(keyword) || 0) + 1);
            });

            return { intent, keywords, phrases, id, category };
        });

        return { intents, keywordFrequency };
    }

    function scoreIntent(indexedIntent, input, inputTokens, keywordFrequency) {
        const inputTokenSet = new Set(inputTokens);
        let score = 0;
        let matchedTerms = 0;

        indexedIntent.phrases.forEach(phrase => {
            if (input === phrase) {
                score += 18 + phrase.split(' ').length;
                matchedTerms += 2;
            } else if (containsPhrase(input, phrase)) {
                score += 7 + Math.min(phrase.split(' ').length, 7) * 0.65;
                matchedTerms += 1;
            }
        });

        indexedIntent.keywords.forEach(keyword => {
            const keywordTokens = keyword.split(' ');
            if (keywordTokens.length > 1 && containsPhrase(input, keyword)) {
                score += 4.5 + keywordTokens.length * 0.55;
                matchedTerms += 1;
                return;
            }

            if (keywordTokens.length !== 1) return;
            const keywordToken = keywordTokens[0];
            if (inputTokenSet.has(keywordToken)) {
                const frequency = keywordFrequency.get(keyword) || 1;
                const genericPenalty = GENERIC_WORDS.has(keywordToken) ? 0.45 : 1;
                score += (1.75 + 1.5 / frequency) * genericPenalty;
                matchedTerms += genericPenalty;
                return;
            }

            if (!GENERIC_WORDS.has(keywordToken) && inputTokens.some(token => tokenPrefixMatch(token, keywordToken))) {
                score += 0.85;
                matchedTerms += 0.35;
            }
        });

        if (containsPhrase(input, indexedIntent.id)) score += 3.25;
        if (indexedIntent.category !== indexedIntent.id && containsPhrase(input, indexedIntent.category)) score += 1.6;

        if (matchedTerms > 1) {
            score += Math.min(2.2, (matchedTerms - 1) * 0.55);
        }

        return score;
    }

    function createMatcher(data) {
        if (!data || !Array.isArray(data.intents)) {
            throw new TypeError('Portfolio assistant data must include an intents array.');
        }

        const index = buildIntentIndex(data);
        const intentsById = new Map(data.intents.map(intent => [intent.id, intent]));

        function match(inputValue, previousIntentId) {
            const input = normalizeText(inputValue);
            if (!input) {
                return { intent: null, score: 0, isFallback: true, normalizedInput: input };
            }

            const contextualAliasId = findContextualAlias(previousIntentId, input);
            const directAliasId = contextualAliasId || TERSE_INTENT_ALIASES[input];
            if (directAliasId && intentsById.has(directAliasId)) {
                return {
                    intent: intentsById.get(directAliasId),
                    score: 24,
                    isFallback: false,
                    normalizedInput: input
                };
            }

            const inputTokens = input.split(' ').filter(Boolean);
            const contextualFollowUp = Boolean(previousIntentId) && isContextualFollowUp(input, inputTokens);
            const explicitContextCue = hasExplicitContextCue(input);
            const relatedIntentIds = new Set(CONTEXT_RELATIONS[previousIntentId] || []);
            const ranked = index.intents.map(indexedIntent => {
                let score = scoreIntent(indexedIntent, input, inputTokens, index.keywordFrequency);

                if (
                    contextualFollowUp &&
                    indexedIntent.intent.id === previousIntentId &&
                    (score >= 0.75 || explicitContextCue)
                ) {
                    score += explicitContextCue ? 12 : 2.4;
                } else if (previousIntentId && relatedIntentIds.has(indexedIntent.intent.id)) {
                    score += contextualFollowUp ? 1.25 : 0.35;
                }

                return { intent: indexedIntent.intent, score };
            }).sort((left, right) => right.score - left.score);

            const best = ranked[0];
            const runnerUp = ranked[1];
            const isWeakTie = best && runnerUp && best.score < 5 && best.score - runnerUp.score < 0.18;

            if (!best || best.score < MINIMUM_SCORE || isWeakTie) {
                return {
                    intent: null,
                    score: best ? best.score : 0,
                    isFallback: true,
                    normalizedInput: input
                };
            }

            return {
                intent: intentsById.get(best.intent.id) || best.intent,
                score: best.score,
                isFallback: false,
                normalizedInput: input
            };
        }

        return Object.freeze({ match });
    }

    global.KELECHI_ASSISTANT_MATCHER = Object.freeze({
        createMatcher,
        normalizeText
    });
}(window));
