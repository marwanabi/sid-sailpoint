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
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Add click handler for exit button to fade out overlay
        const exitBtn = document.getElementById('exit');
        if (exitBtn) {
            exitBtn.addEventListener('click', () => {
                const overlay = document.getElementById('sidsailpoint-overlayState');
                if (overlay) {
                    overlay.classList.add('animate-fade-out');
                    setTimeout(() => {
                        overlay.style.display = 'none';
                    }, 300); // Match fade-out duration
                }
            });
        }

        // Add click handler for workProcess page button to fade out the page
        const workProcessPage = document.getElementById('sidsailpoint-workProcess-page');
        if (workProcessPage) {
            const workProcessBtn = workProcessPage.querySelector('button');
            if (workProcessBtn) {
                workProcessBtn.addEventListener('click', () => {
                    workProcessPage.classList.add('animate-fade-out');
                    setTimeout(() => {
                        workProcessPage.style.display = 'none';
                    }, 300); // Match fade-out duration
                });
            }
        }

        // Add click handlers for howto-button to fade in workProcess page
        const howtoButtons = document.querySelectorAll('.howto-button');
        howtoButtons.forEach(button => {
            button.addEventListener('click', () => {
                const workProcessPage = document.getElementById('sidsailpoint-workProcess-page');
                if (workProcessPage) {
                    workProcessPage.style.display = 'block';
                    workProcessPage.classList.remove('animate-fade-out');
                    workProcessPage.classList.add('animate-fade-in');
                }
            });
        });

        // Add click handlers for stage helper elements to fade in overlay
         const stageHelpers = document.querySelectorAll('[data-stagehelper]');
        stageHelpers.forEach(helper => {
            helper.addEventListener('click', () => {
                console.log('Stage helper clicked!');
                const stageNumber = helper.getAttribute('data-stagehelper');
                console.log('Stage number:', stageNumber);
                const question = questions.find(q => q.id == stageNumber);
                console.log('Found question:', question);
                
                const overlay = document.getElementById('sidsailpoint-overlayState');
                console.log('Overlay element:', overlay);
                if (overlay && question) {
                    // Set the overlay content to the matching question's innerHTML
                    const overlayContent = overlay.querySelector('.text-container');
                    console.log('Overlay content element:', overlayContent);
                    if (overlayContent) {
                        overlayContent.innerHTML = question.helpcopy;
                    }
                    
                    overlay.style.display = 'block';
                    overlay.classList.remove('animate-fade-out');
                    overlay.classList.add('animate-fade-in');
                } else {
                    console.log('Missing overlay or question!');
                }
            });
        });
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

        // Show/hide sidsailpoint-workProcess-page based on map-page navigation
        const workProcessPage = document.getElementById('sidsailpoint-workProcess-page');
        if (workProcessPage) {
            if (page === 'map') {
                workProcessPage.style.display = 'block';
                workProcessPage.classList.remove('animate-fade-out');
                workProcessPage.classList.add('animate-fade-in');
            } else {
                workProcessPage.style.display = 'none';
            }
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
        const currentQuestion = completedQuestions;
        
        const progressDots = document.querySelector('.progress-dots');
        const progressDotsMobile = document.querySelector('.progress-dots--mobile');
        progressDotsMobile.innerHTML = `
        <div class="progress-counter">
                <span class="poppins-semibold">${currentQuestion > 7 ? 7 : currentQuestion}/7</span>
            </div>
                `;
        progressDots.innerHTML = `
            ${Array.from({ length: 7 }, (_, index) => {
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
        const svgStages = document.querySelectorAll('#Layer_1 [data-stage], #Layer_2 [data-stage]');
        this.quizState.stages.forEach(stage => {
            // Handle Layer_1
            const svgElement1 = document.querySelector(`#Layer_1 [data-stage="${stage.id}"]`);
            // Handle Layer_2
            const svgElement2 = document.querySelector(`#Layer_2 [data-stage="${stage.id}"]`);
            const helperElement = document.querySelector(`[data-stageHelper="${stage.id}"]`);
            const svgElements = [svgElement1, svgElement2];
            svgElements.forEach((svgElement, layerIndex) => {
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
                        
                        // For Layer_2 (index 1), scroll to the clicked element first then navigate
                        if (layerIndex === 1) {
                            svgElement.onclick = () => {
                                svgElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                setTimeout(() => {
                                    this.navigateToStage(stage.id);
                                }, 500); // Wait for scroll to complete
                            };
                        } else {
                            svgElement.onclick = () => this.navigateToStage(stage.id);
                        }
                    } else {
                        svgElement.style.cursor = 'default';
                        svgElement.onclick = null;
                    }
                }
            });
            
            // Apply the same classes to helper elements
            if (helperElement) {
                // Clear existing classes
                helperElement.classList.remove('completed', 'locked', 'unlocked');
                
                // Apply new classes based on state
                if (stage.completed) {
                    helperElement.classList.add('completed');
                } else if (!stage.unlocked) {
                    helperElement.classList.add('locked');
                } else {
                    helperElement.classList.add('unlocked');
                }
            }
        });
        
        // Show results button if completed
        const resultsBtn = document.getElementById('results-btn');
        if (this.quizState.isCompleted) {
            resultsBtn.style.display = 'inline-flex';
        }
        // Auto-scroll to unlocked element in Layer_2
        setTimeout(() => {
            const unlockedElement = document.querySelector('#Layer_2 [data-stage].unlocked');
            if (unlockedElement) {
                unlockedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100); 
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
        // Check if this stage was already answered
        const wasAnswered = this.quizState.answers.hasOwnProperty(this.currentStage);
        
        // Set state based on whether question was answered
        if (wasAnswered) {
            this.selectedAnswer = this.quizState.answers[this.currentStage];
            this.showResult = true;
        } else {
            this.selectedAnswer = null;
            this.showResult = false;
        }
        
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
                <h3 class="question-title poppins-semibold">${question.question}</h3>
            </div>
            <div id="options-container" class="options-container">
                ${question.options.map((option, index) => `
                    <div class="option-button" onclick="app.selectAnswer(${index})">
                        <div class="option-content flex">
                            <div class="option-text">
                            
                        <div class="option-letter"></div>
                        ${option.text}</div>
                            <div class="option-fact" style="display: none;">${option.fact}</div>
                        </div>
                        <div class="option-icon"></div>
                    </div>
                `).join('')}
            </div>
            <div class="question-buttons">
                <button id="back-btn-question" class="btn btn-outline poppins-semibold" style="display: none;" onclick="app.goBackFromQuestion()">
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M15.9063 5.47581L11.6385 1.0018C11.5648 0.922376 11.4755 0.859018 11.3762 0.815691C11.2768 0.772363 11.1696 0.75 11.0613 0.75C10.9529 0.75 10.8457 0.772363 10.7464 0.815691C10.6471 0.859018 10.5578 0.922376 10.4841 1.0018C10.3304 1.16701 10.245 1.38425 10.245 1.60986C10.245 1.83546 10.3304 2.0527 10.4841 2.21791L13.3488 5.22085H0.957292C0.738148 5.23422 0.532362 5.33069 0.381917 5.49056C0.231472 5.65044 0.147705 5.86169 0.147705 6.0812C0.147705 6.30071 0.231472 6.51196 0.381917 6.67184C0.532362 6.83171 0.738148 6.92818 0.957292 6.94155H13.351L10.4905 9.94875C10.3368 10.114 10.2514 10.3312 10.2514 10.5568C10.2514 10.7824 10.3368 10.9997 10.4905 11.1649C10.5642 11.2443 10.6535 11.3076 10.7528 11.351C10.8521 11.3943 10.9593 11.4167 11.0677 11.4167C11.176 11.4167 11.2832 11.3943 11.3826 11.351C11.4819 11.3076 11.5712 11.2443 11.6449 11.1649L15.9127 6.69086C16.065 6.52479 16.1489 6.30736 16.1477 6.08208C16.1465 5.8568 16.0603 5.64027 15.9063 5.47581V5.47581Z"
									fill="#0071CE" />
							</svg>
                            Back</button>
                <button id="continue-btn-question" class="btn btn-outline poppins-semibold" style="display: none;">Continue <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M15.9063 5.47581L11.6385 1.0018C11.5648 0.922376 11.4755 0.859018 11.3762 0.815691C11.2768 0.772363 11.1696 0.75 11.0613 0.75C10.9529 0.75 10.8457 0.772363 10.7464 0.815691C10.6471 0.859018 10.5578 0.922376 10.4841 1.0018C10.3304 1.16701 10.245 1.38425 10.245 1.60986C10.245 1.83546 10.3304 2.0527 10.4841 2.21791L13.3488 5.22085H0.957292C0.738148 5.23422 0.532362 5.33069 0.381917 5.49056C0.231472 5.65044 0.147705 5.86169 0.147705 6.0812C0.147705 6.30071 0.231472 6.51196 0.381917 6.67184C0.532362 6.83171 0.738148 6.92818 0.957292 6.94155H13.351L10.4905 9.94875C10.3368 10.114 10.2514 10.3312 10.2514 10.5568C10.2514 10.7824 10.3368 10.9997 10.4905 11.1649C10.5642 11.2443 10.6535 11.3076 10.7528 11.351C10.8521 11.3943 10.9593 11.4167 11.0677 11.4167C11.176 11.4167 11.2832 11.3943 11.3826 11.351C11.4819 11.3076 11.5712 11.2443 11.6449 11.1649L15.9127 6.69086C16.065 6.52479 16.1489 6.30736 16.1477 6.08208C16.1465 5.8568 16.0603 5.64027 15.9063 5.47581V5.47581Z"
									fill="#0071CE" />
							</svg>
            </div>
            
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
        document.getElementById('continue-btn').innerHTML = `Next <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1416 4.89183L11.8739 0.417816C11.8001 0.338392 11.7108 0.275033 11.6115 0.231706C11.5122 0.188379 11.405 0.166016 11.2966 0.166016C11.1883 0.166016 11.0811 0.188379 10.9818 0.231706C10.8824 0.275033 10.7931 0.338392 10.7194 0.417816C10.5658 0.583023 10.4803 0.800265 10.4803 1.02587C10.4803 1.25148 10.5658 1.46872 10.7194 1.63393L13.5842 4.63687H1.19264C0.973499 4.65024 0.767714 4.7467 0.617269 4.90658C0.466824 5.06646 0.383057 5.2777 0.383057 5.49722C0.383057 5.71673 0.466824 5.92797 0.617269 6.08785C0.767714 6.24773 0.973499 6.34419 1.19264 6.35756H13.5863L10.7258 9.36477C10.5722 9.52998 10.4867 9.74722 10.4867 9.97283C10.4867 10.1984 10.5722 10.4157 10.7258 10.5809C10.7995 10.6603 10.8888 10.7237 10.9882 10.767C11.0875 10.8103 11.1947 10.8327 11.303 10.8327C11.4114 10.8327 11.5186 10.8103 11.6179 10.767C11.7172 10.7237 11.8065 10.6603 11.8803 10.5809L16.148 6.10687C16.3003 5.9408 16.3842 5.72338 16.383 5.49809C16.3819 5.27281 16.2956 5.05628 16.1416 4.89183Z" fill="#0071CE"/>
</svg>
`;
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
            const backBtn = document.getElementById('back-btn-question');
            backBtn.style.display = 'inline-flex';
            // If this question was already answered, show the results
            if (this.showResult) {
                const continueBtn = document.getElementById('continue-btn-question');
                continueBtn.style.display = 'inline-flex';
                continueBtn.onclick = () => app.continueAdventure();
                this.applyAnswerResults();
            }
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
        // Unlock next stage immediately when answer is selected
        this.unlockNextStage(this.currentStage);
        
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
            // Disable further interaction
            btn.onclick = null;
            btn.style.cursor = 'default';
            btn.classList.add('disabled');
        });
        
        // Show result card
        
        // Show continue button after answer is submitted
        const continueBtn = document.getElementById('continue-btn-question');
        continueBtn.style.display = 'inline-flex';
        // continueBtn.textContent = 'Continue Adventure →';
        continueBtn.onclick = () => app.continueAdventure();
        continueBtn.classList.add('animate-fade-in');
    }

    applyAnswerResults() {
        const question = questions.find(q => q.stage === this.currentStage);
        const isCorrect = this.selectedAnswer === question.correctAnswer;
        
        // Update UI to show results and facts
        document.querySelectorAll('.option-button').forEach((btn, index) => {
            const optionFact = btn.querySelector('.option-fact');
            if (optionFact) {
                optionFact.style.display = 'block';
            }
            
            if (index === question.correctAnswer) {
                btn.classList.add('correct');
                btn.querySelector('.option-icon').textContent = '✅';
            } else {
                btn.classList.add('incorrect');
                btn.querySelector('.option-icon').textContent = '❌';
            }
            
            // Mark selected answer
            if (index === this.selectedAnswer) {
                btn.classList.add('selected');
            }
            
            // Disable further interaction
            btn.onclick = null;
            btn.style.cursor = 'default';
            btn.classList.add('disabled');
        });
        
        // Show result card
        const resultCard = document.getElementById('result-card');
        document.getElementById('result-icon').textContent = isCorrect ? '🎉' : '💭';
        document.getElementById('result-title').textContent = isCorrect ? 'Correct!' : 'Not quite right';
        document.getElementById('result-description').textContent = isCorrect 
            ? "Your wisdom shines through! You've unlocked the next stage."
            : "Every adventure teaches us something. The journey continues!";
        
        resultCard.style.display = 'block';
        
        // Show continue button
        const continueBtn = document.getElementById('continue-btn-question');
        continueBtn.style.display = 'inline-flex';
        continueBtn.onclick = () => app.continueAdventure();

        // Show back button
        const backBtn = document.getElementById('back-btn-question');
        backBtn.style.display = 'inline-flex';
    }

    goBackFromQuestion() {
       // Navigate back to map
        if (this.showResult) {
            this.navigateTo('scenario', this.currentStage);
        } else {
            // Navigate back to map for unanswered questions
            this.navigateTo('map');
            const workProcessPage = document.getElementById('sidsailpoint-workProcess-page');
            if (workProcessPage) {
                workProcessPage.style.display = 'none';
            }
        }
    }
    
    continueAdventure() {
        if (this.currentStage < 7) {
            // this.unlockNextStage(this.currentStage);
            this.navigateTo('map');
            // Hide work process page when continuing from question
            const workProcessPage = document.getElementById('sidsailpoint-workProcess-page');
            if (workProcessPage) {
                workProcessPage.style.display = 'none';
            }
        } else {
            // Complete the final stage and show results
            // this.unlockNextStage(this.currentStage);
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
        const resultPreview = document.getElementById('result-preview');
        const resultDescriptionDesc = document.getElementById('results-description--desc');
        const resultDescriptiontitle = document.getElementById('results-description--title');
        const resultDescriptionSecond = document.getElementById('results-description--second');
        
        resultIconLarge.textContent = result.icon;
        resultTitleLarge.textContent = result.title;
        resultImage.innerHTML = result.image;
        resultPreview.innerHTML = result.thumbnail;
        resultDescriptionDesc.textContent = result.description;
        resultDescriptiontitle.textContent = result.descTitle;
        resultDescriptionSecond.textContent = result.descSecond;
        
        // Add fade-in effects
        // resultIconLarge.classList.add('animate-fade-in');
        resultImage.classList.add('animate-scale-in');
        resultTitleLarge.classList.add('animate-fade-in');
        // resultImage.classList.add('animate-fade-in');
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