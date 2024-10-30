document.addEventListener("DOMContentLoaded", () => {
  const markdownDiv = document.querySelector(".markdown");
  const rawContent = markdownDiv.textContent.trim(); // Get raw Markdown

  // Render Markdown using Marked.js
  markdownDiv.innerHTML = marked.parse(rawContent);
});
