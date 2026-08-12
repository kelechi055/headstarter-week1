(function initializePortfolioAssistant() {
    'use strict';

    const root = document.querySelector('[data-portfolio-assistant]');
    const data = window.KELECHI_ASSISTANT_DATA;
    const matcherFactory = window.KELECHI_ASSISTANT_MATCHER;

    if (!root || !data || !matcherFactory) {
        return;
    }

    const elements = {
        launcher: root.querySelector('[data-assistant-launcher]'),
        discovery: root.querySelector('[data-assistant-discovery]'),
        panel: root.querySelector('[data-assistant-panel]'),
        close: root.querySelector('[data-assistant-close]'),
        conversation: root.querySelector('[data-assistant-conversation]'),
        messages: root.querySelector('[data-assistant-messages]'),
        suggestions: root.querySelector('[data-assistant-suggestions]'),
        form: root.querySelector('[data-assistant-form]'),
        input: root.querySelector('[data-assistant-input]'),
        send: root.querySelector('[data-assistant-send]')
    };

    if (Object.values(elements).some(element => !element)) {
        return;
    }

    const matcher = matcherFactory.createMatcher(data);
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const DISCOVERY_STORAGE_KEY = 'kelechi-portfolio-assistant-discovery-v1';
    const MAXIMUM_INPUT_LENGTH = 500;
    const PANEL_TRANSITION_MS = 200;

    const state = {
        isOpen: false,
        isInitialized: false,
        isResponding: false,
        lastIntentId: null,
        closeTimer: null,
        discoveryShowTimer: null,
        discoveryHideTimer: null
    };

    function createElement(tagName, className, text) {
        const element = document.createElement(tagName);
        if (className) element.className = className;
        if (typeof text === 'string') element.textContent = text;
        return element;
    }

    function getSafeActionHref(rawHref) {
        if (typeof rawHref !== 'string' || !rawHref.trim()) return null;
        const href = rawHref.trim();

        if (href.startsWith('/') && !href.startsWith('//')) {
            return href;
        }

        try {
            const parsedUrl = new URL(href, window.location.href);
            if (parsedUrl.protocol !== 'https:' && parsedUrl.protocol !== 'mailto:') {
                return null;
            }
            return parsedUrl.href;
        } catch (_error) {
            return null;
        }
    }

    function createActionLinks(actions) {
        const actionContainer = createElement('div', 'portfolio-assistant__actions');

        (actions || []).forEach(action => {
            const safeHref = getSafeActionHref(action.href);
            if (!safeHref || typeof action.label !== 'string') return;

            const link = createElement('a', 'portfolio-assistant__action', action.label);
            link.href = safeHref;

            const isCredentialAsset = /\.(?:pdf|jpe?g|png)(?:$|[?#])/i.test(safeHref);
            if (safeHref.startsWith('https:') || isCredentialAsset) {
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }

            actionContainer.append(link);
        });

        return actionContainer;
    }

    function createAssistantAvatar() {
        const avatar = createElement('span', 'portfolio-assistant__message-avatar');
        const image = createElement('img');
        image.src = 'images/circlekel2.png';
        image.alt = '';
        image.width = 28;
        image.height = 28;
        image.decoding = 'async';
        avatar.setAttribute('aria-hidden', 'true');
        avatar.append(image);
        return avatar;
    }

    function appendMessage(sender, text, actions) {
        const isAssistant = sender === 'assistant';
        const row = createElement(
            'div',
            `portfolio-assistant__message portfolio-assistant__message--${isAssistant ? 'assistant' : 'user'}`
        );

        if (isAssistant) {
            row.append(createAssistantAvatar());
        }

        const bubble = createElement('div', 'portfolio-assistant__bubble');
        bubble.append(createElement('p', '', text));

        const actionLinks = createActionLinks(actions);
        if (actionLinks.childElementCount) {
            bubble.append(actionLinks);
        }

        row.append(bubble);
        elements.messages.append(row);
        scrollConversationToEnd();
        return row;
    }

    function appendTypingIndicator() {
        const row = createElement(
            'div',
            'portfolio-assistant__message portfolio-assistant__message--assistant'
        );
        row.dataset.assistantTyping = 'true';

        const avatar = createAssistantAvatar();

        const bubble = createElement('div', 'portfolio-assistant__bubble');
        const typing = createElement('span', 'portfolio-assistant__typing');
        typing.setAttribute('role', 'status');
        typing.setAttribute('aria-label', 'Kelechi Assistant is typing');

        for (let dotIndex = 0; dotIndex < 3; dotIndex += 1) {
            const dot = createElement('span', 'portfolio-assistant__typing-dot');
            dot.setAttribute('aria-hidden', 'true');
            typing.append(dot);
        }

        bubble.append(typing);
        row.append(avatar, bubble);
        elements.messages.append(row);
        scrollConversationToEnd();
        return row;
    }

    function scrollConversationToEnd() {
        window.requestAnimationFrame(() => {
            elements.conversation.scrollTo({
                top: elements.conversation.scrollHeight,
                behavior: reduceMotionQuery.matches ? 'auto' : 'smooth'
            });
        });
    }

    function renderSuggestions(questions, limit = 3) {
        const fragment = document.createDocumentFragment();

        (questions || []).slice(0, limit).forEach(question => {
            if (typeof question !== 'string' || !question.trim()) return;
            const suggestion = createElement('button', 'portfolio-assistant__suggestion', question);
            suggestion.type = 'button';
            suggestion.dataset.assistantQuestion = question;
            fragment.append(suggestion);
        });

        elements.suggestions.replaceChildren(fragment);
        scrollConversationToEnd();
    }

    function resizeInput() {
        elements.input.style.height = 'auto';
        elements.input.style.height = `${Math.min(elements.input.scrollHeight, 96)}px`;
    }

    function syncComposerState() {
        const hasMessage = Boolean(elements.input.value.trim());
        elements.send.disabled = !hasMessage || state.isResponding;
        elements.form.setAttribute('aria-busy', String(state.isResponding));
    }

    function getResponseDelay(message) {
        return Math.min(600, Math.max(280, 250 + message.length * 3));
    }

    function submitQuestion(rawQuestion) {
        const question = String(rawQuestion || '').trim().slice(0, MAXIMUM_INPUT_LENGTH);
        if (!question || state.isResponding) return;

        state.isResponding = true;
        elements.messages.setAttribute('aria-busy', 'true');
        appendMessage('user', question);
        renderSuggestions([]);

        elements.input.value = '';
        resizeInput();
        syncComposerState();

        const typingIndicator = appendTypingIndicator();
        const matchResult = matcher.match(question, state.lastIntentId);
        const response = matchResult.isFallback ? data.fallback : matchResult.intent;

        window.setTimeout(() => {
            typingIndicator.remove();
            appendMessage('assistant', response.answer, response.actions);
            renderSuggestions(response.relatedQuestions);

            state.lastIntentId = matchResult.isFallback ? null : matchResult.intent.id;
            state.isResponding = false;
            elements.messages.removeAttribute('aria-busy');
            syncComposerState();
        }, getResponseDelay(question));
    }

    function initializeConversation() {
        if (state.isInitialized) return;
        state.isInitialized = true;
        appendMessage('assistant', data.welcome);
        renderSuggestions(data.initialSuggestions, 4);
    }

    function openAssistant() {
        if (state.isOpen) return;
        state.isOpen = true;
        window.clearTimeout(state.closeTimer);
        hideDiscovery(true);
        initializeConversation();

        elements.panel.hidden = false;
        elements.launcher.setAttribute('aria-expanded', 'true');
        window.requestAnimationFrame(() => root.classList.add('is-open'));

        window.setTimeout(() => {
            elements.input.focus({ preventScroll: true });
        }, reduceMotionQuery.matches ? 0 : PANEL_TRANSITION_MS);
    }

    function closeAssistant() {
        if (!state.isOpen) return;
        state.isOpen = false;
        root.classList.remove('is-open');
        elements.launcher.setAttribute('aria-expanded', 'false');
        window.clearTimeout(state.closeTimer);

        state.closeTimer = window.setTimeout(() => {
            elements.panel.hidden = true;
            elements.launcher.focus({ preventScroll: true });
        }, reduceMotionQuery.matches ? 0 : PANEL_TRANSITION_MS);
    }

    function hasSeenDiscovery() {
        try {
            return window.localStorage.getItem(DISCOVERY_STORAGE_KEY) === 'seen';
        } catch (_error) {
            return false;
        }
    }

    function markDiscoverySeen() {
        try {
            window.localStorage.setItem(DISCOVERY_STORAGE_KEY, 'seen');
        } catch (_error) {
            // Storage can be unavailable in strict privacy contexts; the UI still works.
        }
    }

    function hideDiscovery(markSeen) {
        window.clearTimeout(state.discoveryShowTimer);
        window.clearTimeout(state.discoveryHideTimer);
        elements.discovery.classList.remove('is-visible');
        elements.launcher.removeAttribute('aria-describedby');
        if (markSeen) markDiscoverySeen();

        window.setTimeout(() => {
            elements.discovery.hidden = true;
        }, reduceMotionQuery.matches ? 0 : 220);
    }

    function scheduleDiscovery() {
        if (hasSeenDiscovery()) return;

        state.discoveryShowTimer = window.setTimeout(() => {
            if (state.isOpen) return;
            elements.discovery.hidden = false;
            elements.launcher.setAttribute('aria-describedby', elements.discovery.id);
            markDiscoverySeen();
            window.requestAnimationFrame(() => elements.discovery.classList.add('is-visible'));

            state.discoveryHideTimer = window.setTimeout(() => {
                hideDiscovery(false);
            }, 3800);
        }, reduceMotionQuery.matches ? 800 : 1400);
    }

    function syncVisualViewport() {
        const viewport = window.visualViewport;
        if (!viewport) return;
        root.style.setProperty('--assistant-viewport-height', `${viewport.height}px`);
        root.style.setProperty('--assistant-viewport-top', `${viewport.offsetTop}px`);
    }

    elements.launcher.addEventListener('click', openAssistant);
    elements.close.addEventListener('click', closeAssistant);

    elements.form.addEventListener('submit', event => {
        event.preventDefault();
        submitQuestion(elements.input.value);
    });

    elements.input.addEventListener('input', () => {
        if (elements.input.value.length > MAXIMUM_INPUT_LENGTH) {
            elements.input.value = elements.input.value.slice(0, MAXIMUM_INPUT_LENGTH);
        }
        resizeInput();
        syncComposerState();
    });

    elements.input.addEventListener('keydown', event => {
        if (event.key !== 'Enter' || event.shiftKey || event.isComposing) return;
        event.preventDefault();
        if (!state.isResponding && elements.input.value.trim()) {
            elements.form.requestSubmit();
        }
    });

    elements.suggestions.addEventListener('click', event => {
        const suggestion = event.target.closest('[data-assistant-question]');
        if (!suggestion || !elements.suggestions.contains(suggestion) || state.isResponding) return;
        elements.input.focus({ preventScroll: true });
        submitQuestion(suggestion.dataset.assistantQuestion);
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && state.isOpen) {
            const openDialog = document.querySelector('dialog[open]');
            if (openDialog && !root.contains(openDialog)) return;
            event.preventDefault();
            closeAssistant();
        }
    });

    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', syncVisualViewport, { passive: true });
        window.visualViewport.addEventListener('scroll', syncVisualViewport, { passive: true });
        syncVisualViewport();
    }

    syncComposerState();
    scheduleDiscovery();
}());
