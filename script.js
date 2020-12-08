var time = luxon.DateTime.local()
var date = time.day+"/"+time.month+"/"+time.year;
var localTime = time.hour+":"+time.minute;
console.log(time);
console.log(date);
console.log(localTime);

$("#currentDay").text(date);

