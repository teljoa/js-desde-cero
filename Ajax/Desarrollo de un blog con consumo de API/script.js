const API_URL = "http://localhost:3000";
let currentArticleId = null;

function fetchArticles() {
    fetch(`${API_URL}/articles`)
        .then(response => response.json())
        .then(articles => {
            let list = document.getElementById("articlesList");
            list.innerHTML = "";
            articles.forEach(article => {
                let li = document.createElement("li");
                li.innerHTML = `<a href="#" onclick="showArticle(${article.id})">${article.title}</a>`;
                list.appendChild(li);
            });
        })
        .catch(error => console.error("Error cargando artículos:", error));
}

function showArticle(articleId) {
    currentArticleId = articleId;
    document.getElementById("articlesList").style.display = "none";
    document.getElementById("articleDetails").style.display = "block";

    fetch(`${API_URL}/articles/${articleId}`)
        .then(response => response.json())
        .then(article => {
            document.getElementById("articleTitle").innerText = article.title;
            document.getElementById("articleContent").innerText = article.content;

            fetch(`${API_URL}/users/${article.autorId}`)
                .then(response => response.json())
                .then(author => {
                    document.getElementById("articleAuthor").innerText = "Autor: " + author.name;
                });

            fetch(`${API_URL}/comments?articleId=${articleId}`)
                .then(response => response.json())
                .then(comments => {
                    let list = document.getElementById("commentsList");
                    list.innerHTML = "";
                    comments.forEach(comment => {
                        let li = document.createElement("li");
                        fetch(`${API_URL}/users/${comment.userId}`)
                            .then(response => response.json())
                            .then(user => {
                                li.innerText = `${user.name}: ${comment.comment}`;
                                list.appendChild(li);
                            });
                    });
                });
        });

    fetchUsers();
}

function fetchUsers() {
    fetch(`${API_URL}/users`)
        .then(response => response.json())
        .then(users => {
            let select = document.getElementById("userSelect");
            select.innerHTML = "<option value=''>Selecciona un usuario</option>";
            users.forEach(user => {
                let option = document.createElement("option");
                option.value = user.id;
                option.innerText = user.name;
                select.appendChild(option);
            });
        })
        .catch(error => console.error("Error cargando usuarios:", error));
}

function addComment() {
    let commentText = document.getElementById("newComment").value;
    let userId = document.getElementById("userSelect").value;

    if (!commentText || !userId) return;

    let newComment = {
        comment: commentText,
        userId: parseInt(userId),
        articleId: currentArticleId
    };

    fetch(`${API_URL}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment)
    })
    .then(response => response.json())
    .then(() => {
        showArticle(currentArticleId);
        document.getElementById("newComment").value = "";
    })
    .catch(error => console.error("Error agregando comentario:", error));
}

function showHome() {
    document.getElementById("articlesList").style.display = "block";
    document.getElementById("articleDetails").style.display = "none";
}

fetchArticles();