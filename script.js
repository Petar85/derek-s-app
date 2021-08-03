
             
console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$("#tdDate").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// var myContainer = $(".container-fluid")
// var hourArr = ["4:00:00AM","5:00:00AM","6:00:00AM","7:00:00AM","8:00:00AM","9:00:00AM","10:00:00AM","11:00:00AM","12:00:00PM","1:00:00PM","2:00:00PM","3:00:00PM","4:00:00PM","5:00:00PM","6:00:00PM","7:00:00PM","8:00:00PM","9:00:00PM","10:00:00PM","11:00:00PM","12:00:00AM","1:00:00AM","2:00:00AM","3:00:00AM",]
// var tbodyTr = $(".tbody")

// for (var i = 0; i<hourArr.length; i++) {

//     var row = $("<tr>");
//     row.addClass("row col-lg-12");
   
    

//     var timeTd = $("<td>");
//     timeTd.addClass("timeTd");
//     timeTd.text(hourArr[i]);
//     row.append(timeTd);

//     var targetTd = $("<td>");
//     targetTd.addClass("targetTd");
//     targetTd.text("contenteditable='true'")
//     row.append(targetTd);

//     var actualTd = $("<td>");
//     actualTd.addClass("contenteditable='true'");
//     row.append(actualTd);

//     var descriptionTd = $("<td>");
//     descriptionTd.addClass("contenteditable='true'");
//     row.append(descriptionTd);

//     tbodyTr.append(row)

// }