$(document).ready(function() {

// display current date within #currendDay p
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Array of the divs 9am-5pm to iterate in the function compareTime
var timeBlocks = [
  { startTime: "09:00:00", endTime: "09:59:59", id: "#x9am", text: "" },
  { startTime: "10:00:00", endTime: "10:59:59", id: "#x10am", text: "" },
  { startTime: "11:00:00", endTime: "11:59:59", id: "#x11am", text: "" },
  { startTime: "12:00:00", endTime: "12:59:59", id: "#x12pm", text: "" },
  { startTime: "13:00:00", endTime: "13:59:59", id: "#x1pm", text: "" },
  { startTime: "14:00:00", endTime: "14:59:59", id: "#x2pm", text: "" },
  { startTime: "15:00:00", endTime: "15:59:59", id: "#x3pm", text: "" },
  { startTime: "16:00:00", endTime: "16:59:59", id: "#x4pm", text: "" },
  { startTime: "17:00:00", endTime: "17:59:59", id: "#x5pm", text: "" },
];

var format = "hh:mm:ss";
var curTime = moment();
var localStoreTimeBlock;

function compareTime() {
  // compare the current time to an hour time block

  // for loop to iterate through my "timeblock" divs for each one check:
  for (i = 0; i < timeBlocks.length; i++) {
    beforeTime = moment(timeBlocks[i].startTime, format);
    afterTime = moment(timeBlocks[i].endTime, format);

    // if the current time is within the time block update the div class to .present
    if (curTime.isBetween(beforeTime, afterTime)) {
      $(timeBlocks[i].id).addClass("present");
    } // if the current time is after the time block update the div class to .future
    else if (curTime.isBefore(beforeTime)) {
      $(timeBlocks[i].id).addClass("future");
    } // if the current time is before the time block update the div class to .past
    else if (curTime.isAfter(beforeTime)) {
      $(timeBlocks[i].id).addClass("past");
    }
  }
}


function renderText() {
  console.log("renderText is called");
  // parse out the stored array of objects
  localStoreTimeBlock = JSON.parse(localStorage.getItem("timeBlockData"));
  console.log(localStoreTimeBlock);
  if (!localStoreTimeBlock) {
    // For each object in the timeBlock array, find the text area that has the same id as the key, and set the text of the textarea to the value
    for (j = 0; j < timeBlocks.length; j++) {
      $(timeBlocks[j].id).val(timeBlocks[j].text);
    }
    localStorage.setItem('timeBlockData',JSON.stringify(timeBlocks));
    localStoreTimeBlock = JSON.parse(localStorage.getItem("timeBlockData"));
  } else {
    // For each object in the stored array, find the text area that has the same id as the key, and set the text of the textarea to the value
    for (k = 0; k < localStoreTimeBlock.length; k++) {
      $(localStoreTimeBlock[k].id).val(localStoreTimeBlock[k].text);
    }
  }
}

function saveData() {
  // get previous sibling id that was edited by the user
  var prevSibID = $(this).prev().attr("id");
  console.log("prevSibID: " + "#" + prevSibID);
  // get previous sibling val() entered by user
  var prevSibVal = $(this).prev().val();
  // update object to be stored
  // go through the array of time block objects
  for (l = 0; l < localStoreTimeBlock.length; l++) {
    // if the previous sibling ID matches the time block object id value then update the text value
    if (localStoreTimeBlock[l].id == "#" + prevSibID) {
      localStoreTimeBlock[l].text = prevSibVal;
    }
  }
  // strinify object and save to local storage
  localStorage.setItem("timeBlockData", JSON.stringify(localStoreTimeBlock));
}

// When any save button is clicked, then the saveData function is called
$(".saveBtn").click(saveData);

compareTime(); // color code the time blocks on load
renderText(); // set the text of each time block on load from the stored data

});