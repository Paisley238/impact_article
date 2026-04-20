// Reading Time Estimator
// Counts words in your article and estimates reading time at 200 words per minute

const articleText = document.querySelector("article"); // ← change if your article uses a different selector
const readingTimeDisplay = document.getElementById("reading-time");

if (articleText && readingTimeDisplay) {
    const words = articleText.innerText.trim().split(/\s+/).length; // count words
    const minutes = Math.ceil(words / 200); // 200 words per minute
    readingTimeDisplay.textContent = `${minutes} min read`;
}
