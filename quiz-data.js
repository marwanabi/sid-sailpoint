// Quiz data
const stages = [
    { id: 1, name: "Ancient Castle", icon: "", unlocked: true, completed: false },
    { id: 2, name: "Mystic Forest", icon: "", unlocked: false, completed: false },
    { id: 3, name: "Crystal Cave", icon: "", unlocked: false, completed: false },
    { id: 4, name: "Dragon's Lair", icon: "", unlocked: false, completed: false },
    { id: 5, name: "Floating Islands", icon: "", unlocked: false, completed: false },
    { id: 6, name: "Phoenix Temple", icon: "", unlocked: false, completed: false },
    { id: 7, name: "Golden Treasure", icon: "", unlocked: false, completed: false },
];

const questions = [
    {
        id: 1,
        stage: 1,
        img:`<img src="assets/sidSailPoint-inheritedChaos.png"/>`,
        eyeBrow: 'inherited chaos',
        scenario: `
        <h3 class="poppins-semibold">Scenario</h3>
        <p class="poppins-regular">You’ve just stepped into a critical new role overseeing identity security across core infrastructure. On day one, you realize there’s no reliable inventory of machine accounts. No documentation. No ownership records. Just bots, service accounts, and automated processes running across multiple systems — many with unknown purpose or risk level.</p>
        <p class="poppins-regular">You’re responsible for identifying every machine identity before something critical slips through the cracks.</p>
        <div class="sidsailpoint-context flex">
        <img src="assets/sidSailPoint-contextpersona.png"/>
        <div>
        <p><span class="poppins-semibold">Internal responsibility: </span>Take ownership of all machine identities and establish governance</p>
        <p><span class="poppins-semibold">Context: </span>No visibility, no documentation, and unclear account purpose across the environment</p>
        </div>
        </div>`,
        question: "What’s the best course of action?",
        options: [
            { text: "Wait until the next bi-annual access review to try to identify risky access", fact: `<span class="incorrect">Incorrect.</span>Waiting months can subject your enterprise to unnecessary risk of damage from a breach or malicious activity` },
            { text: "Leverage advanced machine learning to analyze identity access relationships and flag odd access", fact: `<span class="correct">correct!</span>Pinpoint potential security risks or compliance violations to maintain strong security postures and ensure compliance` },
            { text: "Grab a coffee and buckle up for some long days manually reviewing access to find anomalies.", fact: `<span class="incorrect">Incorrect.</span>Manual processes do not scale sufficiently to protect access and avoid breaches` },
            { text: "Play it safe, you don’t want to disable access to a critical application the executive team uses often.", fact: `<span class="incorrect">Incorrect.</span>Incorrect. Ignoring things leaves you exposed. Balance security and productivity with identity analytics` }
        ],
        correctAnswer: 1
    },
    {
        id: 2,
        stage: 2,
        img:`<img src="assets/sidSailPoint-inheritedChaos.png"/>`,
        eyeBrow: 'Trusted partner turned competitor',
        scenario: `
        <h3 class="poppins-semibold">Scenario</h3>
        <p class="poppins-regular">You’ve just stepped into a critical new role overseeing identity security across core infrastructure. On day one, you realize there’s no reliable inventory of machine accounts. No documentation. No ownership records. Just bots, service accounts, and automated processes running across multiple systems — many with unknown purpose or risk level.</p>
        <p class="poppins-regular">You’re responsible for identifying every machine identity before something critical slips through the cracks.</p>
        <div class="sidsailpoint-context flex">
        <img src="assets/sidSailPoint-contextpersona.png"/>
        <div>
        <p><span class="poppins-semibold">Internal responsibility: </span>Take ownership of all machine identities and establish governance</p>
        <p><span class="poppins-semibold">Context: </span>No visibility, no documentation, and unclear account purpose across the environment</p>
        </div>
        </div>`,
        question: "What’s the best course of action?",
        options: [
            { text: "Wait until the next bi-annual access review to try to identify risky access", fact: `<span class="incorrect">Incorrect.</span>Waiting months can subject your enterprise to unnecessary risk of damage from a breach or malicious activity` },
            { text: "Leverage advanced machine learning to analyze identity access relationships and flag odd access", fact: `<span class="correct">correct!</span>Pinpoint potential security risks or compliance violations to maintain strong security postures and ensure compliance` },
            { text: "Grab a coffee and buckle up for some long days manually reviewing access to find anomalies.", fact: `<span class="incorrect">Incorrect.</span>Manual processes do not scale sufficiently to protect access and avoid breaches` },
            { text: "Play it safe, you don’t want to disable access to a critical application the executive team uses often.", fact: `<span class="incorrect">Incorrect.</span>Incorrect. Ignoring things leaves you exposed. Balance security and productivity with identity analytics` }
        ],
        correctAnswer: 2
    },
    {
        id: 3,
        stage: 3,
        img:`<img src="assets/sidSailPoint-inheritedChaos.png"/>`,
        eyeBrow: 'Ghosts of Access Past',
        scenario: `
        <h3 class="poppins-semibold">Scenario</h3>
        <p class="poppins-regular">You’ve just stepped into a critical new role overseeing identity security across core infrastructure. On day one, you realize there’s no reliable inventory of machine accounts. No documentation. No ownership records. Just bots, service accounts, and automated processes running across multiple systems — many with unknown purpose or risk level.</p>
        <p class="poppins-regular">You’re responsible for identifying every machine identity before something critical slips through the cracks.</p>
        <div class="sidsailpoint-context flex">
        <img src="assets/sidSailPoint-contextpersona.png"/>
        <div>
        <p><span class="poppins-semibold">Internal responsibility: </span>Take ownership of all machine identities and establish governance</p>
        <p><span class="poppins-semibold">Context: </span>No visibility, no documentation, and unclear account purpose across the environment</p>
        </div>
        </div>`,
        question: "What’s the best course of action?",
        options: [
            { text: "Wait until the next bi-annual access review to try to identify risky access", fact: `<span class="incorrect">Incorrect.</span>Waiting months can subject your enterprise to unnecessary risk of damage from a breach or malicious activity` },
            { text: "Leverage advanced machine learning to analyze identity access relationships and flag odd access", fact: `<span class="correct">correct!</span>Pinpoint potential security risks or compliance violations to maintain strong security postures and ensure compliance` },
            { text: "Grab a coffee and buckle up for some long days manually reviewing access to find anomalies.", fact: `<span class="incorrect">Incorrect.</span>Manual processes do not scale sufficiently to protect access and avoid breaches` },
            { text: "Play it safe, you don’t want to disable access to a critical application the executive team uses often.", fact: `<span class="incorrect">Incorrect.</span>Incorrect. Ignoring things leaves you exposed. Balance security and productivity with identity analytics` }
        ],
        correctAnswer: 3
    },
    {
        id: 4,
        stage: 4,
        img:`<img src="assets/sidSailPoint-inheritedChaos.png"/>`,
        eyeBrow: 'Identity loop',
        scenario: `
        <h3 class="poppins-semibold">Scenario</h3>
        <p class="poppins-regular">You’ve just stepped into a critical new role overseeing identity security across core infrastructure. On day one, you realize there’s no reliable inventory of machine accounts. No documentation. No ownership records. Just bots, service accounts, and automated processes running across multiple systems — many with unknown purpose or risk level.</p>
        <p class="poppins-regular">You’re responsible for identifying every machine identity before something critical slips through the cracks.</p>
        <div class="sidsailpoint-context flex">
        <img src="assets/sidSailPoint-contextpersona.png"/>
        <div>
        <p><span class="poppins-semibold">Internal responsibility: </span>Take ownership of all machine identities and establish governance</p>
        <p><span class="poppins-semibold">Context: </span>No visibility, no documentation, and unclear account purpose across the environment</p>
        </div>
        </div>`,
        question: "What’s the best course of action?",
        options: [
            { text: "Wait until the next bi-annual access review to try to identify risky access", fact: `<span class="incorrect">Incorrect.</span>Waiting months can subject your enterprise to unnecessary risk of damage from a breach or malicious activity` },
            { text: "Leverage advanced machine learning to analyze identity access relationships and flag odd access", fact: `<span class="correct">correct!</span>Pinpoint potential security risks or compliance violations to maintain strong security postures and ensure compliance` },
            { text: "Grab a coffee and buckle up for some long days manually reviewing access to find anomalies.", fact: `<span class="incorrect">Incorrect.</span>Manual processes do not scale sufficiently to protect access and avoid breaches` },
            { text: "Play it safe, you don’t want to disable access to a critical application the executive team uses often.", fact: `<span class="incorrect">Incorrect.</span>Incorrect. Ignoring things leaves you exposed. Balance security and productivity with identity analytics` }
        ],
        correctAnswer: 1
    },
    {
        id: 5,
        stage: 5,
        img:`<img src="assets/sidSailPoint-inheritedChaos.png"/>`,
        eyeBrow: 'ai overreach',
        scenario: `
        <h3 class="poppins-semibold">Scenario</h3>
        <p class="poppins-regular">You’ve just stepped into a critical new role overseeing identity security across core infrastructure. On day one, you realize there’s no reliable inventory of machine accounts. No documentation. No ownership records. Just bots, service accounts, and automated processes running across multiple systems — many with unknown purpose or risk level.</p>
        <p class="poppins-regular">You’re responsible for identifying every machine identity before something critical slips through the cracks.</p>
        <div class="sidsailpoint-context flex">
        <img src="assets/sidSailPoint-contextpersona.png"/>
        <div>
        <p><span class="poppins-semibold">Internal responsibility: </span>Take ownership of all machine identities and establish governance</p>
        <p><span class="poppins-semibold">Context: </span>No visibility, no documentation, and unclear account purpose across the environment</p>
        </div>
        </div>`,
        question: "What’s the best course of action?",
        options: [
            { text: "Wait until the next bi-annual access review to try to identify risky access", fact: `<span class="incorrect">Incorrect.</span>Waiting months can subject your enterprise to unnecessary risk of damage from a breach or malicious activity` },
            { text: "Leverage advanced machine learning to analyze identity access relationships and flag odd access", fact: `<span class="correct">correct!</span>Pinpoint potential security risks or compliance violations to maintain strong security postures and ensure compliance` },
            { text: "Grab a coffee and buckle up for some long days manually reviewing access to find anomalies.", fact: `<span class="incorrect">Incorrect.</span>Manual processes do not scale sufficiently to protect access and avoid breaches` },
            { text: "Play it safe, you don’t want to disable access to a critical application the executive team uses often.", fact: `<span class="incorrect">Incorrect.</span>Incorrect. Ignoring things leaves you exposed. Balance security and productivity with identity analytics` }
        ],
        correctAnswer: 3
    },
    {
        id: 6,
        stage: 6,
        img:`<img src="assets/sidSailPoint-inheritedChaos.png"/>`,
        eyeBrow: 'anyone with the link',
        scenario: `
        <h3 class="poppins-semibold">Scenario</h3>
        <p class="poppins-regular">You’ve just stepped into a critical new role overseeing identity security across core infrastructure. On day one, you realize there’s no reliable inventory of machine accounts. No documentation. No ownership records. Just bots, service accounts, and automated processes running across multiple systems — many with unknown purpose or risk level.</p>
        <p class="poppins-regular">You’re responsible for identifying every machine identity before something critical slips through the cracks.</p>
        <div class="sidsailpoint-context flex">
        <img src="assets/sidSailPoint-contextpersona.png"/>
        <div>
        <p><span class="poppins-semibold">Internal responsibility: </span>Take ownership of all machine identities and establish governance</p>
        <p><span class="poppins-semibold">Context: </span>No visibility, no documentation, and unclear account purpose across the environment</p>
        </div>
        </div>`,
        question: "What’s the best course of action?",
        options: [
            { text: "Wait until the next bi-annual access review to try to identify risky access", fact: `<span class="incorrect">Incorrect.</span>Waiting months can subject your enterprise to unnecessary risk of damage from a breach or malicious activity` },
            { text: "Leverage advanced machine learning to analyze identity access relationships and flag odd access", fact: `<span class="correct">correct!</span>Pinpoint potential security risks or compliance violations to maintain strong security postures and ensure compliance` },
            { text: "Grab a coffee and buckle up for some long days manually reviewing access to find anomalies.", fact: `<span class="incorrect">Incorrect.</span>Manual processes do not scale sufficiently to protect access and avoid breaches` },
            { text: "Play it safe, you don’t want to disable access to a critical application the executive team uses often.", fact: `<span class="incorrect">Incorrect.</span>Incorrect. Ignoring things leaves you exposed. Balance security and productivity with identity analytics` }
        ],
        correctAnswer: 1
    },
    {
        id: 7,
        stage: 7,
        img:`<img src="assets/sidSailPoint-inheritedChaos.png"/>`,
        eyeBrow: 'anomaly Detected!',
        scenario: `
        <h3 class="poppins-semibold">Scenario</h3>
        <p class="poppins-regular">You’ve just stepped into a critical new role overseeing identity security across core infrastructure. On day one, you realize there’s no reliable inventory of machine accounts. No documentation. No ownership records. Just bots, service accounts, and automated processes running across multiple systems — many with unknown purpose or risk level.</p>
        <p class="poppins-regular">You’re responsible for identifying every machine identity before something critical slips through the cracks.</p>
        <div class="sidsailpoint-context flex">
        <img src="assets/sidSailPoint-contextpersona.png"/>
        <div>
        <p><span class="poppins-semibold">Internal responsibility: </span>Take ownership of all machine identities and establish governance</p>
        <p><span class="poppins-semibold">Context: </span>No visibility, no documentation, and unclear account purpose across the environment</p>
        </div>
        </div>`,
        question: "What’s the best course of action?",
        options: [
            { text: "Wait until the next bi-annual access review to try to identify risky access", fact: `<span class="incorrect">Incorrect.</span>Waiting months can subject your enterprise to unnecessary risk of damage from a breach or malicious activity` },
            { text: "Leverage advanced machine learning to analyze identity access relationships and flag odd access", fact: `<span class="correct">correct!</span>Pinpoint potential security risks or compliance violations to maintain strong security postures and ensure compliance` },
            { text: "Grab a coffee and buckle up for some long days manually reviewing access to find anomalies.", fact: `<span class="incorrect">Incorrect.</span>Manual processes do not scale sufficiently to protect access and avoid breaches` },
            { text: "Play it safe, you don’t want to disable access to a critical application the executive team uses often.", fact: `<span class="incorrect">Incorrect.</span>Incorrect. Ignoring things leaves you exposed. Balance security and productivity with identity analytics` }
        ],
        correctAnswer: 2
    }
];

