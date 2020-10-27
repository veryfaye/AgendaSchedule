// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

// WHEN I click into a time block
// THEN I can enter an event

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

// save button to store info in local storage

// display current date within #currendDay p
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Array of the divs 9am-5pm to iterate in the function compareTime
var timeBlocks = [
  { div: $("#9am"), startTime: "09:00:00", endTime: "09:59:59" },
  { div: $("#10am"), startTime: "10:00:00", endTime: "10:59:59" },
  { div: $("#11am"), startTime: "11:00:00", endTime: "11:59:59" },
  { div: $("#12am"), startTime: "12:00:00", endTime: "12:59:59" },
  { div: $("#1pm"), startTime: "13:00:00", endTime: "13:59:59" },
  { div: $("#2pm"), startTime: "14:00:00", endTime: "14:59:59" },
  { div: $("#3pm"), startTime: "15:00:00", endTime: "15:59:59" },
  { div: $("#4pm"), startTime: "16:00:00", endTime: "16:59:59" },
  { div: $("#5pm"), startTime: "17:00:00", endTime: "17:59:59" },
];

var format = "hh:mm:ss";
var curTime = moment();

function compareTime() {
  // compare the current time to an hour time block

  // for loop to iterate through my "timeblock" divs for each one check:
  for (i = 0; i < timeBlocks.length; i++) {

    beforeTime = moment(timeBlocks[i].startTime, format);
    afterTime = moment(timeBlocks[i].endTime, format);

    // if the current time is within the time block update the div class to .present
    if (curTime.isBetween(beforeTime, afterTime)) {
      timeBlocks[i].div.addClass("present");
    } // if the current time is after the time block update the div class to .future
    else if (curTime.isBefore(beforeTime)) {
      timeBlocks[i].div.addClass("future");
    } // if the current time is before the time block update the div class to .past
    else if (curTime.isAfter(beforeTime)) {
      timeBlocks[i].div.addClass("past");
    }
  }
}

compareTime();