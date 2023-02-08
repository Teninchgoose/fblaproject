var firstName = "";
var lastName = "";
var grade = 0;
var points = 0;

onEvent("generate", "click", function())
{
calculatePoints();
}


function calculatePoints() {
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let grade = document.getElementById("grade").value;
  let points = 0;

  if (document.querySelector("input[name='choice-radio1']:checked").value == "Yes") {
    points += 1;
  }
  if (document.querySelector("input[name='choice-radio2']:checked").value == "Yes") {
    points += 5;
  }
  if (document.querySelector("input[name='choice-radio3']:checked").value == "Yes") {
    points += 10;
  }
  if (document.querySelector("input[name='choice-radio4']:checked").value == "Yes") {
    points += 3;
  }
  if (document.querySelector("input[name='choice-radio5']:checked").value == "Yes") {
    points += 5;
  }
  if (document.querySelector("input[name='choice-radio6']:checked").value == "Yes") {
    points += 10;
  }
  if (document.querySelector("input[name='choice-radio7']:checked").value == "Yes") {
    points += 5;
  }
  if (document.querySelector("input[name='choice-radio8']:checked").value == "Yes") {
    points += 3;
  }
  if (document.querySelector("input[name='choice-radio9']:checked").value == "Yes") {
    points += 5;
  }

  alert(firstName + " " + lastName + " in grade " + grade + " has " + points + " points.");
}