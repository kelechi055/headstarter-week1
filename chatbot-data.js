/* Curated, local-only knowledge for Kelechi's portfolio assistant. */
window.KELECHI_ASSISTANT_DATA = {
  welcome:
    "Hey! I'm Kelechi's portfolio assistant 👋 Ask me about his engineering work, projects, leadership, interests, or path into tech.",
  initialSuggestions: [
    "What should I know about Kelechi?",
    "What did he own at Arm?",
    "Which project best represents his skills?",
    "What's he into beyond software?"
  ],
  fallback: {
    answer:
      "Try asking about Kelechi's projects, Arm work, technical skills, education, leadership, interests, résumé, or contact information.",
    relatedQuestions: [
      "Show me Kelechi's strongest work",
      "What did he build at Arm?",
      "What does he do outside of code?"
    ]
  },
  intents: [
    {
      id: "overview",
      category: "overview",
      keywords: [
        "overview",
        "background",
        "biography",
        "profile",
        "yourself",
        "introduction"
      ],
      phrases: [
        "who is kelechi",
        "who is he",
        "tell me about kelechi",
        "tell me about yourself",
        "tell me who he is",
        "give me an overview",
        "what should i know about kelechi",
        "what should i know about him",
        "what kind of engineer is he",
        "what kind of engineer is kelechi"
      ],
      answer:
        "Kelechi Opurum is a Computer Science student and software engineer with experience across full-stack development, backend systems, cloud infrastructure, and Linux performance engineering. He graduates from Loyola University Maryland in May 2027 and is pursuing full-time software engineering roles.",
      relatedQuestions: [
        "Trace his path into tech",
        "What roles is he looking for?",
        "What's he into beyond software?"
      ]
    },
    {
      id: "interests",
      category: "interests",
      keywords: [
        "interests",
        "hobbies",
        "hobby",
        "fun",
        "youtube",
        "videos",
        "channel",
        "basketball",
        "active"
      ],
      phrases: [
        "what does he do for fun",
        "what does kelechi do for fun",
        "what are his hobbies",
        "outside of code",
        "outside of software",
        "outside of tech",
        "what does he do outside of code",
        "what does kelechi do outside of code",
        "what does kelechi do outside coding",
        "what does kelechi do outside of coding",
        "what is he into beyond software",
        "whats he into beyond software",
        "what does he like to do",
        "what does he do outside of coding",
        "what does he do in his free time",
        "tell me about his youtube channel",
        "does he play basketball"
      ],
      answer:
        "Outside of code, Kelechi creates YouTube videos, plays basketball, and enjoys staying active. He started his channel in middle school and has grown it to more than 32,000 subscribers and 5 million views.",
      relatedQuestions: [
        "Trace his path into tech",
        "What has he built?",
        "How can I contact him?"
      ]
    },
    {
      id: "tech_origin",
      category: "tech_origin",
      keywords: [
        "origin",
        "journey",
        "started",
        "coding",
        "nintendo",
        "scratch",
        "roblox"
      ],
      phrases: [
        "how did he get into tech",
        "how did kelechi get into tech",
        "how did he get started in tech",
        "how did he get into coding",
        "trace his path into tech",
        "how did he start coding",
        "what got him interested in technology",
        "why did he choose computer science",
        "tell me about his technology journey",
        "nintendo ds",
        "mit scratch"
      ],
      answer:
        "Kelechi's interest in technology started when he took apart a Nintendo DS to understand how it worked. He later created games with MIT Scratch and Roblox, took AP Computer Science, and eventually chose to major in Computer Science.",
      relatedQuestions: [
        "What are his strongest skills?",
        "Which project best represents his skills?",
        "Where does he go to school?"
      ]
    },
    {
      id: "education",
      category: "education",
      keywords: [
        "education",
        "school",
        "college",
        "university",
        "loyola",
        "major",
        "minor",
        "student"
      ],
      phrases: [
        "where does he go to school",
        "what does he study",
        "what is he studying",
        "what is his major",
        "what is his minor",
        "tell me about his education",
        "loyola university maryland"
      ],
      answer:
        "Kelechi studies Computer Science and minors in Data Science at Loyola University Maryland. He expects to graduate in May 2027 and is preparing for full-time software engineering roles beginning in 2027.",
      relatedQuestions: [
        "When does he graduate?",
        "What roles is he looking for?",
        "What are his strongest skills?"
      ]
    },
    {
      id: "graduation",
      category: "graduation",
      keywords: [
        "graduate",
        "graduation",
        "2027",
        "availability",
        "available",
        "newgrad"
      ],
      phrases: [
        "when does he graduate",
        "when is graduation",
        "when graduate",
        "when is he graduating",
        "graduating when",
        "grad date",
        "is he a new grad",
        "new grad roles",
        "when is he available full time",
        "when can he start full time"
      ],
      answer:
        "Kelechi expects to graduate from Loyola University Maryland in May 2027. He is targeting 2027 full-time software engineering opportunities, including general software engineering, backend, full-stack, cloud, infrastructure, and systems-oriented roles.",
      relatedQuestions: [
        "What roles is he looking for?",
        "Why should we hire Kelechi?",
        "How can I contact him?"
      ]
    },
    {
      id: "role_interests",
      category: "role_interests",
      keywords: [
        "roles",
        "role",
        "jobs",
        "career",
        "opportunities",
        "interested",
        "pursuing"
      ],
      phrases: [
        "what roles is he looking for",
        "what jobs is he looking for",
        "what is he looking for next",
        "what kind of role does he want",
        "is he looking for work",
        "full time software engineering",
        "new grad opportunity"
      ],
      answer:
        "Kelechi is primarily pursuing full-time software engineering roles for 2027. His experience supports general software engineering, backend, full-stack, cloud software, infrastructure, and systems or performance-oriented work, so he is not limited to one layer of the stack.",
      relatedQuestions: [
        "When does he graduate?",
        "What kind of engineer is Kelechi?",
        "Why should we hire Kelechi?"
      ]
    },
    {
      id: "arm",
      category: "arm",
      keywords: [
        "arm",
        "internship",
        "intern",
        "performix",
        "specjbb2015",
        "kernel",
        "benchmarking"
      ],
      phrases: [
        "what did kelechi do at arm",
        "what did he do at arm",
        "whatd he do at arm",
        "what did he build at arm",
        "what did he own at arm",
        "tell me about his arm internship",
        "what was his internship at arm like",
        "arm experience",
        "how many times did he intern at arm",
        "cloud ai software enablement"
      ],
      answer:
        "Kelechi completed two software engineering internships at Arm. In 2026, he built reusable software that automated Linux kernel benchmarking across AWS, Microsoft Azure, GCP, and OCI for Arm and x86 systems using Python, Terraform, Ansible, and GitLab CI/CD. In 2025, he contributed to Arm's open-source Fastpath project, integrated SPECjbb2015 into an AWS EC2 performance pipeline, and conducted pre-release user testing for Performix with software engineering and UX partners.",
      relatedQuestions: [
        "What cloud platforms did he use?",
        "Does he have Linux experience?",
        "What did he benchmark?"
      ]
    },
    {
      id: "internships",
      category: "internships",
      keywords: [
        "internships",
        "internship",
        "intern",
        "professional",
        "companies"
      ],
      phrases: [
        "tell me about his internships",
        "what internships has he done",
        "what companies has he worked at",
        "where has he worked",
        "what was his internship experience",
        "internship experience",
        "professional experience",
        "work experience",
        "where has he interned"
      ],
      answer:
        "Kelechi has completed two software engineering internships at Arm, multiple application and software development internships with CyberVillage Networkers, and a software engineering internship at OpenQQuantify. He also participated in NASA L'SPACE NPWEE as an AI/ML Engineer. Together, those experiences span cloud and Linux automation, performance engineering, web and mobile-facing development, accessibility, and AI or robotics product interfaces.",
      relatedQuestions: [
        "What did Kelechi do at Arm?",
        "What did he do at CyberVillage?",
        "Tell me about OpenQQuantify"
      ]
    },
    {
      id: "cybervillage",
      category: "internships",
      keywords: [
        "cybervillage",
        "wcag",
        "ada",
        "nvda",
        "voiceover",
        "jsp",
        "asp",
        "cmmc"
      ],
      phrases: [
        "what did he do at cybervillage",
        "tell me about cybervillage",
        "cybervillage networkers",
        "application development internships",
        "does he have cmmc experience",
        "has he worked with cmmc"
      ],
      answer:
        "Across multiple internships with CyberVillage Networkers, Kelechi worked on frontend, web, and mobile-related development as well as Figma prototypes. He contributed accessibility improvements, tested interfaces against WCAG and ADA considerations with NVDA and VoiceOver, and worked with CMMC cybersecurity requirements across HTML, CSS, JavaServer Pages, ASP, and related web environments.",
      relatedQuestions: [
        "Does he have accessibility experience?",
        "Does he have frontend experience?",
        "Tell me about his internships"
      ],
      actions: [
        {
          label: "CyberVillage",
          href: "https://www.linkedin.com/company/cybervillage-networkers-inc./posts/?feedView=all"
        }
      ]
    },
    {
      id: "openqquantify",
      category: "internships",
      keywords: [
        "openq",
        "openqquantify",
        "robotics",
        "svelte"
      ],
      phrases: [
        "tell me about openqquantify",
        "what did he do at openqquantify",
        "ai and robotics products",
        "open q quantify"
      ],
      answer:
        "At OpenQQuantify, Kelechi worked as a Software Engineering Intern developing software and web interfaces related to AI and robotics products. He used Svelte, JavaScript, TypeScript, HTML, and CSS in that work.",
      relatedQuestions: [
        "Does he have frontend experience?",
        "What is his AI experience?",
        "Tell me about his internships"
      ],
      actions: [
        {
          label: "OpenQQuantify",
          href: "https://www.openqquantify.com/"
        }
      ]
    },
    {
      id: "nasa_lspace",
      category: "internships",
      keywords: [
        "nasa",
        "lspace",
        "npwee",
        "aerospace"
      ],
      phrases: [
        "nasa lspace",
        "nasa l space",
        "what did he do with nasa",
        "ai ml engineer at nasa",
        "proposal writing and evaluation experience"
      ],
      answer:
        "Kelechi participated in NASA L'SPACE NPWEE as an AI/ML Engineer. It is one part of his AI/ML-oriented engineering experience, alongside AI API integrations in several shipped projects; it should not be read as a claim that he develops foundation models.",
      relatedQuestions: [
        "What is his AI experience?",
        "Which projects use AI?",
        "Tell me about his internships"
      ],
      actions: [
        {
          label: "NASA L'SPACE",
          href: "https://www.lspace.asu.edu/proposal-writing-academy"
        }
      ]
    },
    {
      id: "cloud",
      category: "cloud",
      keywords: [
        "cloud",
        "clouds",
        "aws",
        "azure",
        "gcp",
        "googlecloud",
        "oci",
        "oraclecloud",
        "multicloud",
        "terraform",
        "ansible",
        "docker",
        "gitlab"
      ],
      phrases: [
        "cloud experience",
        "does he know aws",
        "does he have any experience with aws",
        "does he have experience with aws",
        "has he used aws professionally",
        "has he worked with aws",
        "what did he build with aws",
        "aws experience",
        "does he know azure",
        "does he know gcp",
        "does he know oci",
        "has he used cloud platforms",
        "what clouds does he know",
        "what cloud platforms did he use",
        "does kelechi work with cloud",
        "amazon web services",
        "terraform experience",
        "ansible experience",
        "docker experience",
        "gitlab ci cd",
        "gcp experience",
        "cloud stuff"
      ],
      answer:
        "Yes. Kelechi used AWS professionally during two software engineering internships at Arm, building Python, Terraform, and Ansible automation for Linux benchmarking and working with AWS EC2. He also has hands-on experience with Azure, GCP, and OCI.",
      relatedQuestions: [
        "What did Kelechi do at Arm?",
        "Does he have Linux experience?",
        "Has he completed AWS training?"
      ]
    },
    {
      id: "linux",
      category: "linux",
      keywords: [
        "linux",
        "kernel",
        "bash"
      ],
      phrases: [
        "does he know linux",
        "linux experience",
        "linux exp",
        "linux kernel experience",
        "kernel work",
        "has he worked with kernels",
        "linux automation"
      ],
      answer:
        "Yes. At Arm, Kelechi worked directly with Linux system preparation, kernel deployment and artifact workflows, workload execution, performance analysis, Bash, Docker, and automation across Arm and x86 environments. His tools and workloads included Phoronix Test Suite, Redis, perf, mmtests, NGINX, and SPECjbb2015.",
      relatedQuestions: [
        "What is his performance engineering experience?",
        "What did Kelechi do at Arm?",
        "Does he have systems experience?"
      ]
    },
    {
      id: "systems",
      category: "systems",
      keywords: [
        "systems",
        "system",
        "infrastructure",
        "kernels",
        "arm64",
        "x86",
        "lowlevel"
      ],
      phrases: [
        "does he have systems experience",
        "systems engineering experience",
        "systems oriented software",
        "low level experience",
        "arm versus x86",
        "arm and x86 systems",
        "infrastructure engineering"
      ],
      answer:
        "Kelechi's systems-oriented experience comes primarily from Arm, where he engineered automation around Linux kernels, cloud infrastructure, benchmark environments, and Arm versus x86 performance testing. The work involved reliable provisioning, environment validation, kernel and workload workflows, utilization analysis, and repeatable execution—not just manual testing.",
      relatedQuestions: [
        "Does he have Linux experience?",
        "What did he benchmark?",
        "What cloud platforms did he use?"
      ]
    },
    {
      id: "performance",
      category: "performance",
      keywords: [
        "performance",
        "benchmark",
        "benchmarks",
        "benchmarking",
        "redis",
        "phoronix",
        "perf",
        "mmtests",
        "utilization",
        "measurements",
        "performix"
      ],
      phrases: [
        "performance engineering experience",
        "what did he benchmark",
        "what did kelechi benchmark",
        "multi kernel redis study",
        "240 measurements",
        "how did he analyze performance",
        "benchmark automation"
      ],
      answer:
        "Kelechi engineered repeatable Linux performance workflows at Arm, including workload execution, kernel comparisons, and Arm-versus-x86 analysis across cloud environments. In one multi-kernel Redis study, he collected more than 240 measurements and correlated performance differences with CPU, memory, disk, and network utilization. He also worked with Phoronix Test Suite, perf, mmtests, NGINX, SPECjbb2015, and Arm Performix.",
      relatedQuestions: [
        "What did Kelechi do at Arm?",
        "Does he have Linux experience?",
        "What cloud platforms did he use?"
      ]
    },
    {
      id: "backend",
      category: "backend",
      keywords: [
        "backend",
        "server",
        "api",
        "apis",
        "rest",
        "fastapi",
        "express",
        "sqlalchemy",
        "node"
      ],
      phrases: [
        "does he know backend",
        "does he do backend",
        "backend experience",
        "has he built apis",
        "api experience",
        "does he know fastapi",
        "does he use fastapi",
        "does he know express",
        "has he worked with express",
        "does he use node js",
        "does he know node js",
        "rest api experience",
        "server side experience"
      ],
      answer:
        "Yes—Kelechi has backend experience with Python, FastAPI, SQLAlchemy, PostgreSQL, Node.js, Express, REST APIs, Firebase, and DynamoDB. BudgetMaxxing uses a FastAPI and SQLAlchemy backend, while StatTrack exposes Express endpoints for reading and writing game data. His Python automation and engineering tooling at Arm add professional backend and systems depth beyond project work.",
      relatedQuestions: [
        "What backend projects has he built?",
        "Tell me about BudgetMaxxing",
        "Does he know databases?"
      ]
    },
    {
      id: "frontend",
      category: "frontend",
      keywords: [
        "frontend",
        "ui",
        "interface",
        "react",
        "nextjs",
        "svelte",
        "tailwind",
        "materialui",
        "framer"
      ],
      phrases: [
        "does he have frontend experience",
        "frontend experience",
        "front end experience",
        "react experience",
        "user interface experience",
        "does he know react",
        "has he used next js",
        "has he used svelte"
      ],
      answer:
        "Kelechi has built user-facing experiences with JavaScript, TypeScript, React, Next.js, Svelte, HTML, CSS, Tailwind CSS, Material UI, and Framer Motion. That work spans OpenQQuantify, CyberVillage, Daily Dose, Bucket, Cardwiz, Pantrack, GameStock, and this portfolio. Frontend is one part of a broader background that also includes backend, cloud, Linux, and systems engineering.",
      relatedQuestions: [
        "Does he have full-stack experience?",
        "Does he have backend experience?",
        "Show me his best projects"
      ]
    },
    {
      id: "fullstack",
      category: "fullstack",
      keywords: [
        "fullstack",
        "full-stack",
        "endtoend",
        "product",
        "frontendonly"
      ],
      phrases: [
        "does he have full stack experience",
        "does he have fullstack experience",
        "does he only do frontend",
        "both frontend and backend",
        "is he only a frontend engineer",
        "can he work across the stack",
        "end to end development"
      ],
      answer:
        "Kelechi is not limited to frontend work. He has built product interfaces, backend APIs, data-backed applications, cloud automation, and Linux performance tooling, with technologies ranging from React and Next.js to FastAPI, Express, PostgreSQL, Terraform, and Ansible. His experience reaches from user-facing products down to systems and infrastructure workflows.",
      relatedQuestions: [
        "Does he have backend experience?",
        "What cloud experience does he have?",
        "What are his strongest skills?"
      ]
    },
    {
      id: "accessibility",
      category: "accessibility",
      keywords: [
        "accessibility",
        "accessible",
        "a11y",
        "wcag",
        "ada",
        "nvda",
        "voiceover",
        "inclusive"
      ],
      phrases: [
        "does he have accessibility experience",
        "a11y experience",
        "inclusive engineering",
        "web accessibility",
        "wcag experience",
        "screen reader testing"
      ],
      answer:
        "At CyberVillage Networkers, Kelechi worked on web accessibility improvements and WCAG-related remediation with ADA considerations. He tested frontend experiences with NVDA and VoiceOver, giving him practical experience finding and improving barriers for keyboard and screen-reader users.",
      relatedQuestions: [
        "What did he do at CyberVillage?",
        "Does he have frontend experience?",
        "Tell me about his internships"
      ]
    },
    {
      id: "ai_ml",
      category: "ai_ml",
      keywords: [
        "ai",
        "ml",
        "gemini",
        "openai",
        "llm",
        "machinelearning",
        "gptq",
        "awq",
        "generative"
      ],
      phrases: [
        "what is his ai experience",
        "ai experience",
        "ml background",
        "does he know ai",
        "ai ml experience",
        "machine learning experience",
        "has he built ai applications",
        "llm quantization",
        "gptq and awq"
      ],
      answer:
        "Kelechi has experience building AI-integrated applications and participating in AI/ML-oriented engineering work. He has integrated Gemini into Bucket, HuzzHub, and Cardwiz, used OpenAI functionality in Daily Dose, participated in NASA L'SPACE NPWEE as an AI/ML Engineer, and explored LLM quantization approaches such as GPTQ and AWQ during Arm work. He does not claim to train foundation models or to have built Gemini or OpenAI's models.",
      relatedQuestions: [
        "Which projects use AI?",
        "Tell me about Bucket",
        "What technical training has he completed?"
      ]
    },
    {
      id: "technical_skills",
      category: "technical_skills",
      keywords: [
        "skills",
        "skillset",
        "technologies",
        "technology",
        "stack",
        "languages",
        "coding",
        "strongest",
        "automation",
        "tooling",
        "git",
        "cicd"
      ],
      phrases: [
        "what are his strongest skills",
        "whats his tech stack",
        "what is his tech stack",
        "what languages does he know",
        "what does he code in",
        "what tools does he use",
        "programming languages",
        "strongest technologies",
        "technical skills",
        "does he have automation experience",
        "developer tooling experience",
        "does he know c",
        "does he know bash",
        "does he know lua",
        "does he know html",
        "does he know css",
        "git experience"
      ],
      answer:
        "Kelechi's strongest through-lines are Python, JavaScript and TypeScript, full-stack development, backend APIs, cloud infrastructure, Linux, and automation. He has also worked with Java, C, Bash, Lua, HTML, CSS, React, Next.js, Svelte, Node.js, Express, FastAPI, SQLAlchemy, PostgreSQL, Terraform, Ansible, Docker, and all four major cloud platforms. The combination lets him move between product-facing work and systems-oriented engineering.",
      relatedQuestions: [
        "Does he have backend experience?",
        "What cloud experience does he have?",
        "What did he use at Arm?"
      ]
    },
    {
      id: "python",
      category: "technical_skills",
      keywords: [
        "python",
        "py",
        "fastapi",
        "sqlalchemy"
      ],
      phrases: [
        "does he know python",
        "python experience",
        "py experience",
        "how has he used python",
        "what has he built with python",
        "python skills"
      ],
      answer:
        "Yes. Kelechi has used Python professionally for cloud and Linux benchmarking automation at Arm and in backend development with FastAPI and SQLAlchemy for BudgetMaxxing. His Python experience is grounded in engineering tooling, infrastructure workflows, APIs, and data or performance analysis—not just coursework or a credential.",
      relatedQuestions: [
        "Which projects use Python?",
        "Does he have backend experience?",
        "Does he have a Python certificate?"
      ]
    },
    {
      id: "java",
      category: "technical_skills",
      keywords: [
        "java",
        "jvm"
      ],
      phrases: [
        "does he know java",
        "java experience",
        "can he code in java",
        "has he used java"
      ],
      answer:
        "Java is part of Kelechi's programming-language toolkit. His most detailed portfolio examples currently emphasize Python, JavaScript, TypeScript, cloud automation, and web systems, so the assistant avoids overstating Java-specific project depth.",
      relatedQuestions: [
        "What are his strongest skills?",
        "Does he know Python?",
        "What projects has he built?"
      ]
    },
    {
      id: "javascript_typescript",
      category: "technical_skills",
      keywords: [
        "javascript",
        "typescript",
        "js",
        "ts",
        "nodejs"
      ],
      phrases: [
        "does he know javascript",
        "does he know typescript",
        "javascript experience",
        "js experience",
        "typescript experience",
        "type script experience",
        "what has he built with javascript"
      ],
      answer:
        "Kelechi has substantial JavaScript and TypeScript experience across React, Next.js, Svelte, Node.js, Express, and vanilla web development. Projects such as Bucket, GameStock, StatTrack, HuzzHub, Cardwiz, Daily Dose, Pantrack, and this portfolio use those skills across both interfaces and application logic.",
      relatedQuestions: [
        "Does he have frontend experience?",
        "Does he have backend experience?",
        "Show me his best projects"
      ]
    },
    {
      id: "databases",
      category: "backend",
      keywords: [
        "database",
        "databases",
        "postgresql",
        "sql",
        "firebase",
        "dynamodb",
        "json",
        "orm"
      ],
      phrases: [
        "does he know databases",
        "database experience",
        "database skills",
        "sql experience",
        "what databases has he used",
        "does he know sql",
        "data storage experience"
      ],
      answer:
        "Kelechi has worked with PostgreSQL, SQLAlchemy, Firebase, AWS DynamoDB, and JSON-backed application data. Those technologies appear in projects including BudgetMaxxing, Bucket, Pantrack, Daily Dose, and StatTrack, alongside REST API and backend application work.",
      relatedQuestions: [
        "Does he have backend experience?",
        "Tell me about BudgetMaxxing",
        "Tell me about StatTrack"
      ]
    },
    {
      id: "projects",
      category: "projects",
      keywords: [
        "projects",
        "project",
        "built",
        "builds",
        "made",
        "portfolio",
        "showcase",
        "proj"
      ],
      phrases: [
        "what has he built",
        "best projects",
        "show me his projects",
        "show me his best projects",
        "what projects has kelechi made",
        "what has kelechi made",
        "what did he build",
        "strongest projects",
        "what projects has he built",
        "best proj"
      ],
      answer:
        "A strong starting set is Bucket, a first-place personalized experience curator; GameStock, a second-place market and news dashboard; HuzzHub, a hackathon-winning Gemini app; and BudgetMaxxing, a Python and FastAPI budgeting platform. Together they show product thinking, frontend execution, backend APIs, AI integration, and the ability to ship under time constraints.",
      relatedQuestions: [
        "Tell me about Bucket",
        "Which projects won hackathons?",
        "What backend projects has he built?"
      ]
    },
    {
      id: "best_project",
      category: "projects",
      keywords: [
        "best project",
        "strongest project",
        "most impressive project"
      ],
      phrases: [
        "which project best represents his skills",
        "what is his best project",
        "what is kelechis best project",
        "whats his best project",
        "best project",
        "strongest project",
        "most impressive project",
        "which project should i look at",
        "show me his strongest project",
        "show me his strongest work",
        "show me kelechis strongest work"
      ],
      answer:
        "Bucket is probably Kelechi's strongest all-around project. It won 1st Place Overall and Best AI/ML at HackHounds 2025 while solving a practical problem: helping interns discover experiences that fit their location, interests, and budget. It best combines his product thinking, technical execution, and ability to build effectively under time constraints.",
      relatedQuestions: [
        "Tell me about Bucket",
        "Show me his backend experience",
        "Which projects won hackathons?"
      ],
      actions: [
        {
          label: "View Bucket",
          href: "https://trybucket.vercel.app/"
        },
        {
          label: "GitHub",
          href: "https://github.com/kelechi055/bucket"
        },
        {
          label: "Devpost",
          href: "https://devpost.com/software/bucket-3hzwcf"
        }
      ]
    },
    {
      id: "backend_projects",
      category: "projects",
      keywords: [
        "backend",
        "backends",
        "projects",
        "apis",
        "servers"
      ],
      phrases: [
        "what backend projects has he built",
        "what backend projects has he made",
        "does he have backend projects",
        "backend apps",
        "projects with backends",
        "which projects have apis",
        "show me backend projects"
      ],
      answer:
        "BudgetMaxxing is Kelechi's clearest Python backend project, using FastAPI, SQLAlchemy, and PostgreSQL for budgeting data and integrations. StatTrack uses Node.js and Express REST endpoints to read and write NBA game data, while Daily Dose uses AWS DynamoDB as part of a full-stack wellness app. These complement his professional Python automation and infrastructure tooling at Arm.",
      relatedQuestions: [
        "Tell me about BudgetMaxxing",
        "Tell me about StatTrack",
        "Does he have backend experience?"
      ]
    },
    {
      id: "ai_projects",
      category: "projects",
      keywords: [
        "ai",
        "projects",
        "gemini",
        "openai",
        "builds"
      ],
      phrases: [
        "what projects use ai",
        "which projects use ai",
        "ai integrated projects",
        "ai apps",
        "projects using gemini",
        "projects using openai",
        "which ones use ai"
      ],
      answer:
        "Bucket uses Gemini to personalize experience recommendations, HuzzHub uses Gemini to generate shareable pickup lines, and Cardwiz uses Gemini to turn content into flashcards. Daily Dose also uses OpenAI functionality for journaling tone analysis. These are AI-integrated applications; Kelechi does not claim to have trained the underlying models.",
      relatedQuestions: [
        "Tell me about Bucket",
        "Tell me about Cardwiz",
        "What is his AI experience?"
      ]
    },
    {
      id: "python_projects",
      category: "projects",
      keywords: [
        "python",
        "projects",
        "fastapi",
        "builds"
      ],
      phrases: [
        "what projects use python",
        "which projects use python",
        "python builds",
        "what did he build with python",
        "which ones use python",
        "show me python projects"
      ],
      answer:
        "BudgetMaxxing is the strongest portfolio example: it uses Python, FastAPI, SQLAlchemy, and PostgreSQL for a student budgeting backend. GameStock also includes Python alongside Next.js and TypeScript. Professionally, Kelechi used Python extensively at Arm for cloud provisioning, Linux preparation, benchmark execution, validation, artifact workflows, and result collection.",
      relatedQuestions: [
        "Tell me about BudgetMaxxing",
        "Does he know Python?",
        "What did Kelechi do at Arm?"
      ]
    },
    {
      id: "solo_projects",
      category: "projects",
      keywords: [
        "solo",
        "personal",
        "independent",
        "alone"
      ],
      phrases: [
        "what are his solo projects",
        "which projects are solo projects",
        "what did he build by himself",
        "independent projects",
        "personal projects"
      ],
      answer:
        "Kelechi's solo projects include Cardwiz, an AI flashcard study tool; Pantrack, a real-time pantry and recipe app; and this responsive portfolio. They demonstrate independent product execution with Next.js and Gemini, React and Firebase, and vanilla HTML, CSS, and JavaScript.",
      relatedQuestions: [
        "Tell me about Cardwiz",
        "Tell me about Pantrack",
        "Did he build this website?"
      ]
    },
    {
      id: "bucket",
      category: "bucket",
      keywords: [
        "bucket",
        "buckethounds",
        "bucketlist",
        "hackhounds",
        "maps"
      ],
      phrases: [
        "tell me about bucket",
        "what is bucket",
        "bucket project",
        "personalized bucket list curator",
        "hackhounds winner"
      ],
      answer:
        "Bucket is a personalized bucket-list curator for interns that recommends experiences based on location, interests, and budget. Built with React, TypeScript, JavaScript, Framer Motion, Gemini, Firebase, and Google Maps, it won 1st Place Overall and Best AI/ML at HackHounds 2025. It is one of Kelechi's strongest examples of combining a useful product idea with polished execution under a deadline.",
      relatedQuestions: [
        "Which projects won hackathons?",
        "Which projects use AI?",
        "Show me his best projects"
      ],
      actions: [
        {
          label: "View Bucket",
          href: "https://trybucket.vercel.app/"
        },
        {
          label: "GitHub",
          href: "https://github.com/kelechi055/bucket"
        },
        {
          label: "Devpost",
          href: "https://devpost.com/software/bucket-3hzwcf"
        }
      ]
    },
    {
      id: "gamestock",
      category: "gamestock",
      keywords: [
        "gamestock",
        "game-stock",
        "stocks",
        "nextjshackathon",
        "marketdata"
      ],
      phrases: [
        "tell me about gamestock",
        "what is gamestock",
        "gamestock project",
        "video game stock dashboard",
        "next js hackathon"
      ],
      answer:
        "GameStock is a focused dashboard that makes video game stocks easier to understand through market data, news, and financial insights. Kelechi's team built it with Next.js, TypeScript, Python, and Tailwind CSS, earning 2nd Place at the Next.js Hackathon in 2024.",
      relatedQuestions: [
        "Which projects won hackathons?",
        "Which projects use Python?",
        "Show me his best projects"
      ],
      actions: [
        {
          label: "View GameStock",
          href: "https://main--gamestockwebsite.netlify.app/"
        },
        {
          label: "GitHub",
          href: "https://github.com/saikrupa82/WeCrackedHackathon"
        },
        {
          label: "Devpost",
          href: "https://devpost.com/software/gamestock-a8u7zm"
        }
      ]
    },
    {
      id: "huzzhub",
      category: "huzzhub",
      keywords: [
        "huzzhub",
        "huzz",
        "brainrot",
        "pickuplines",
        "rizz"
      ],
      phrases: [
        "tell me about huzzhub",
        "what is huzzhub",
        "huzz hub project",
        "brainrot hackathon",
        "tiktok style pickup lines"
      ],
      answer:
        "HuzzHub is a playful AI-integrated application that uses Gemini to generate shareable, TikTok-style pickup lines. Built with React and JavaScript, it won the Brainrot Hackathon in 2024 and shows Kelechi's ability to turn a distinctive concept into a shipped experience quickly.",
      relatedQuestions: [
        "Which projects won hackathons?",
        "Which projects use AI?",
        "Tell me about Bucket"
      ],
      actions: [
        {
          label: "View HuzzHub",
          href: "https://huzz-hub.vercel.app/"
        },
        {
          label: "GitHub",
          href: "https://github.com/kelechi055/HuzzHub"
        },
        {
          label: "Devpost",
          href: "https://devpost.com/software/huzzhub-h52udq"
        }
      ]
    },
    {
      id: "budgetmaxxing",
      category: "budgetmaxxing",
      keywords: [
        "budgetmaxxing",
        "budget",
        "budgeting",
        "plaid",
        "veryfi",
        "mindee"
      ],
      phrases: [
        "tell me about budgetmaxxing",
        "what is budgetmaxxing",
        "budget maxxing project",
        "student budgeting application",
        "fastapi budgeting project",
        "what project uses fastapi",
        "which project uses fastapi"
      ],
      answer:
        "BudgetMaxxing is a team-built student budgeting application that turns linked bank activity or imported statements into spending insights, alerts, and guidance. Its backend uses Python, FastAPI, SQLAlchemy, and PostgreSQL, with Plaid bank linking, Veryfi or Mindee document OCR, and OpenAI or Gemini insights among its integrations. It is especially relevant when evaluating Kelechi's backend and API experience.",
      relatedQuestions: [
        "Does he have backend experience?",
        "Which projects use Python?",
        "Tell me about StatTrack"
      ],
      actions: [
        {
          label: "GitHub",
          href: "https://github.com/mileshall1/BudgetMaxxing"
        }
      ]
    },
    {
      id: "stattrack",
      category: "stattrack",
      keywords: [
        "stattrack",
        "stats",
        "nba",
        "express",
        "gamesjson",
        "savedgames"
      ],
      phrases: [
        "tell me about stattrack",
        "what is stattrack",
        "stat track",
        "stat track project",
        "nba stats dashboard",
        "what project uses express",
        "which project uses express",
        "what project uses node js",
        "which project uses node js",
        "express rest api project"
      ],
      answer:
        "StatTrack is a team-built NBA dashboard for adding, saving, and reviewing player game statistics. A Node.js and Express server exposes REST endpoints for reading and writing JSON game data, making it a clear example of Kelechi's JavaScript backend and API work.",
      relatedQuestions: [
        "Does he have backend experience?",
        "Does he know databases?",
        "Tell me about BudgetMaxxing"
      ],
      actions: [
        {
          label: "GitHub",
          href: "https://github.com/mileshall1/StatTrack"
        }
      ]
    },
    {
      id: "cardwiz",
      category: "cardwiz",
      keywords: [
        "cardwiz",
        "flashcards",
        "studying",
        "studytool"
      ],
      phrases: [
        "tell me about cardwiz",
        "what is cardwiz",
        "card wiz",
        "card wiz project",
        "ai flashcard tool",
        "solo study project"
      ],
      answer:
        "Cardwiz is Kelechi's solo AI study tool that turns content into review-ready flashcards using Gemini. He built it with Next.js, React, and JavaScript, demonstrating independent product development and practical AI API integration.",
      relatedQuestions: [
        "Which projects use AI?",
        "What are his solo projects?",
        "Tell me about Pantrack"
      ],
      actions: [
        {
          label: "View Cardwiz",
          href: "https://cardwiz-ai.vercel.app/"
        },
        {
          label: "GitHub",
          href: "https://github.com/kelechi055/cardwiz"
        }
      ]
    },
    {
      id: "daily_dose",
      category: "daily_dose",
      keywords: [
        "dailydose",
        "daily-dose",
        "wellness",
        "journaling",
        "toneanalysis",
        "winterbreak"
      ],
      phrases: [
        "tell me about daily dose",
        "what is daily dose",
        "daily dose project",
        "wellness application",
        "colorstack winterbreak hackathon"
      ],
      answer:
        "Daily Dose is a daily wellness application combining curated motivation with journaling insights powered by AI tone analysis. Kelechi served as Frontend Lead and Co-Founder, working with Next.js, Tailwind CSS, OpenAI functionality, and AWS DynamoDB for the ColorStack Winterbreak Hackathon 2024.",
      relatedQuestions: [
        "Which projects use AI?",
        "Does he have leadership experience?",
        "Does he know databases?"
      ],
      actions: [
        {
          label: "View Daily Dose",
          href: "https://www.daily-dose.me/"
        },
        {
          label: "GitHub",
          href: "https://github.com/BG-legacy/Daily-Dose"
        }
      ]
    },
    {
      id: "pantrack",
      category: "pantrack",
      keywords: [
        "pantrack",
        "pantry",
        "ingredients",
        "recipes",
        "spoonacular"
      ],
      phrases: [
        "tell me about pantrack",
        "what is pantrack",
        "pan track",
        "pan track project",
        "pantry manager",
        "recipe project"
      ],
      answer:
        "Pantrack is Kelechi's solo real-time pantry manager for tracking ingredients and discovering recipes from food already available. He built it with React, JavaScript, Firebase, and the Spoonacular API.",
      relatedQuestions: [
        "What are his solo projects?",
        "Does he know databases?",
        "Tell me about Cardwiz"
      ],
      actions: [
        {
          label: "View Pantrack",
          href: "https://pantrackapp.vercel.app/"
        },
        {
          label: "GitHub",
          href: "https://github.com/kelechi055/pantrack"
        }
      ]
    },
    {
      id: "portfolio",
      category: "portfolio",
      keywords: [
        "website",
        "site",
        "portfolio",
        "thiswebsite",
        "vanillajs"
      ],
      phrases: [
        "did he build this website",
        "did kelechi build this website",
        "tell me about this portfolio",
        "what is this site built with",
        "portfolio project",
        "who built this site"
      ],
      answer:
        "Yes—Kelechi built the portfolio you are using. It is a responsive, single-page site built primarily with HTML, CSS, and vanilla JavaScript to present his experience, skills, projects, and personality across screen sizes.",
      relatedQuestions: [
        "What are his solo projects?",
        "What are his strongest skills?",
        "What's his GitHub?"
      ],
      actions: [
        {
          label: "View Source",
          href: "https://github.com/kelechi055/portfolio"
        }
      ]
    },
    {
      id: "hackathons",
      category: "hackathons",
      keywords: [
        "hackathon",
        "hackathons",
        "winner",
        "wins",
        "awards",
        "prizes",
        "won"
      ],
      phrases: [
        "which projects won hackathons",
        "hackathon wins",
        "has he won hackathons",
        "what awards has he won",
        "can he build under time constraints",
        "award winning projects"
      ],
      answer:
        "Kelechi's notable results include Bucket—1st Place Overall and Best AI/ML at HackHounds 2025—GameStock, which took 2nd Place at the Next.js Hackathon 2024, and HuzzHub, a Brainrot Hackathon 2024 winner. Those projects show that he can scope, collaborate, and ship working products under tight time constraints.",
      relatedQuestions: [
        "Tell me about Bucket",
        "Tell me about GameStock",
        "Tell me about HuzzHub"
      ]
    },
    {
      id: "leadership",
      category: "leadership",
      keywords: [
        "leadership",
        "leader",
        "president",
        "founder",
        "innoventure",
        "webmaster",
        "community"
      ],
      phrases: [
        "does he have leadership experience",
        "tell me about his leadership",
        "where has he demonstrated leadership",
        "director of technology",
        "what organizations does he lead"
      ],
      answer:
        "Kelechi founded and leads Loyola University Maryland's ColorStack chapter, growing it to more than 40 members. Through technical workshops, career events, and community support, he has helped Loyola students land offers at companies including Dell, Amazon, Workday, Wells Fargo, and Morgan Stanley. He has also served as Director of Technology and Webmaster for InnoVenture Club.",
      relatedQuestions: [
        "What could he bring to my team?",
        "What is ColorStack?",
        "How can I contact him?"
      ]
    },
    {
      id: "colorstack",
      category: "leadership",
      keywords: [
        "colorstack",
        "nonprofit",
        "underrepresented",
        "latinx",
        "chapter",
        "community",
        "academicsupport",
        "careerdevelopment"
      ],
      phrases: [
        "what is colorstack",
        "what is color stack",
        "color stack",
        "what does colorstack do",
        "who does colorstack support",
        "how does colorstack help students",
        "what is kelechi's role in colorstack",
        "tell me about colorstack at loyola",
        "how has he helped students",
        "has he helped students get jobs",
        "colorstack impact",
        "colorstack chapter",
        "colorstack nonprofit"
      ],
      answer:
        "ColorStack is a nonprofit that helps Black and Latinx computer science students complete their degrees and launch rewarding technical careers through community, academic support, and career development. Kelechi founded and leads its Loyola University Maryland chapter, growing it to more than 40 members and helping students land offers at companies including Dell, Amazon, Workday, Wells Fargo, and Morgan Stanley.",
      relatedQuestions: [
        "Does he have leadership experience?",
        "How has he helped students?",
        "What could he bring to my team?"
      ],
      actions: [
        {
          label: "Learn About ColorStack",
          href: "https://www.colorstack.org/about-us"
        }
      ]
    },
    {
      id: "certifications",
      category: "certifications",
      keywords: [
        "certifications",
        "certification",
        "certificates",
        "credentials",
        "training",
        "certs"
      ],
      phrases: [
        "what certifications does kelechi have",
        "what certifications does he have",
        "does he have any certifications",
        "does he have certifications",
        "what technical training has he completed",
        "show me his credentials",
        "technical credentials"
      ],
      answer:
        "Kelechi's technical credentials include AWS SimuLearn Cloud Computing Essentials, AWS Educate Introduction to Generative AI, CodePath Technical Interview Prep 102, HackerRank Python Basics, and the Black Venture Capital Consortium's Software Engineering Fundamentals program. He also participated in the Emagine The Future 2024 Collegiate CTF.",
      relatedQuestions: [
        "Does he have AWS certifications?",
        "What did he learn through CodePath?",
        "Does he have a Python certificate?",
        "Has he done a CTF?"
      ],
      actions: [
        {
          label: "Cloud Essentials Certificate",
          href: "/images/Cloud%20Computing%20Essentials%20Certificate.pdf"
        },
        {
          label: "GenAI Credential",
          href: "https://www.credly.com/badges/9d71f4f1-366c-48f5-89da-1360690a4b90/public_url"
        },
        {
          label: "CodePath TIP Certificate",
          href: "/images/Codepath%20TIP.jpg"
        },
        {
          label: "Python Credential",
          href: "https://www.hackerrank.com/certificates/iframe/8d3f60536273"
        }
      ]
    },
    {
      id: "aws_training",
      category: "aws_training",
      keywords: [
        "aws",
        "simulearn",
        "credential",
        "credentials",
        "certified",
        "certification",
        "certificates",
        "educate",
        "training"
      ],
      phrases: [
        "does he have aws certifications",
        "does he have an aws certification",
        "does he have aws certificates",
        "has he done aws training",
        "has he completed aws training",
        "does he have cloud certifications",
        "cloud computing essentials",
        "aws simulearn",
        "aws educate introduction to generative ai",
        "is kelechi aws certified"
      ],
      answer:
        "Kelechi completed AWS Cloud Computing Essentials through AWS SimuLearn in July 2026 and Introduction to Generative AI through AWS Educate in July 2025. These credentials complement his hands-on cloud engineering experience with AWS, Azure, GCP, and OCI at Arm.",
      relatedQuestions: [
        "What cloud experience does he have?",
        "What did Kelechi do at Arm?",
        "What certifications does he have?"
      ],
      actions: [
        {
          label: "View Cloud Essentials Certificate",
          href: "/images/Cloud%20Computing%20Essentials%20Certificate.pdf"
        },
        {
          label: "View GenAI Credential",
          href: "https://www.credly.com/badges/9d71f4f1-366c-48f5-89da-1360690a4b90/public_url"
        }
      ]
    },
    {
      id: "codepath_tip",
      category: "certifications",
      keywords: [
        "codepath",
        "tip102",
        "interviewprep",
        "datastructures",
        "algorithms",
        "codinginterviews"
      ],
      phrases: [
        "what is his codepath certificate",
        "tell me about codepath",
        "codepath tip",
        "codepath tip 102",
        "technical interview prep",
        "codepath interview prep",
        "technical interview prep 102",
        "has he done technical interview prep",
        "what interview prep has he completed",
        "what did he learn through codepath",
        "does he have codepath training",
        "data structures and algorithms training"
      ],
      answer:
        "Kelechi completed CodePath's Technical Interview Prep 102 course, sharpening his problem-solving through Python, data structures, algorithms, and interview-style coding practice.",
      relatedQuestions: [
        "What are his strongest technical skills?",
        "Does he know Python?",
        "What certifications does he have?"
      ],
      actions: [
        {
          label: "View CodePath Certificate",
          href: "/images/Codepath%20TIP.jpg"
        }
      ]
    },
    {
      id: "python_credential",
      category: "python_credential",
      keywords: [
        "pythoncertificate",
        "pythoncredential",
        "hackerrank",
        "pythonbasics"
      ],
      phrases: [
        "does he have a python certification",
        "does he have a python certificate",
        "python cert",
        "python basics credential",
        "hackerrank python",
        "python training"
      ],
      answer:
        "Kelechi earned the HackerRank Python Basics credential in May 2025. The stronger evidence of his Python ability is his professional automation and performance tooling at Arm plus backend development with FastAPI and SQLAlchemy in BudgetMaxxing.",
      relatedQuestions: [
        "Does he know Python?",
        "Which projects use Python?",
        "What did Kelechi do at Arm?"
      ],
      actions: [
        {
          label: "View Credential",
          href: "https://www.hackerrank.com/certificates/iframe/8d3f60536273"
        }
      ]
    },
    {
      id: "software_engineering_training",
      category: "certifications",
      keywords: [
        "bvcc",
        "blackventurecapitalconsortium",
        "fundamentalscredential",
        "709325bc"
      ],
      phrases: [
        "software engineering fundamentals credential",
        "software engineering fundamentals program",
        "black venture capital consortium",
        "fall 2024 cohort"
      ],
      answer:
        "Kelechi completed the Black Venture Capital Consortium's Software Engineering Fundamentals Fall 2024 Cohort in December 2024. The program covered software development, data structures, web development, and related engineering foundations; its credential ID is 709325bc-71c6-4fd4-9d02-120c17e87d54.",
      relatedQuestions: [
        "What certifications does he have?",
        "What are his strongest skills?",
        "What projects has he built?"
      ]
    },
    {
      id: "security_ctf",
      category: "security_ctf",
      keywords: [
        "ctf",
        "cybersecurity",
        "security",
        "capturetheflag",
        "emagine",
        "97486659"
      ],
      phrases: [
        "has he done a ctf",
        "does he have cybersecurity experience",
        "security experience",
        "capture the flag",
        "emagine the future",
        "collegiate capture the flag"
      ],
      answer:
        "Kelechi participated in the Emagine The Future 2024 Collegiate Capture the Flag competition in November 2024; the participation credential ID is 97486659-f0b0-4536-a90f-101f878af9a1. That provides some security-oriented exposure, but it would be inaccurate to present CTF participation alone as professional cybersecurity experience.",
      relatedQuestions: [
        "What certifications does he have?",
        "What is his systems experience?",
        "What are his strongest skills?"
      ]
    },
    {
      id: "hiring",
      category: "hiring",
      keywords: [
        "hire",
        "hiring",
        "interview",
        "candidate",
        "different",
        "contribute",
        "team",
        "strongcandidate"
      ],
      phrases: [
        "why should we hire kelechi",
        "why should we hire him",
        "why should i hire him",
        "why should i interview him",
        "worth interviewing",
        "why is he a strong candidate",
        "what makes him different",
        "what makes kelechi interesting",
        "what makes him interesting as an engineer",
        "what does he bring to a team",
        "what could he contribute to our team",
        "why hire him"
      ],
      answer:
        "Kelechi brings range grounded in hands-on work: cloud and Linux engineering at Arm, backend APIs, polished frontend and full-stack products, and successful hackathon delivery. He has worked across both product-facing and systems-oriented software, collaborated in professional engineering environments, and led technical communities and project teams. That breadth helps him understand tradeoffs across layers while still shipping concrete results.",
      relatedQuestions: [
        "What did Kelechi do at Arm?",
        "Show me his best projects",
        "How can I contact him?"
      ]
    },
    {
      id: "resume",
      category: "resume",
      keywords: [
        "resume",
        "cv",
        "résumé"
      ],
      phrases: [
        "can i see his resume",
        "show me his resume",
        "view resume",
        "download resume",
        "where is his resume",
        "resume link"
      ],
      answer:
        "Kelechi's resume isn't publicly posted, but you can request it by email. The button below opens a draft you can personalize.",
      relatedQuestions: [
        "How can I contact him?",
        "What's his LinkedIn?",
        "Why should we hire Kelechi?"
      ],
      actions: [
        {
          label: "Request Resume",
          href: "mailto:kelechiopurum2005@gmail.com?subject=Resume%20Request%20%E2%80%94%20%5BCompany%20Name%5D&body=Hey%20Kelechi%2C%0D%0A%0D%0AI%27m%20%5BYour%20Name%5D%20from%20%5BCompany%20Name%5D.%20I%20was%20looking%20through%20your%20portfolio%20and%20would%20love%20to%20view%20your%20resume.%0D%0A%0D%0A%5BOptional%3A%20Add%20a%20brief%20note%20about%20the%20role%20or%20opportunity.%5D%0D%0A%0D%0ABest%2C%0D%0A%5BYour%20Name%5D"
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/kelechi-opurum/"
        }
      ]
    },
    {
      id: "github",
      category: "github",
      keywords: [
        "github",
        "repos",
        "repositories",
        "code",
        "source"
      ],
      phrases: [
        "whats his github",
        "what is his github",
        "show me his github",
        "github profile",
        "where is his code",
        "source code"
      ],
      answer:
        "Kelechi's GitHub profile is github.com/kelechi055. It includes source for projects such as Bucket, HuzzHub, Cardwiz, Pantrack, and this portfolio, while some team projects live in collaborators' repositories.",
      relatedQuestions: [
        "Show me his best projects",
        "Did he build this website?",
        "How can I contact him?"
      ],
      actions: [
        {
          label: "Open GitHub",
          href: "https://github.com/kelechi055"
        }
      ]
    },
    {
      id: "linkedin",
      category: "linkedin",
      keywords: [
        "linkedin",
        "linked-in",
        "professionalprofile",
        "connect"
      ],
      phrases: [
        "whats his linkedin",
        "what is his linkedin",
        "show me his linkedin",
        "linkedin profile",
        "connect with kelechi"
      ],
      answer:
        "You can view Kelechi's professional profile and connect with him on LinkedIn. The portfolio's existing LinkedIn link points to linkedin.com/in/kelechi-opurum.",
      relatedQuestions: [
        "How can I contact him?",
        "Can I see his resume?",
        "What roles is he looking for?"
      ],
      actions: [
        {
          label: "Open LinkedIn",
          href: "https://www.linkedin.com/in/kelechi-opurum/"
        }
      ]
    },
    {
      id: "contact",
      category: "contact",
      keywords: [
        "contact",
        "email",
        "reach",
        "message",
        "connect",
        "talk"
      ],
      phrases: [
        "how can i contact him",
        "how do i contact kelechi",
        "what is his email",
        "email kelechi",
        "get ahold of him",
        "get in touch",
        "reach out to him"
      ],
      answer:
        "The most direct way to contact Kelechi is by email at kelechiopurum2005@gmail.com. You can also connect with him through the LinkedIn profile already linked on this portfolio.",
      relatedQuestions: [
        "What's his LinkedIn?",
        "Can I see his resume?",
        "What roles is he looking for?"
      ],
      actions: [
        {
          label: "Email Kelechi",
          href: "mailto:kelechiopurum2005@gmail.com"
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/kelechi-opurum/"
        }
      ]
    }
  ]
};
