$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
  //============Redirect to League Pages=================================================================
  $("#inputGroupSelect01").change(() => {
    if ($("#inputGroupSelect01").val() === "1") {
      console.log("It's working");
      window.location.replace("/NFL.html");
    } else if ($("#inputGroupSelect01").val() === "2") {
      console.log("It's working");
      window.location.replace("/NBA.html");
    } else if ($("#inputGroupSelect01").val() === "3") {
      console.log("It's working");
      window.location.replace("/MLB.html");
    }
  });
});
