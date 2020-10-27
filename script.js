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





// compare time, grabbing from moment.js

// Grab the Div to display the timeblocks
// Update the class by comparing to the local time


// save button to store info in local storage

console.log(moment().format('dddd, MMMM Do'));

// display current date within #currendDay p
$("#currentDay").text(moment().format('dddd, MMMM Do'));

