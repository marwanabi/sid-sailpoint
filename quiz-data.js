// Quiz data
const stages = [
    { id: 1, name: "Inherited chaos", unlocked: true, completed: false },
    { id: 2, name: "Trusted partner turned competitor", unlocked: false, completed: false },
    { id: 3, name: "Ghosts of access part", unlocked: false, completed: false },
    { id: 4, name: "Identity loop", unlocked: false, completed: false },
    { id: 5, name: "AI overreach", unlocked: false, completed: false },
    { id: 6, name: "Anyone with the link", unlocked: false, completed: false },
    { id: 7, name: "anomaly detected", unlocked: false, completed: false },
];

const questions = [
    {
        id: 1,
        stage: 1,
        img: `<img src="assets/sidSailPoint-inheritedChaos.png" style="max-width:510px"/>`,
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
            { text: "Manually audit each system and build an inventory from scratch", fact: `<span class="incorrect">Incorrect.</span>Manual discovery is slow, error-prone, and unscalable — especially in dynamic environments.` },
            { text: "Wait for engineering teams to confirm which accounts are in use", fact: `<span class="incorrect">Incorrect.</span>That approach relies on incomplete knowledge and delays resolution of unmanaged risk.` },
            { text: "Use automated discovery to scan systems and surface machine accounts", fact: `<span class="correct">Correct!</span>Machine Identity Security automates discovery helping you gain visibility and control.` },
            { text: "Defer discovery until after the next project phase to avoid disruption", fact: `<span class="incorrect">Incorrect.</span>Every day of delay increases your exposure to misused or orphaned machine accounts.` }
        ],
        helpcopy: `
	<div class="flex">
		<p class="sidsailpoint-eyeBrow poppins-semibold">Inherited chaos often starts with machines</p>
		</div>
		<div class="stat">
			<p><span class="poppins-semibold">72%</span><span>of identity professionals say machine identities are more difficult to manage than human identities.</span></p>
		</div>
		<div class="stat">
			<p><span class="poppins-semibold">88%</span><span>are unsure about deleting machine identities believing something may break as a result.</span></p>
		</div>

		<p class="source"><span class="poppins-semibold">Source:</span> SailPoint’s 2024 special report “Machine identity crisis: The challenges of manual processes and hidden risks.”</p>
	
        `,
        correctAnswer: 2
    },
    {
        id: 2,
        stage: 2,
        img: `<img src="assets/sidsailpoint-trustedpartner.png" style="max-width:566px"/>`,
        eyeBrow: 'Trusted partner turned competitor',
        scenario: `
        <h3 class="poppins-semibold">Scenario</h3>
        <p class="poppins-regular">Acme Solutions has been a long-standing business partner with deep access to your internal development tools and shared collaboration environments.
This morning, they issued a press release announcing a product that directly competes with yours — featuring capabilities nearly identical to those built during your joint initiative.
</p>
        <p class="poppins-regular">The formal partnership hasn’t been terminated, but Acme’s users still have active credentials across your systems. As the identity governance lead, it’s on you to decide what happens next.
.</p>
        <div class="sidsailpoint-context flex">
        <img src="assets/sidSailPoint-contextpersona.png"/>
        <div>
        <p><span class="poppins-semibold">Internal responsibility: </span>Oversee third-party access and mitigate identity-related risks</p>
        <p><span class="poppins-semibold">Context: </span>Partner access still active despite clear competitive shift</p>
        </div>
        </div>`,
        question: "What’s the best course of action?",
        options: [
            { text: "Wait for Acme to reach out about their future plans", fact: `<span class="incorrect">Incorrect.</span>Relying on a now-competing third party to voluntarily relinquish access leaves your systems vulnerable.` },
            { text: "Immediately revoke all access tied to Acme Solutions", fact: `<span class="correct">Correct!</span>Residual partner access poses a clear risk. Cut access now, re-evaluate collaboration later.` },
            { text: "Revoke access from the most privileged users first, and monitor the rest", fact: `<span class="incorrect">Incorrect.</span>Identities need to be addressed uniformly to eliminate exposure.` },
            { text: "Wait for internal project sponsors to align before making changes", fact: `<span class="incorrect">Incorrect.</span>Risk escalation demands proactive access decisions. Governance shouldn’t stall behind politics or process.` }
        ],
        helpcopy: `
	<div class="flex">
		<p class="sidsailpoint-eyeBrow poppins-semibold">Manual processes often lead to security issues</p>
		
		</div>
		<div class="stat">
			<p><span class="poppins-semibold">51%</span><span>of organizations admit inappropriate access has been assigned to a non-employee, and another 16% don’t even know. </span></p>
		</div>
		<div class="stat">
			<p><span class="poppins-semibold">83%</span><span>require a manual process to remove access from a non-employee when the working relationship ends.</span></p>
		</div>

		<p class="source"><span class="poppins-semibold">Source:</span> “Manual approach to managing non-employee identities leads to security issues”</p>

        `,
        correctAnswer: 1
    },
    {
        id: 3,
        stage: 3,
        img: `<img src="assets/sidsailpoint-ghost.png"/>`,
        eyeBrow: 'Ghosts of Access Past',
        scenario: `
        <h3 class="poppins-semibold">Scenario</h3>
        <p class="poppins-regular">A senior engineer has accumulated multiple roles over time due to departmental transfers, leading to excessive and conflicting permissions across development, production, and security environments. Over the past three years, a senior engineer has moved between teams spanning infrastructure, DevOps, and cybersecurity. With each transfer, new roles were added — but older ones were never removed. Now, this individual has conflicting permissions across production, development, and security environments, creating the perfect storm for privilege escalation or accidental misuse.</p>
        <p class="poppins-regular">As the identity governance lead, it's your job to identify and resolve this risk before it leads to a security incident or audit finding.</p>
        <div class="sidsailpoint-context flex">
        <img src="assets/sidSailPoint-contextpersona.png"/>
        <div>
        <p><span class="poppins-semibold">Internal responsibility: </span>Ensure least-privilege access across user lifecycle events</p>
        <p><span class="poppins-semibold">Context: </span>Accumulated roles causing excessive, risky entitlements</p>
        </div>
        </div>`,
        question: "What’s the best course of action?",
        options: [
            { text: "Leave all current access in place until their manager submits a change request", fact: `<span class="incorrect">Incorrect.</span>This reactive approach delays resolution and keeps high-risk access alive. Relying on manual requests introduces unnecessary risks` },
            { text: "Launch an access certification campaign and use AI to recommend least-privilege roles", fact: `<span class="correct">Correct!</span>This allows you to quickly surface outliers and use identity intelligence to streamline access based on job function.` },
            { text: "Reassign the user to a generic “engineering” role and hope it resolves overlap", fact: `<span class="incorrect">Incorrect.</span>Role assumptions without validation often miss context-specific permissions and don't address lingering access.` },
            { text: "Wait until the next quarterly review to revisit the user’s access", fact: `<span class="incorrect">Incorrect.</span>Known risks shouldn’t sit idle. Access reviews need to happen in real-time when red flags emerge.` }
        ],
        helpcopy: `
	<div class="flex">
		<p class="sidsailpoint-eyeBrow poppins-semibold">Did you know that…</p>
		
		</div>
		<div class="stat">
			<p><span class="poppins-semibold">76%</span><span>of organizations struggle with detecting toxic access combinations.</span></p>
		</div>

		<p class="source"><span class="poppins-semibold">Source:</span> KuppingerCole, Leadership Compass: Identity Governance & Administration, 2024</p>

        `,
        correctAnswer: 1
    },
    {
        id: 4,
        stage: 4,
        img: `<img src="assets/sidsailpoint-identity.png" style="max-width:460px"/>`,
        eyeBrow: 'Identity loop',
        scenario: `
        <h3 class="poppins-semibold">Scenario</h3>
        <p class="poppins-regular">Your organization recently hired 75 new employees across multiple departments. Due to disconnected HR and IT systems, onboarding has been slow and inconsistent — some employees didn’t receive necessary access on day one, while others received more than they needed. Meanwhile, access for recently departed employees is still active in key systems due to delayed offboarding processes.</p>
        <p class="poppins-regular">As the identity lifecycle owner, you must take immediate steps to standardize provisioning and deprovisioning to reduce risk and improve productivity.</p>
        <div class="sidsailpoint-context flex">
        <img src="assets/sidSailPoint-contextpersona.png"/>
        <div>
        <p><span class="poppins-semibold">Internal responsibility: </span>Streamline identity lifecycle processes and minimize access risk</p>
        <p><span class="poppins-semibold">Context: </span>Disjointed onboarding/offboarding creating operational delays and security gaps</p>
        </div>
        </div>`,
        question: "What’s the best course of action?",
        options: [
            { text: "Continue relying on manual tickets for onboarding and offboarding", fact: `<span class="incorrect">Incorrect.</span>Manual processes are slow, error-prone, and introduce compliance and security risks.` },
            { text: "Send department managers a quarterly report asking them to review user access", fact: `<span class="incorrect">Incorrect.</span>Quarterly access reviews are insufficient when real-time changes are required. Lifecycle events need immediate action.` },
            { text: "Integrate HR systems with ILM workflows and automate lifecycle triggers", fact: `<span class="correct">Correct!</span>Real-time integration ensures accurate provisioning and prompt access removal based on lifecycle events.` },
            { text: "Address only offboarding issues and wait to automate onboarding later", fact: `<span class="incorrect">Incorrect.</span>Partial solutions expose the business to risk. Lifecycle automation must be end-to-end.` }
        ],
        helpcopy: `

	<div class="flex">
		<p class="sidsailpoint-eyeBrow poppins-semibold">Manual processes create blind spots</p>
		
		</div>
		<div class="stat">
			<p><span class="poppins-semibold">65%</span><span>of organizations lacked automated onboarding/offboarding processes—leading to orphaned accounts and excess privileges.</span></p>
		</div>

		<p class="source"><span class="poppins-semibold">Source:</span> Avatier Identity & Access Management Blog, April 23, 2025</p>

        `,
        correctAnswer: 2
    },
    {
        id: 5,
        stage: 5,
        img: `<img src="assets/sidSailPoint-ai.png"/>`,
        eyeBrow: 'ai overreach',
        scenario: `
        <h3 class="poppins-semibold">Scenario</h3>
        <p class="poppins-regular">Your company just rolled out an internal Gen AI tool to help employees draft documents, analyze reports, and answer queries using enterprise data. Adoption explodes overnight. Within days, you discover the AI agent is connected to file shares, inboxes, and structured systems — without clear restrictions on what data it can access or what actions it can take. </p>
        <p class="poppins-regular">Now you're responsible for auditing and controlling the AI’s access before it inadvertently exposes regulated or confidential information.</p>
        <div class="sidsailpoint-context flex">
        <img src="assets/sidSailPoint-contextpersona.png"/>
        <div>
        <p><span class="poppins-semibold">Internal responsibility: </span>Govern AI identities and restrict unintended data exposure.</p>
        <p><span class="poppins-semibold">Context: </span>Rapid adoption of AI agents with limited visibility into their entitlements, behaviors, or data exposure.</p>
        </div>
        </div>`,
        question: "What’s the best course of action?",
        options: [
            { text: "Block all AI agent activity until access is reviewed", fact: `<span class="incorrect">Incorrect.</span>Halting all usage disrupts productivity, hurts adoption, and may lead to unsanctioned workarounds. ` },
            { text: "Rely on the engineering team to restrict AI permissions manually", fact: `<span class="incorrect">Incorrect.</span>Manual controls are prone to gaps and can’t scale with evolving AI integrations and dynamic access paths.` },
            { text: "Treat AI agents as first-class identities and analyze their access risk", fact: `<span class="correct">Correct!</span>Manage the lifecycle of AI agents with automated identity governance and enforce access certifications..` },
            { text: "Wait until AI usage policies are finalized across the org", fact: `<span class="incorrect">Incorrect.</span>Policy development takes time, and sensitive data could be exposed in the meantime` }
        ],
        helpcopy: `

	<div class="flex">
		<p class="sidsailpoint-eyeBrow poppins-semibold">The new reality of AI agents’ overreach</p>
		
		</div>
		<div class="stat">
			<p><span class="poppins-semibold">80%</span><span>of security and IT professionals said AI agents have performed unintended actions of accessing and sharing inappropriate data.</span></p>
		</div>

		<p class="source"><span class="poppins-semibold">Source:</span> AI agents: The new attack surface, A global survey of security and IT professionals and executives, SailPoint 2025</p>

        `,
        correctAnswer: 2
    },
    {
        id: 6,
        stage: 6,
        img: `<img src="assets/sidSailPoint-link.png"/>`,
        eyeBrow: 'anyone with the link',
        scenario: `
        <h3 class="poppins-semibold">Scenario</h3>
        <p class="poppins-regular">You’re leading identity governance at a growing enterprise that’s rapidly expanding its digital footprint. During a routine audit, you discover sensitive files  —  including financial reports, customer information, and intellectual property  —  have been shared externally using anonymous file links. There are no expiration dates, no recipient tracking, and no record of who approved the sharing.</p>
        <p class="poppins-regular">Worse, you find dozens of similar cases across departments with no consistent policy or visibility into who’s sharing what with whom.</p>
        <div class="sidsailpoint-context flex">
        <img src="assets/sidSailPoint-contextpersona.png"/>
        <div>
        <p><span class="poppins-semibold">Internal responsibility: </span>Prevent unauthorized external sharing of sensitive data.</p>
        <p><span class="poppins-semibold">Context: </span>File-sharing behavior is decentralized, poorly monitored, and risks regulatory non-compliance</p>
        </div>
        </div>`,
        question: "What’s the best course of action?",
        options: [
            { text: "Block all external file sharing across the enterprise", fact: `<span class="incorrect">Incorrect.</span>Overly restrictive policies disrupt productivity, push users to shadow IT, and don’t address root causes.` },
            { text: "Trust team managers to manually review file-sharing behavior", fact: `<span class="incorrect">Incorrect.</span>Manual oversight is inconsistent and scales poorly in fast-moving, cross-functional environments.` },
            { text: "Implement automated detection and alerting for sensitive file", fact: `<span class="correct">Correct!</span>Adopting a solution that can detect, alert and respond to external file sharing reduces exposure risk.` },
            { text: "Wait until quarterly audits to assess external exposure", fact: `<span class="incorrect">Incorrect.</span>Delayed detection increases the risk of data leakage, compliance violations, and reputational damage.` }
        ],
        helpcopy: `

	<div class="flex">
		<p class="sidsailpoint-eyeBrow poppins-semibold">Security incidents can leave you exposed</p>
		
		</div>
		<div class="stat">
			<p><span class="poppins-semibold">46%</span><span>of all breaches involved customer personal identifiable information (PII), which can include tax identification (ID) numbers, emails, phone numbers, and home addresses.</span></p>
		</div>

		<p class="source"><span class="poppins-semibold">Source:</span> Cost of a Data Breach Report 2024</p>

        `,
        correctAnswer: 2
    },
    {
        id: 7,
        stage: 7,
        img: `<img src="assets/sidSailPoint-anomaly.png"/>`,
        eyeBrow: 'anomaly Detected!',
        scenario: `
        <h3 class="poppins-semibold">Scenario</h3>
        <p class="poppins-regular">Identity teams are always on the lookout for the riskiest behaviors and access in their environment. Occasionally, identities can accumulate more access than needed to do their job. Identity teams need help! With such vast identity types and quantities, identifying anomalous access is virtually impossible for humans to do effectively. </p>
        <p class="poppins-regular">Let identity outliers handle it! Identity outliers leverages advanced machine learning to analyze an organization’s identity access relationships and flags anomalous access for review and remediation.</p>
        <div class="sidsailpoint-context flex">
        <img src="assets/sidSailPoint-contextpersona.png"/>
        <div>
        <p><span class="poppins-semibold">Internal responsibility: </span>Identify and remediate the riskiest access in your environment</p>
        <p><span class="poppins-semibold">Context: </span>It is a daunting task to identify anomalous access in a complex environment at scale</p>
        </div>
        </div>`,
        question: "What’s the best course of action?",
        options: [
            { text: "Wait until the next bi-annual access review to try to identify risky access", fact: `<span class="incorrect">Incorrect.</span>Waiting months can subject your enterprise to unnecessary risk of damage from a breach or malicious activity` },
            { text: "Leverage advanced machine learning to analyze identity access relationships and flag odd access", fact: `<span class="correct">Correct!</span>Pinpoint potential security risks or compliance violations to maintain strong security postures and ensure compliance` },
            { text: "Grab a coffee and buckle up for some long days manually reviewing access to find anomalies.", fact: `<span class="incorrect">Incorrect.</span>Manual processes do not scale sufficiently to protect access and avoid breaches` },
            { text: "Play it safe, you don’t want to disable access to a critical application the executive team uses often.", fact: `<span class="incorrect">Incorrect.</span>Ignoring things leaves you exposed. Balance security and productivity with identity analytics` }
        ],
        helpcopy: `

	<div class="flex">
		<p class="sidsailpoint-eyeBrow poppins-semibold">Identifying outlier behavior is key</p>
		
		</div>
        <div class="stat">
			<p><span class="poppins-semibold">97%</span><span>of IDSA survey respondents this year reported AI/ML will be beneficial for identity-related use cases in their organizations.</span></p>
		</div>
		<div class="stat">
			<p><span class="poppins-semibold">71%</span><span>named the top use case they perceived as having the most benefit was ‘Identifying outlier behaviors’.</span></p>
		</div>

		<p class="source"><span class="poppins-semibold">Source:</span> IDSA - 2024 Trends in Identity Security</p>

        `,
        correctAnswer: 1
    }
];

