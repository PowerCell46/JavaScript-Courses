function getArticleGenerator(articles) {
    return function showNext() {
        if (articles.length > 0) {
            let currentArticle = articles.shift();
            let workingDiv = document.getElementById("content");
            let paragraph = document.createElement("article");
            paragraph.textContent = currentArticle;
            workingDiv.appendChild(paragraph)
        }
    }
} 
