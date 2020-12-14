const addSearchEvent = () => {
  $("#search").keyup(function () {
    let filteredPosts = {};
    let searchText = $(".form-control").val().toLowerCase();
    for (postKey in allPost) {
      let postTitel = ".allPost"[postKey](".content-center").toLowerCase();
      if (postTitel.includes(searchText)) {
        filteredPosts[postKey] = ".allPost"[postKey];
      }
    }
  });
};

// https://finalproject-f130e-default-rtdb.firebaseio.com/Post/.json
