$(document).ready(function(){

var time = luxon.DateTime.local()
var date = time.month+"/"+time.day+"/"+time.year;
var localTime = time.hour+":"+time.minute;
var container = $('.container');
console.log(time);
console.log(date);
console.log(localTime);
console.log(time.hour);
$("#currentDay").text(date);

function timeFormat(i){
    if (i === 12){
        return '12PM'
    }
    if (i > 12){
        return i-12+'PM'
    }

    return i +'AM'
}

for (let i = 9; i < 18; i++) {
    const timeBlock = $("<div>")
    .attr("id",i)
    .addClass('row time-block past');

    timeBlock.append($("<div>").addClass('col-md-1 hour').text(timeFormat(i)));
    timeBlock.append($('<textarea>').addClass('col-md-10 description'));
    timeBlock.append($('<button>').addClass('btn saveBtn col-md-1')
    .append('<i>').addClass('fas fa-save'));


    container.append(timeBlock);
}
$(".saveBtn").on('click', function(){
    const time = $(this).parent().attr('id');
    const text = $(this).siblings('.description').val();

    localStorage.setItem(time , text);
    
}
)
for (let i = 9; i < 18; i++){
$('#'+i).children().siblings("textarea").val(localStorage.getItem(i));
if(i>time.hour){
    $('#'+i).children().siblings("textarea").removeClass('past','present');
    $('#'+i).children().siblings("textarea").addClass('future');
}
if(i<time.hour){
    $('#'+i).children().siblings("textarea").removeClass('future','present');
    $('#'+i).children().siblings("textarea").addClass('past');
}
else{
    $('#'+i).children().siblings("textarea").removeClass('past','future');
    $('#'+i).children().siblings("textarea").addClass('present');
}
}

});
