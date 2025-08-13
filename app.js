// // Single Page Application for Adventure Quiz
// class AdventureQuiz {
//     constructor() {
//         this.currentPage = 'landing';
//         this.currentStage = null;
//         this.selectedAnswer = null;
//         this.showResult = false;
//         this.quizState = {
//             currentStage: 1,
//             stages: [...stages],
//             answers: {},
//             score: 0,
//             isCompleted: false
//         };
        
//         this.init();
//     }
    
//     init() {
//         this.showPage('landing');
//     }
    
//     // Navigation
//     navigateTo(page, stageId = null) {
//         this.currentStage = stageId;
//         this.showPage(page);
//     }
    
//     showPage(page) {
//         // Hide all pages
//         document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
        
//         // Show progress bar on all pages except landing
//         const progressBar = document.getElementById('progress-bar');
//         if (page === 'landing') {
//             progressBar.style.opacity = '0';
//         } else {
//             progressBar.style.opacity = '1';
//             this.renderProgressBar();
//         }
        
//         // Show current page
//         document.getElementById(`${page}-page`).style.display = 'block';
//         this.currentPage = page;
        
//         // Initialize page-specific content
//         this.initializePage(page);
//     }
    
//     initializePage(page) {
//         switch(page) {
//             case 'map':
//                 this.initializeMap();
//                 break;
//             case 'scenario':
//                 this.initializeScenario();
//                 break;
//             case 'question':
//                 this.initializeQuestion();
//                 break;
//             case 'results':
//                 this.initializeResults();
//                 break;
//         }
//     }
    
//     // Progress Bar
//     renderProgressBar() {
//         const completedQuestions = this.quizState.stages.filter(stage => stage.completed).length;
//         const progressPercentage = (completedQuestions / 7) * 100;
//         const stageIcons = ["🏰", "🌲", "💎", "🐉", "☁️", "🔥", "🏆"];
        
//         const progressDots = document.querySelector('.progress-dots');
//         progressDots.innerHTML = `
//             <div class="progress-line">
//                 <div class="progress-line-fill" style="width: ${progressPercentage}%"></div>
//             </div>
//             ${stageIcons.map((icon, index) => {
//                 const isCompleted = (index + 1) <= completedQuestions;
//                 return `
//                     <div class="progress-dot ${isCompleted ? 'completed' : 'incomplete'}">
//                     </div>
//                 `;
//             }).join('')}
//         `;
//     }
    
//     // Map Page
//     initializeMap() {
//         const completedQuestions = this.quizState.stages.filter(stage => stage.completed).length;
        
//         // Update score display
//         // document.getElementById('score-display').textContent = 
//         //     `Score: ${this.quizState.score} / 7 | Stage: ${this.quizState.currentStage}`;
        
//         // Apply classes to SVG stages
//         const svgStages = document.querySelectorAll('#Layer_1 [data-stage]');
//         this.quizState.stages.forEach(stage => {
//             const svgElement = document.querySelector(`#Layer_1 [data-stage="${stage.id}"]`);
//             if (svgElement) {
//                 // Clear existing classes
//                 svgElement.classList.remove('completed', 'locked', 'unlocked');

//                 // Apply new classes based on state
//                 if (stage.completed) {
//                     svgElement.classList.add('completed');
//                 } else if (!stage.unlocked) {
//                     svgElement.classList.add('locked');
//                 } else {
//                     svgElement.classList.add('unlocked');
//                 }
                
//                 // Add click handler for unlocked stages
//                 if (stage.unlocked) {
//                     svgElement.style.cursor = 'pointer';
//                     svgElement.onclick = () => this.navigateToStage(stage.id);
//                 } else {
//                     svgElement.style.cursor = 'default';
//                     svgElement.onclick = null;
//                 }
//             }
//         });
        
//         // Update quest progress
//         // document.getElementById('progress-text').textContent = `${completedQuestions} / 7 Complete`;
//         // document.getElementById('progress-fill').style.width = `${(completedQuestions / 7) * 100}%`;
        
//         // Show results button if completed
//         const resultsBtn = document.getElementById('results-btn');
//         if (this.quizState.isCompleted) {
//             resultsBtn.style.display = 'inline-flex';
//         }
//     }
    
//     navigateToStage(stageId) {
//         this.navigateTo('scenario', stageId);
//     }
    
//     // Scenario Page
//     initializeScenario() {
//         const question = questions.find(q => q.stage === this.currentStage);
//         if (!question) {
//             this.navigateTo('map');
//             return;
//         }
        
//         document.getElementById('stage-number').textContent = `Stage ${this.currentStage}`;
//         document.getElementById('stage-icon').textContent = stages[this.currentStage - 1].icon;
//         document.getElementById('stage-name').textContent = stages[this.currentStage - 1].name;
//         document.getElementById('scenario-text').innerHTML = question.scenario;
//     }
    