const quizResults = [
    {
        title: "Identity Novice",
        image: `<img src="assets/sidsailpoint-identityNovice.png"/>`,
        description: "You’re starting to recognize identity risks, but many threats remain hidden. There’s much more to uncover.",
        descTitle: 'Early in the journey',
        descSecond: 'You have proven your instincts. Now sharpen your knowledge.',
        icon: "🌱",
        minScore: 0,
        maxScore: 1
    },
    {
        title: "Identity Apprentice",
        image: `<img src="assets/sidsailpoint-identityApprentice.png"/>`,
        description: "You’ve identified some key risks, but several were missed. Your instincts are forming—AI can help guide the way.",
        descTitle: 'Making progress',
        descSecond: 'Well played. But the journey to mastery never stops.',
        icon: "🗺️",
        minScore: 2,
        maxScore: 2
    },
    {
        title: "Identity Explorer",
        image: `<img src="assets/sidsailpoint-identityExplorer.png"/>`,
        description: "You caught most issues and show growing skill in detecting risky identity situations. You're on your way to mastery.",
        descTitle: 'Solid understanding',
        descSecond: 'You crushed the challenge. Now take your knowledge even further.',
        icon: "⚔️",
        minScore: 3,
        maxScore: 3
    },
    {
        title: "Identity Strategist",
        image: `<img src="assets/sidsailpoint-identityStrategist.png"/>`,
        description: "Your decisions reflect deep knowledge of identity security. You’re ready to lead change with AI-powered tools.",
        descTitle: 'Strong Performance',
        descSecond: 'Game mastered. Time to assess your real-world impact.',
        icon: "👑",
        minScore: 4,
        maxScore: 5
    },
    {
        title: "Identity Guardian",
        image: `<img src="assets/sidsailpoint-identityGuardian.png"/>`,
        description: "You flawlessly uncovered every risk—your instincts, accuracy, and timing are elite. You’re ready to shape the future of identity security.",
        descTitle: 'Top-tier expertise',
        descSecond: 'You crushed the challenge. Now take your program even further.',
        icon: "🌟",
        minScore: 6,
        maxScore: 7
    }
];