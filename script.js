function calculate() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var grade = document.getElementById("grade").value;
    var quarter = document.getElementById("quarter").value;
    var points = 0;
    var points1 = Math.round(Math.random()*52);
    var points2 = Math.round(Math.random()*52);
    var points3 = Math.round(Math.random()*52);
    var points4 = Math.round(Math.random()*52);

    var student1 = "Carley Barbra from grade 10 scored " + points1 +" points during " + quarter + "\n";
    var student2 = "Brian Grant from grade 9 scored " + points2 + " points during " + quarter + "\n";
    var student3 = "Jillian Leahy from grade 12 scored " + points3 + " points during " + quarter + "\n";
    var student4 = "Christian Toro from grade 12 scored " + points4 + " points during " + quarter + "\n";
    var random = Math.round(Math.random()*4);
    console.log(random);
    if(fname == "")
    {
        document.getElementById("result").innerHTML = "Please enter a first name!";
    }
    else if(lname == "")
    {
        document.getElementById("result").innerHTML = "Please enter a last name!";
    }
    else {
        if (document.getElementById("answer1").checked) {
            points += 1;
        }
        if (document.getElementById("answer2").checked) {
            points += 5;
        }
        if (document.getElementById("answer3").checked) {
            points += 10;
        }
        if (document.getElementById("answer4").checked) {
            points += 3;
        }
        if (document.getElementById("answer5").checked) {
            points += 5;
        }
        if (document.getElementById("answer6").checked) {
            points += 10;
        }
        if (document.getElementById("answer7").checked) {
            points += 5;
        }
        if (document.getElementById("answer8").checked) {
            points += 3;
        }
        if (document.getElementById("answer9").checked) {
            points += 5;
        }
        if (document.getElementById("answer10").checked) {
            points += 5;
        }

        document.getElementById("result").innerHTML = fname + " " + lname + " from grade " + grade + " scored " + points + " points during " + quarter;
        document.getElementById("result1").innerHTML = student1;
        document.getElementById("result2").innerHTML = student2;
        document.getElementById("result3").innerHTML = student3;
        document.getElementById("result4").innerHTML = student4;
        //Determines most points
        if (points > points1 && points > points2 && points > points3 && points > points4) {
    document.getElementById("line4").innerHTML = fname + " " + lname + " with " + points + " points.";
} else if (points1 > points && points1 > points2 && points1 > points3 && points1 > points4) {
    document.getElementById("line4").innerHTML = "Carley Barbra with " + points1 + " points.";
} else if (points2 > points && points2 > points1 && points2 > points3 && points2 > points4) {
    document.getElementById("line4").innerHTML = "Brian Grant with " + points2 + " points.";
} else if (points3 > points && points3 > points1 && points3 > points2 && points3 > points4) {
    document.getElementById("line4").innerHTML = "Jillian Leahy with " + points3 + " points.";
} else {
    document.getElementById("line4").innerHTML = "Christian Toro with " + points4 + " points.";
}


// Random Winner
var winner;
if (random == 0) {
    winner = fname + " " + lname;
} else if (random == 1) {
    winner = "Carley Barbra";
} else if (random == 2) {
    winner = "Brian Grant";
} else if (random == 3) {
    winner = "Jillian Leahy";
} else if (random == 4) {
    winner = "Christian Toro";
}

document.getElementById("line5").innerHTML = "Random Winner: " + winner;

    }
 }