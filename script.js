const prompts = [
    "What are three things you're grateful for today?",
    "Describe a challenge you faced recently and how you overcame it.",
    "What is a dream you’ve had that you want to explore?",
    "Write about a time you learned something new about yourself.",
    "What does success look like for you?",
    "If you could give your younger self advice, what would it be?",
    "What are your favorite ways to practice self-care?",
    "How do you define happiness in your life?",
    "What is a goal you want to achieve this month?",
    "Reflect on a person who has influenced your life and why."
];

function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    return prompts[randomIndex];
}

document.getElementById("new-prompt").addEventListener("click", function() {
    const prompt = getRandomPrompt();
    document.getElementById("prompt").textContent = prompt;
});
