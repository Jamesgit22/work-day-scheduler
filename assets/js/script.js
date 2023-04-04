// Jquery ready function
$(document).ready(function () {
  console.log("ready!");

 

const currentTime = dayjs().format("HH");
console.log(currentTime);

  $("#currentDay").text(dayjs().format("dddd, MMM D, YYYY") )

  const nineAM = localStorage.getItem("09", "text");
  if (nineAM != "") {
    $("#09-text-area").text(nineAM);
  }

  const tenAM = localStorage.getItem("10", "text");
  if (tenAM != "") {
    $("#10-text-area").text(tenAM);
  }

  const elevenAM = localStorage.getItem("11", "text");
  if (elevenAM != "") {
    $("#11-text-area").text(elevenAM);
  }

  const twelvePM = localStorage.getItem("12", "text");
  if (twelvePM != "") {
    $("#12-text-area").text(twelvePM);
  }

  const onePM = localStorage.getItem("13", "text");
  if (onePM != "") {
    $("#13-text-area").text(onePM);
  }

  const twoPM = localStorage.getItem("14", "text");
  if (twoPM != "") {
    $("#14-text-area").text(twoPM);
  }

  const threePM = localStorage.getItem("15", "text");
  if (threePM != "") {
    $("#15-text-area").text(threePM);
  }

  const fourPM = localStorage.getItem("16", "text");
  if (fourPM != "") {
    $("#16-text-area").text(fourPM);
  }

  const fivePM = localStorage.getItem("17", "text");
  if (fivePM != "") {
    $("#17-text-area").text(fivePM);
  }

  const sixPM = localStorage.getItem("18", "text");
  if (sixPM != "") {
    $("#18-text-area").text(sixPM);
  }

  const sevenPM = localStorage.getItem("19", "text");
  if (sevenPM != "") {
    $("#19-text-area").text(sevenPM);
  }
  // Save button click event to grab the text the user entered
  $(".row").on("click", ".saveBtn", function(e) {
    e.stopPropagation();
    const timeText = $(this).closest(".time-block").find(".time-text");
    const text = timeText.val();
    localStorage.setItem(this.dataset.hour, text);
  });
 
 



















  // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.















});
