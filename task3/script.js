document.getElementById("search").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();
    let articles = document.querySelectorAll("article");
    
    articles.forEach(article => {
        let title = article.querySelector("h2").textContent.toLowerCase();
        let description = article.querySelector("p").textContent.toLowerCase();
        
        if (title.includes(searchValue) || description.includes(searchValue)) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
});
