// escuchando scroll
window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight <= scrollHeight) {
    setTimeout(() => createPost(), 1000);
  }
});
// entra la funcion
function createPost() {
  console.log("post_creado");
  // Selector
  const container = document.querySelector(".tab-content");
  const post = document.createElement("div");

  post.innerHTML = `<div class="card">
    <div class="card-body">
      <div class="info_personal d-inline-block flex-column">
        <span class="card-text d-block name">
        <a class="">{Author}</a></span>
        <span class="card-text d-block date">
        <a class=""> Date now() (6 days ago)</a></span>
      </div>
      <div class="content-center">
        <h1 class="card-title mt-3">
          <a href="#">Functions, Parameters and Return Values</a>
        </h1>
        <div class="hashtags">
          <a href=""><span class="crayon">#</span>beginners</a>
          <a href=""><span class="crayon">#</span>codenewbie</a>
          <a href=""><span class="crayon">#</span>webdev</a>
          <a href=""><span class="crayon">#</span>programming </a>
        </div>
        <div
          class="card-b-content d-flex justify-content-between align-items-center">
          <div class="icon-right">
            <a href="">
              <img src="images/icon_cards/icono_corazon.svg" alt=""/>
              <span>8 reaction</span>
            </a> <a href="">
              <img src="images/icon_cards/icon_comment.svg" alt=""/>
              <span>Add comment</span>
            </a>
          </div>
          <div class="icon-left">
            <small class="text-muted timer">1 min read</small>
            <button type="button" class="btn btn-less-light" onclick="clickSave(this)">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  container.appendChild(post);
}
