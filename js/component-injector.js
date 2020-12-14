$(document).ready(() => {
  // Common.
  $("#header").load("../organisms/header.html", addSearchEvent);
  $("#footer").load("../organisms/footer.html");

  // Home.
  $("#aside-navigation").load("../organisms/aside-navigation.html");
  $("#posts-list").load("../organisms/posts-list.html", addPostEvent);
  $("#aside-announcements").load("../organisms/aside-announcements.html");

  // Reading list.
  $("#aside-reading-list").load("../organisms/aside-reading-list.html");
  $("#archived-posts").load("../organisms/archived-posts.html");
});