//     navigateToQuestion() {
//         this.navigateTo('question', this.currentStage);
//     }
    
//     // Question Page
//     initializeQuestion() {
//         const question = questions.find(q => q.stage === this.currentStage);
//         if (!question) {
//             this.navigateTo('map');
//             return;
//         }
        
//         this.selectedAnswer = null;
//         this.showResult = false;
        
//         document.getElementById('question-stage-number').textContent = `Stage ${this.currentStage} Question`;
//         document.getElementById('question-text').textContent = question.question;
        
//         // Render options
//         const optionsContainer = document.getElementById('options-container');
//         optionsContainer.innerHTML = question.options.map((option, index) => `
//             <div class="option-button" onclick="app.selectAnswer(${index})">
//                 <div class="option-letter">${String.fromCharCode(65 + index)}</div>
//                 <div class="option-text">${option}</div>
//                 <div class="option-icon"></div>
//             </div>
//         `).join('');
        
//         // Reset buttons
//         document.getElementById('submit-btn').disabled = true;
//         document.getElementById('submit-btn').style.display = 'inline-flex';
//         document.getElementById('continue-adventure-btn').style.display = 'none';
//         document.getElementById('result-card').style.display = 'none';
//     }
    
//     selectAnswer(answerIndex) {
//         if (this.showResult) return;
        
//         this.selectedAnswer = answerIndex;
        
//         // Update UI
//         document.querySelectorAll('.option-button').forEach((btn, index) => {
//             btn.classList.toggle('selected', index === answerIndex);
//         });
        
//         document.getElementById('submit-btn').disabled = false;
//     }
    
//     submitAnswer() {
//         if (this.selectedAnswer === null) return;
        
//         const question = questions.find(q => q.stage === this.currentStage);
//         const isCorrect = this.selectedAnswer === question.correctAnswer;
        
//         // Update quiz state
//         this.quizState.answers[this.currentStage] = this.selectedAnswer;
//         if (isCorrect) {
//             this.quizState.score++;
//         }
//         if (this.currentStage === 7) {
//             this.quizState.isCompleted = true;
//         }
//         this.saveQuizState();
        
//         this.showResult = true;
        
//         // Update UI to show results
//         document.querySelectorAll('.option-button').forEach((btn, index) => {
//             if (index === question.correctAnswer) {
//                 btn.classList.add('correct');
//                 btn.querySelector('.option-icon').textContent = '✅';
//             } else if (this.selectedAnswer === index && index !== question.correctAnswer) {
//                 btn.classList.add('incorrect');
//                 btn.querySelector('.option-icon').textContent = '❌';
//             }
//         });
        
//         // Show result card
//         const resultCard = document.getElementById('result-card');
//         document.getElementById('result-icon').textContent = isCorrect ? '🎉' : '💭';
//         document.getElementById('result-title').textContent = isCorrect ? 'Correct!' : 'Not quite right';
//         document.getElementById('result-description').textContent = isCorrect 
//             ? "Your wisdom shines through! You've unlocked the next stage."
//             : "Every adventure teaches us something. The journey continues!";
        
//         resultCard.style.display = 'block';
        
//         // Switch buttons
//         document.getElementById('submit-btn').style.display = 'none';
//         document.getElementById('continue-adventure-btn').style.display = 'inline-flex';
//     }
    
//     continueAdventure() {
//         if (this.currentStage < 7) {
//             this.unlockNextStage(this.currentStage);
//         }
//         this.navigateTo('map');
//     }
    
//     unlockNextStage(currentStageId) {
//         this.quizState.stages = this.quizState.stages.map(stage => {
//             if (stage.id === currentStageId) {
//                 return { ...stage, completed: true };
//             }
//             if (stage.id === currentStageId + 1) {
//                 return { ...stage, unlocked: true };
//             }
//             return stage;
//         });
//         this.quizState.currentStage = Math.min(currentStageId + 1, 7);
//         this.saveQuizState();
//     }
    
//     // Results Page
//     initializeResults() {
//         const result = this.getResult();
        
//         document.getElementById('result-icon-large').textContent = result.icon;
//         document.getElementById('result-title-large').textContent = result.title;
//         document.getElementById('result-description-large').textContent = result.description;
        
//         // Update stats
//         document.getElementById('score-number').textContent = `${this.quizState.score}/7`;
//         document.getElementById('percentage').textContent = `${Math.round((this.quizState.score / 7) * 100)}%`;
        
//         // Update progress bar
//         document.getElementById('final-progress').style.width = `${(this.quizState.score / 7) * 100}%`;
        
