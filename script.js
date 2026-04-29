const articleText = document.querySelector("article");
const readingTimeDisplay = document.getElementById("reading-time");

if (articleText && readingTimeDisplay) {
    const words = articleText.innerText.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    readingTimeDisplay.textContent = `${minutes} min read`;
}
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    // Use documentElement instead of body
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";
    updateProgress();
});
