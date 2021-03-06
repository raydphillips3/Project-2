$(document).ready(() => {
  $("#inputGroupSelectNFL").change(() => {
    $("#schedule").empty();
    const schedTeam = $("#inputGroupSelectNFL").val();
    console.log("This is the selected team " + schedTeam);
    getSchedules(schedTeam);
  });
  //==========Get Schedule========================================
  function getSchedules(schedTeam) {
    if (schedTeam !== "") {
      $.ajax({
        url:
          "https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2020?key=c2e06a74868d43b897386bacb10ad600",
        method: "GET"
      }).then(resNFL => {
        const tray = resNFL.length;
        for (i = 0; i < tray; i++) {
          if (schedTeam === resNFL[i].HomeTeam) {
            console.log(resNFL[i].AwayTeam + " at " + resNFL[i].HomeTeam);
            console.log(resNFL[i].Date);
            console.log(resNFL[i].Status);
            console.log("------------------------------------------");
            const game = resNFL[i].AwayTeam + " at " + resNFL[i].HomeTeam;
            const gameTime = $("<li> Time: " + resNFL[i].Date + "</li>");
            const gameStatus = $("<li> Status: " + resNFL[i].Status + "</li>");
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
