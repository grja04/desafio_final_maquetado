const savePost = (postf) => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //  document.getElementById("demo").innerHTML = this.responseText;
      let response = JSON.parse(xhttp.response);
    }
  };
  xhttp.open(
    "POST",
    "https://finalproject-f130e-default-rtdb.firebaseio.com/Post/.json",
    true
  );
  xhttp.send(JSON.stringify(postf));
};
const getPostData = () => {
  let Author = document.getElementById("Author").value;
  let Text = document.getElementById("Text").value;
  let Title = document.getElementById("Title").value;
  let tags = document.getElementById("tags").value;
  let postObject = { Author, Text, Title, tags };
  console.log(postObject);
  savePost(postObject);
};

const addPostEvent = () => {
  document
    .getElementById("saveInfoButton")
    .addEventListener("click", getPostData);
};
