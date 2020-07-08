$(document).ready(() => {
  $("#inputGroupSelectNBA").change(() => {
    $("#schedule").empty();
    const schedTeam = $("#inputGroupSelectNBA").val();
    console.log("This is the selected team " + schedTeam);
    getSchedules(schedTeam);
  });
  //==========Get Schedule========================================
  function getSchedules(schedTeam) {
    if (schedTeam !== "") {
      $.ajax({
        url:
          "https://api.sportsdata.io/v3/nba/scores/json/Games/2020?key=c728feb9576c4b9a8005c85667976f1e",
        method: "GET"
      }).then(resNBA => {
        const tray = resNBA.length;
        for (i = 0; i < tray; i++) {
          if (schedTeam === resNBA[i].HomeTeam) {
            console.log(resNBA[i].AwayTeam + " at " + resNBA[i].HomeTeam);
            console.log(resNBA[i].DateTime);
            console.log(resNBA[i].Status);
            console.log("------------------------------------------");
            const game = resNBA[i].AwayTeam + " at " + resNBA[i].HomeTeam;
            const gameTime = $("<li> Time: " + resNBA[i].DateTime + "</li>");
            const gameStatus = $("<li> Status: " + resNBA[i].Status + "</li>");
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
