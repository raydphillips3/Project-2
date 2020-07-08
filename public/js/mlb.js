$(document).ready(() => {
  $("#inputGroupSelectMLB").change(() => {
    $("#schedule").empty();
    const schedTeam = $("#inputGroupSelectMLB").val();
    console.log("This is the selected team " + schedTeam);
    getSchedules(schedTeam);
  });
  //==========Get Schedule========================================
  function getSchedules(schedTeam) {
    if (schedTeam !== "") {
      $.ajax({
        url:
          "https://api.sportsdata.io/v3/mlb/scores/json/Games/2020?key=79359799eda64f039634491426e83715",
        method: "GET"
      }).then(resMLB => {
        const tray = resMLB.length;
        for (i = 0; i < tray; i++) {
          if (schedTeam === resMLB[i].HomeTeam) {
            console.log(resMLB[i].AwayTeam + " at " + resMLB[i].HomeTeam);
            console.log(resMLB[i].DateTime);
            console.log(resMLB[i].Status);
            console.log("------------------------------------------");
            const game = resMLB[i].AwayTeam + " at " + resMLB[i].HomeTeam;
            const gameTime = $("<li> Time: " + resMLB[i].DateTime + "</li>");
            const gameStatus = $("<li> Status: " + resMLB[i].Status + "</li>");
            const gameList = $("<li> Game: " + game + "</li>");
            $("#schedule").append(gameList);
            $("#schedule").append(gameTime);
            $("#schedule").append(gameStatus);
            $("#schedule").append("------------------------------");
          }
        }
        schedTeam = "";
      });
    }
  }
});
