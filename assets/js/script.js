// Jquery ready function
$(document).ready(function () {
  console.log("ready!");

  // Display the date and time
  $("#currentDay").text(dayjs().format("dddd, MMM D, YYYY") )

  // Condition block to get items from local storage and display in correct hour block.
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

//Current hour in two digit format
const currentTime = dayjs().format("HH");


//Condition blocks to change color of hour containers
if ($("#hour-9").data("hour") < currentTime) {
  $("#hour-9").removeClass("present");
  $("#hour-9").addClass("past");
} else if ($("#hour-9").data("hour") > currentTime) {
  $("#hour-9").removeClass("past");
  $("#hour-9").addClass("future");
} else {
  $("#hour-9").removeClass("future");
  $("#hour-9").addClass("present");
}

if ($("#hour-10").data("hour") < currentTime) {
  $("#hour-10").removeClass("present");
  $("#hour-10").addClass("past");
} else if ($("#hour-10").data("hour") > currentTime) {
  $("#hour-10").removeClass("past");
  $("#hour-10").addClass("future");
} else {
  $("#hour-10").removeClass("future");
  $("#hour-10").addClass("present");
}

if ($("#hour-11").data("hour") < currentTime) {
  $("#hour-11").removeClass("present");
  $("#hour-11").addClass("past");
} else if ($("#hour-11").data("hour") > currentTime) {
  $("#hour-11").removeClass("past");
  $("#hour-11").addClass("future");
} else {
  $("#hour-11").removeClass("future");
  $("#hour-11").addClass("present");
}

if ($("#hour-12").data("hour") < currentTime) {
  $("#hour-12").removeClass("present");
  $("#hour-12").addClass("past");
} else if ($("#hour-12").data("hour") > currentTime) {
  $("#hour-12").removeClass("past");
  $("#hour-12").addClass("future");
} else {
  $("#hour-12").removeClass("future");
  $("#hour-12").addClass("present");
}

if ($("#hour-13").data("hour") < currentTime) {
  $("#hour-13").removeClass("present");
  $("#hour-13").addClass("past");
  console.log("yep");
} else if ($("#hour-13").data("hour") > currentTime) {
  $("#hour-13").removeClass("past");
  $("#hour-13").addClass("future");
  console.log("yep");
} else {
  $("#hour-13").removeClass("future");
  $("#hour-13").addClass("present");
}

if ($("#hour-14").data("hour") < currentTime) {
  $("#hour-14").removeClass("present");
  $("#hour-14").addClass("past");
} else if ($("#hour-14").data("hour") > currentTime) {
  $("#hour-14").removeClass("past");
  $("#hour-14").addClass("future");
} else {
  $("#hour-14").removeClass("future");
  $("#hour-14").addClass("present");
}

if ($("#hour-15").data("hour") < currentTime) {
  $("#hour-15").removeClass("present");
  $("#hour-15").addClass("past");
} else if ($("#hour-15").data("hour") > currentTime) {
  $("#hour-15").removeClass("past");
  $("#hour-15").addClass("future");
} else {
  $("#hour-15").removeClass("future");
  $("#hour-15").addClass("present");
}

if ($("#hour-16").data("hour") < currentTime) {
  $("#hour-16").removeClass("present");
  $("#hour-16").addClass("past");
} else if ($("#hour-16").data("hour") > currentTime) {
  $("#hour-16").removeClass("past");
  $("#hour-16").addClass("future");
} else {
  $("#hour-16").removeClass("future");
  $("#hour-16").addClass("present");
}

if ($("#hour-17").data("hour") < currentTime) {
  $("#hour-17").removeClass("present");
  $("#hour-17").addClass("past");
} else if ($("#hour-17").data("hour") > currentTime) {
  $("#hour-17").removeClass("past");
  $("#hour-17").addClass("future");
} else {
  $("#hour-17").removeClass("future");
  $("#hour-17").addClass("present");
}

if ($("#hour-18").data("hour") < currentTime) {
  $("#hour-18").removeClass("present");
  $("#hour-18").addClass("past");
} else if ($("#hour-18").data("hour") > currentTime) {
  $("#hour-18").removeClass("past");
  $("#hour-18").addClass("future");
} else {
  $("#hour-18").removeClass("future");
  $("#hour-18").addClass("present");
}

if ($("#hour-19").data("hour") < currentTime) {
  $("#hour-19").removeClass("present");
  $("#hour-19").addClass("past");
} else if ($("#hour-19").data("hour") > currentTime) {
  $("#hour-19").removeClass("past");
  $("#hour-19").addClass("future");
} else {
  $("#hour-19").removeClass("future");
  $("#hour-19").addClass("present");
}

if ($("#hour-10").data("hour") < currentTime) {
  $("#hour-10").removeClass("present");
  $("#hour-10").addClass("past");
} else if ($("#hour-10").data("hour") > currentTime) {
  $("#hour-10").removeClass("past");
  $("#hour-10").addClass("future");
} else {
  $("#hour-10").removeClass("future");
  $("#hour-10").addClass("present");
}

});
