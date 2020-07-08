$(document).ready(() => {
    //============Redirect to League Pages=================================================================
    $("#inputGroupSelectMLB").change(() => {
      switch ($("#inputGroupSelectMLB").val()) {
      case "1":
          console.log("Mariners");
          break;
      case "2":
          console.log("Rangers");
          break;
      case "3":
          console.log("Nationals");
          break;
      case "4":
          console.log("Dodgers");
          break
      case "5":
          console.log("Royals");
          break;
      case "6":
          console.log("Red Sox");
      }
    });
  });

