let output = document.getElementById('output');
//output.textContent = luxon.DateTime.DATETIME_FULL.toString();
//output.textContent = JSON.stringify(luxon.DateTime.DATETIME_FULL);

var DateTime = luxon.DateTime;
//output.textContent = JSON.stringify(luxon.DateTime.DATETIME_FULL);
var today = DateTime.local().toLocaleString(DateTime.DATETIME_SHORT);
output.textContent = today;