//         // Render summary stages
//         const summaryStages = document.getElementById('summary-stages');
//         summaryStages.innerHTML = stages.map((stage, index) => {
//             const question = questions.find(q => q.stage === stage.id);
//             const userAnswer = this.quizState.answers[stage.id];
//             const isCorrect = userAnswer === question?.correctAnswer;
            
//             return `
//                 <div class="summary-stage">
//                     <div class="summary-stage-icon">${stage.icon}</div>
//                     <div class="summary-stage-name">${stage.name}</div>
//                     <div class="summary-stage-result ${isCorrect ? 'correct' : 'incorrect'}"></div>
//                 </div>
//             `;
//         }).join('');
//     }
    
//     getResult() {
//         return quizResults.find(result => 
//             this.quizState.score >= result.minScore && this.quizState.score <= result.maxScore
//         ) || quizResults[0];
//     }
    
//     // State Management
//     loadQuizState() {
//         const saved = localStorage.getItem('adventureQuizState');
//         if (saved) {
//             this.quizState = { ...this.quizState, ...JSON.parse(saved) };
//         }
//     }
    
//     saveQuizState() {
//         localStorage.setItem('adventureQuizState', JSON.stringify(this.quizState));
//     }
    
//     resetQuiz() {
//         localStorage.removeItem('adventureQuizState');
//         this.quizState = {
//             currentStage: 1,
//             stages: [...stages],
//             answers: {},
//             score: 0,
//             isCompleted: false
//         };
//         this.navigateTo('landing');
//     }
// }

// // Global functions for HTML onclick handlers
// function navigateTo(page) {
//     app.navigateTo(page);
// }

// function resetQuiz() {
//     app.resetQuiz();
// }

// function submitAnswer() {
//     app.submitAnswer();
// }

// function continueAdventure() {
//     app.continueAdventure();
// }

// // Initialize app
// const app = new AdventureQuiz();






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
        
        // Update score display
        // document.getElementById('score-display').textContent = 
        //     `Score: ${this.quizState.score} / 7 | Stage: ${this.quizState.currentStage}`;
        
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
        
        // Update quest progress
        // document.getElementById('progress-text').textContent = `${completedQuestions} / 7 Complete`;
        // document.getElementById('progress-fill').style.width = `${(completedQuestions / 7) * 100}%`;
        
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
        
        // document.getElementById('stage-number').textContent = `Stage ${this.currentStage}`;
        // document.getElementById('stage-icon').textContent = stages[this.currentStage - 1].icon;
        // document.getElementById('stage-name').textContent = stages[this.currentStage - 1].name;
        document.getElementById('scenario-img').innerHTML = question.img;
        document.getElementById('scenario-text').innerHTML = question.scenario;
    }
    
    navigateToQuestion() {
        this.navigateTo('question', this.currentStage);
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
        document.getElementById('result-card').style.display = 'none';
    }
    
    selectAnswer(answerIndex) {
        if (this.showResult) return;
        
        this.selectedAnswer = answerIndex;
        
        // Update UI
        document.querySelectorAll('.option-button').forEach((btn, index) => {
            btn.classList.toggle('selected', index === answerIndex);
        });
        
        document.getElementById('submit-btn').disabled = false;
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
        }
        this.saveQuizState();
        
        this.showResult = true;
        
        // Update UI to show results
        document.querySelectorAll('.option-button').forEach((btn, index) => {
            if (index === question.correctAnswer) {
                btn.classList.add('correct');
                btn.querySelector('.option-icon').textContent = '✅';
            } else if (this.selectedAnswer === index && index !== question.correctAnswer) {
                btn.classList.add('incorrect');
                btn.querySelector('.option-icon').textContent = '❌';
            }
        });
        
        // Show result card
        const resultCard = document.getElementById('result-card');
        document.getElementById('result-icon').textContent = isCorrect ? '🎉' : '💭';
        document.getElementById('result-title').textContent = isCorrect ? 'Correct!' : 'Not quite right';
        document.getElementById('result-description').textContent = isCorrect 
            ? "Your wisdom shines through! You've unlocked the next stage."
            : "Every adventure teaches us something. The journey continues!";
        
        resultCard.style.display = 'block';
        
        // Switch buttons
        document.getElementById('submit-btn').style.display = 'none';
        document.getElementById('continue-adventure-btn').style.display = 'inline-flex';
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
        
        document.getElementById('result-icon-large').textContent = result.icon;
        document.getElementById('result-title-large').textContent = result.title;
        document.getElementById('result-description-large').textContent = result.description;
        
        // Update stats
        // document.getElementById('score-number').textContent = `${this.quizState.score}/7`;
        // document.getElementById('percentage').textContent = `${Math.round((this.quizState.score / 7) * 100)}%`;
        
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