const quizResults = [
    {
        title: "Identity Novice",
        image: `<img src="assets/sidsailpoint-identitynovice.png"/>`,
        description: "You’re starting to recognize identity risks, but many threats remain hidden. There’s much more to uncover.",
        descTitle:'Early in the journey',
        descSecond:'You have proven your instincts. Now sharpen your knowledge.',
        icon: "🌱",
        minScore: 0,
        maxScore: 1
    },
    {
        title: "Identity Apprentice",
        image: `<img src="assets/sidsailpoint-identitynovice.png"/>`,
        description: "You’ve identified some key risks, but several were missed. Your instincts are forming—AI can help guide the way.",
        descTitle:'Making progress',
        descSecond:'Well played. But the journey to mastery never stops.',
        icon: "🗺️",
        minScore: 2,
        maxScore: 3
    },
    {
        title: "Identity Explorer",
        image: `<img src="assets/sidsailpoint-identitynovice.png"/>`,
        description: "You caught most issues and show growing skill in detecting risky identity situations. You're on your way to mastery.",
        descTitle:'Solid understanding',
        descSecond:'You crushed the challenge. Now take your knowledge even further.',
        icon: "⚔️",
        minScore: 4,
        maxScore: 5
    },
    {
        title: "Identity Strategist",
        image: `<img src="assets/sidsailpoint-identitynovice.png"/>`,
        description: "Your decisions reflect deep knowledge of identity security. You’re ready to lead change with AI-powered tools.",
        descTitle:'Strong Performance',
        descSecond:'Game mastered. Time to assess your real-world impact.',
        icon: "👑",
        minScore: 6,
        maxScore: 6
    },
    {
        title: "Identity Guardian",
        image: `<img src="assets/sidsailpoint-identitynovice.png"/>`,
        description: "You flawlessly uncovered every risk—your instincts, accuracy, and timing are elite. You’re ready to shape the future of identity security.",
        descTitle:'Top-tier expertise',
        descSecond:'You crushed the challenge. Now take your program even further.',
        icon: "🌟",
        minScore: 7,
        maxScore: 7
    }
];