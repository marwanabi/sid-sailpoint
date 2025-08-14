// Single Page Application for Adventure Quiz
class AdventureQuiz {
    constructor() {
        this.currentPage = 'landing';
        this.currentStage = null;
        this.selectedAnswer = null;
        this.showResult = false;
        this.quizState = {
            currentStage: 1,
            stages: [...stages],
            answers: {},
            score: 0,
            isCompleted: false
        };
        
        this.init();
    }
    
    init() {
        this.showPage('landing');
    }
    
    // Navigation
    navigateTo(page, stageId = null) {
        this.currentStage = stageId;
        this.showPage(page);
    }
    
    showPage(page) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
        
        // Show progress bar on all pages except landing
        const progressBar = document.getElementById('progress-bar');
        if (page === 'landing') {
            progressBar.style.opacity = '0';
        } else {
            progressBar.style.opacity = '1';
            this.renderProgressBar();
        }
        
        // Show current page
        document.getElementById(`${page}-page`).style.display = 'block';
        this.currentPage = page;
        
        // Initialize page-specific content
        this.initializePage(page);
    }
    
    initializePage(page) {
        switch(page) {
            case 'map':
                this.initializeMap();
                break;
            case 'scenario':
                this.initializeScenario();
                break;
            case 'question':
                this.initializeQuestion();
                break;
            case 'results':
                this.initializeResults();
                break;
        }
    }
    
    // Progress Bar
    renderProgressBar() {
        const completedQuestions = this.quizState.stages.filter(stage => stage.completed).length;
        const progressPercentage = (completedQuestions / 7) * 100;
        const stageIcons = ["🏰", "🌲", "💎", "🐉", "☁️", "🔥", "🏆"];
        
        const progressDots = document.querySelector('.progress-dots');
        progressDots.innerHTML = `
            <div class="progress-line">
                <div class="progress-line-fill" style="width: ${progressPercentage}%"></div>
            </div>
            ${stageIcons.map((icon, index) => {
                const isCompleted = (index + 1) <= completedQuestions;
                return `
                    <div class="progress-dot ${isCompleted ? 'completed' : 'incomplete'}">
                    </div>
                `;
            }).join('')}
        `;
    }
    
    // Map Page
    initializeMap() {
        const completedQuestions = this.quizState.stages.filter(stage => stage.completed).length;
        
        // Apply classes to SVG stages
        const svgStages = document.querySelectorAll('#Layer_1 [data-stage]');
        this.quizState.stages.forEach(stage => {
            const svgElement = document.querySelector(`#Layer_1 [data-stage="${stage.id}"]`);
            if (svgElement) {
                // Clear existing classes
                svgElement.classList.remove('completed', 'locked', 'unlocked');
                
                // Apply new classes based on state
                if (stage.completed) {
                    svgElement.classList.add('completed');
                } else if (!stage.unlocked) {
                    svgElement.classList.add('locked');
                } else {
                    svgElement.classList.add('unlocked');
                }
                
                // Add click handler for unlocked stages
                if (stage.unlocked) {
                    svgElement.style.cursor = 'pointer';
                    svgElement.onclick = () => this.navigateToStage(stage.id);
                } else {
                    svgElement.style.cursor = 'default';
                    svgElement.onclick = null;
                }
            }
        });
        
        // Show results button if completed
        const resultsBtn = document.getElementById('results-btn');
        if (this.quizState.isCompleted) {
            resultsBtn.style.display = 'inline-flex';
        }
    }
    
    navigateToStage(stageId) {
        this.navigateTo('scenario', stageId);
    }
    
    // Scenario Page
    initializeScenario() {
        const question = questions.find(q => q.stage === this.currentStage);
        if (!question) {
            this.navigateTo('map');
            return;
        }
        
        // Reset state
        this.selectedAnswer = null;
        this.showResult = false;
        
        // Update scenario content
        const scenarioText = document.getElementById('scenario-text');
        scenarioText.innerHTML = question.scenario;
        scenarioText.style.display = 'block'; // Reset display
        scenarioText.classList.remove('animate-fade-out'); // Reset animation class
        scenarioText.classList.add('animate-fade-in'); // Add fade-in effect
        document.getElementById('sidsailpoint-eyeBrow').innerHTML = question.eyeBrow;
        
        const scenarioImg = document.getElementById('scenario-img');
        scenarioImg.innerHTML = question.img;
        scenarioImg.classList.add('animate-fade-in'); // Add fade-in effect
        
        // Add question content to scenario
        const scenarioContent = document.getElementById('scenario-content');
        
        // Create question section (hidden initially)
        const questionSection = document.createElement('div');
        questionSection.id = 'question-section';
        questionSection.className = 'question-section';
        questionSection.style.display = 'none';
        questionSection.innerHTML = `
            <div class="question-header">
                <h3 class="question-title">${question.question}</h3>
            </div>
            <div id="options-container" class="options-container">
                ${question.options.map((option, index) => `
                    <div class="option-button" onclick="app.selectAnswer(${index})">
                        <div class="option-content">
                            <div class="option-text">
                            
                        <div class="option-letter"></div>
                        ${option.text}</div>
                            <div class="option-fact" style="display: none;">${option.fact}</div>
                        </div>
                        <div class="option-icon"></div>
                    </div>
                `).join('')}
            </div>
            <button id="continue-btn-question" class="btn btn-outline poppins-semibold" style="display: none;">Continue Adventure <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M15.9063 5.47581L11.6385 1.0018C11.5648 0.922376 11.4755 0.859018 11.3762 0.815691C11.2768 0.772363 11.1696 0.75 11.0613 0.75C10.9529 0.75 10.8457 0.772363 10.7464 0.815691C10.6471 0.859018 10.5578 0.922376 10.4841 1.0018C10.3304 1.16701 10.245 1.38425 10.245 1.60986C10.245 1.83546 10.3304 2.0527 10.4841 2.21791L13.3488 5.22085H0.957292C0.738148 5.23422 0.532362 5.33069 0.381917 5.49056C0.231472 5.65044 0.147705 5.86169 0.147705 6.0812C0.147705 6.30071 0.231472 6.51196 0.381917 6.67184C0.532362 6.83171 0.738148 6.92818 0.957292 6.94155H13.351L10.4905 9.94875C10.3368 10.114 10.2514 10.3312 10.2514 10.5568C10.2514 10.7824 10.3368 10.9997 10.4905 11.1649C10.5642 11.2443 10.6535 11.3076 10.7528 11.351C10.8521 11.3943 10.9593 11.4167 11.0677 11.4167C11.176 11.4167 11.2832 11.3943 11.3826 11.351C11.4819 11.3076 11.5712 11.2443 11.6449 11.1649L15.9127 6.69086C16.065 6.52479 16.1489 6.30736 16.1477 6.08208C16.1465 5.8568 16.0603 5.64027 15.9063 5.47581V5.47581Z"
									fill="#0071CE" />
							</svg>
</button>
        `;
        
        // Remove existing question section if it exists
        const existingQuestionSection = document.getElementById('question-section');
        if (existingQuestionSection) {
            existingQuestionSection.remove();
        }
        
        // Add question section to scenario content
        scenarioContent.appendChild(questionSection);
        
        // Show next button to reveal question
        document.getElementById('continue-btn').style.display = 'inline-flex';
        document.getElementById('continue-btn').textContent = 'Next →';
        document.getElementById('continue-btn').onclick = () => app.showQuestion();
    }
    
    showQuestion() {
        const scenarioText = document.getElementById('scenario-text');
        const questionSection = document.getElementById('question-section');
        
        // Add fade-out animation to scenario text
        scenarioText.classList.add('animate-fade-out');
        
        // Hide continue button immediately
        document.getElementById('continue-btn').style.display = 'none';
        
        // After fade-out completes, show question section with fade-in
        setTimeout(() => {
            scenarioText.style.display = 'none';
            questionSection.style.display = 'block';
            questionSection.classList.add('animate-fade-in');
        }, 300); // Match the fade-out duration
    }
    
    navigateToQuestion() {
        // No longer needed since questions are rendered in scenario
        return;
    }
    
    // Question Page
    initializeQuestion() {
        const question = questions.find(q => q.stage === this.currentStage);
        if (!question) {
            this.navigateTo('map');
            return;
        }
        
        this.selectedAnswer = null;
        this.showResult = false;
        
        document.getElementById('question-stage-number').textContent = `Stage ${this.currentStage} Question`;
        document.getElementById('question-text').textContent = question.question;
        
        // Render options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = question.options.map((option, index) => `
            <div class="option-button" onclick="app.selectAnswer(${index})">
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option}</div>
                <div class="option-icon"></div>
            </div>
        `).join('');
        
        // Reset buttons
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('submit-btn').style.display = 'inline-flex';
        document.getElementById('continue-adventure-btn').style.display = 'none';
    }
    
    selectAnswer(answerIndex) {
        if (this.showResult) return;
        
        this.selectedAnswer = answerIndex;
        
        // Update UI
        document.querySelectorAll('.option-button').forEach((btn, index) => {
            btn.classList.toggle('selected', index === answerIndex);
        });
        
        // Auto-submit the answer when selected
        this.submitAnswer();
    }
    
    submitAnswer() {
        if (this.selectedAnswer === null) return;
        
        const question = questions.find(q => q.stage === this.currentStage);
        const isCorrect = this.selectedAnswer === question.correctAnswer;
        
        // Update quiz state
        this.quizState.answers[this.currentStage] = this.selectedAnswer;
        if (isCorrect) {
            this.quizState.score++;
        }
        if (this.currentStage === 7) {
            this.quizState.isCompleted = true;
            document.body.classList.add('quiz-completed');
        }
        this.saveQuizState();
        
        this.showResult = true;
        
        // Update UI to show results
        document.querySelectorAll('.option-button').forEach((btn, index) => {
            const optionFact = btn.querySelector('.option-fact');
            if (optionFact) {
                optionFact.style.display = 'block';
                optionFact.classList.add('animate-fade-in');
            }
            if (index === question.correctAnswer) {
                btn.classList.add('correct');
                // btn.querySelector('.option-icon').textContent = '✅';
            } else {
                btn.classList.add('incorrect');
                // btn.querySelector('.option-icon').textContent = '❌';
            }
        });
        
        // Show result card
        
        // Show continue button after answer is submitted
        const continueBtn = document.getElementById('continue-btn-question');
        continueBtn.style.display = 'inline-flex';
        // continueBtn.textContent = 'Continue Adventure →';
        continueBtn.onclick = () => app.continueAdventure();
        continueBtn.classList.add('animate-fade-in');
    }
    
    continueAdventure() {
        if (this.currentStage < 7) {
            this.unlockNextStage(this.currentStage);
            this.navigateTo('map');
        } else {
            // Complete the final stage and show results
            this.unlockNextStage(this.currentStage);
            this.navigateTo('results');
        }
    }
    
    unlockNextStage(currentStageId) {
        this.quizState.stages = this.quizState.stages.map(stage => {
            if (stage.id === currentStageId) {
                return { ...stage, completed: true };
            }
            if (stage.id === currentStageId + 1) {
                return { ...stage, unlocked: true };
            }
            return stage;
        });
        this.quizState.currentStage = Math.min(currentStageId + 1, 7);
        this.saveQuizState();
    }
    
    // Results Page
    initializeResults() {
        const result = this.getResult();
        
        const resultIconLarge = document.getElementById('result-icon-large');
        const resultTitleLarge = document.getElementById('result-title-large');
        const resultImage = document.getElementById('result-image');
        const resultDescriptionDesc = document.getElementById('results-description--desc');
        const resultDescriptiontitle = document.getElementById('results-description--title');
        const resultDescriptionSecond = document.getElementById('results-description--second');
        
        resultIconLarge.textContent = result.icon;
        resultTitleLarge.textContent = result.title;
        resultImage.innerHTML = result.image;
        resultDescriptionDesc.textContent = result.description;
        resultDescriptiontitle.textContent = result.descTitle;
        resultDescriptionSecond.textContent = result.descSecond;
        
        // Add fade-in effects
        resultIconLarge.classList.add('animate-fade-in');
        resultTitleLarge.classList.add('animate-fade-in');
        resultImage.classList.add('animate-fade-in');
        resultDescriptiontitle.classList.add('animate-fade-in');
        resultDescriptionSecond.classList.add('animate-fade-in');
        
        // Update stats
        const scoreNumber = document.getElementById('score-number');
        const percentage = document.getElementById('percentage');
        scoreNumber.textContent = `${this.quizState.score}/7`;
        percentage.textContent = `${Math.round((this.quizState.score / 7) * 100)}%`;
        scoreNumber.classList.add('animate-fade-in');
        percentage.classList.add('animate-fade-in');
        
        // Update progress bar
        document.getElementById('final-progress').style.width = `${(this.quizState.score / 7) * 100}%`;
        
        // Render summary stages
        const summaryStages = document.getElementById('summary-stages');
        summaryStages.innerHTML = stages.map((stage, index) => {
            const question = questions.find(q => q.stage === stage.id);
            const userAnswer = this.quizState.answers[stage.id];
            const isCorrect = userAnswer === question?.correctAnswer;
            
            return `
                <div class="summary-stage">
                    <div class="summary-stage-icon">${stage.icon}</div>
                    <div class="summary-stage-name">${stage.name}</div>
                    <div class="summary-stage-result ${isCorrect ? 'correct' : 'incorrect'}"></div>
                </div>
            `;
        }).join('');
    }
    
    getResult() {
        return quizResults.find(result => 
            this.quizState.score >= result.minScore && this.quizState.score <= result.maxScore
        ) || quizResults[0];
    }
    
    // State Management
    loadQuizState() {
        const saved = localStorage.getItem('adventureQuizState');
        if (saved) {
            this.quizState = { ...this.quizState, ...JSON.parse(saved) };
        }
    }
    
    saveQuizState() {
        localStorage.setItem('adventureQuizState', JSON.stringify(this.quizState));
    }
    
    resetQuiz() {
        localStorage.removeItem('adventureQuizState');
        this.quizState = {
            currentStage: 1,
            stages: [...stages],
            answers: {},
            score: 0,
            isCompleted: false
        };
        this.navigateTo('landing');
    }
}

// Global functions for HTML onclick handlers
function navigateTo(page) {
    app.navigateTo(page);
}

function resetQuiz() {
    app.resetQuiz();
}

function submitAnswer() {
    app.submitAnswer();
}

function continueAdventure() {
    app.continueAdventure();
}

// Initialize app
const app = new AdventureQuiz();