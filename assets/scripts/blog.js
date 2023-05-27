
const postContainer = document.querySelector(".post-container")
function generateProduct(product){
    const posts = document.createElement("div");
    posts.innerHTML = `<div class="posts">
    <img src="./assets/images/${product.image}" />
    <span> <span class="title">${product.title}</span></span>
    <span class="alt-text">
    <span> <span class="info">${product.info}</span></span>
    <span><span class="date">${product.date}</span></span>
    </span>
</div>`;
   return posts;  
}
for (const product of products) {
    const generatedPost = generateProduct(product);
    postContainer.appendChild(generatedPost);
  }