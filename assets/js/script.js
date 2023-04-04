// Jquery ready function
$(document).ready(function () {
  console.log("ready!");

 





  const nineAM = localStorage.getItem("0900", "text");
  if (nineAM != "") {
    $("#0900-text-area").text(nineAM);
  }

  const tenAM = localStorage.getItem("1000", "text");
  if (tenAM != "") {
    $("#0900-text-area").text(nineAM);
  }

  const elevenAM = localStorage.getItem("1100", "text");
  if (elevenAM != "") {
    $("#0900-text-area").text(nineAM);
  }

  const twelvePM = localStorage.getItem("1200", "text");
  if (twelvePM != "") {
    $("#0900-text-area").text(nineAM);
  }

  const onePM = localStorage.getItem("1300", "text");
  if (onePM != "") {
    $("#0900-text-area").text(nineAM);
  }

  const twoPM = localStorage.getItem("1400", "text");
  if (twoPM != "") {
    $("#0900-text-area").text(nineAM);
  }

  const threePM = localStorage.getItem("1500", "text");
  if (threePM != "") {
    $("#0900-text-area").text(nineAM);
  }

  const fourPM = localStorage.getItem("1600", "text");
  if (fourPM != "") {
    $("#0900-text-area").text(nineAM);
  }

  const fivePM = localStorage.getItem("1700", "text");
  if (fivePM != "") {
    $("#0900-text-area").text(nineAM);
  }

  const sixPM = localStorage.getItem("1800", "text");
  if (sixPM != "") {
    $("#0900-text-area").text(nineAM);
  }

  const sevenPM = localStorage.getItem("1900", "text");
  if (sevenPM != "") {
    $("#0900-text-area").text(nineAM);
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
