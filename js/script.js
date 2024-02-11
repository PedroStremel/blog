const posts = [
    {
        title: "Google Chrome",
        content: "Google Chrome is a web browser developed by Google"
    },
    {
        title: "Mozilla",
        content: "Mozilla is an open source browser"
    },
    {
        title: "Edge",
        content: "Edge is a browser by Microsoft"
    }
];
const wrapper = document.getElementById('posts');
for (var i = 0; i < posts.length; i++) {
    const postData = posts[i];const article = document.createElement("article");
    const title = document.createElement("h2");
    const content = document.createElement("p");
    title.textContent = postData.title;
    content.textContent = postData.content;
    article.appendChild(title);
    article.appendChild(content);
    wrapper.appendChild(article);
}