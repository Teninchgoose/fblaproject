
 function calculate() {
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var grade = document.getElementById("grade").value;
        var quarter = document.getElementById("quarter").value;
        var points = 0;
        var student1 = "Carley Barbra from grade 10 scored 35 points during " + quarter + "\n";
        var student2 = "Brian Grant from grade 9 scored 45 points during " + quarter + "\n";
        var student3 = "Jillian Leahy from grade 12 scored 50 points during " + quarter + "\n";
        var student4 = "Christian Toro from grade 12 scored 25 points during " + quarter + "\n";
        var student5 = "Carley Barbra from grade 10 scored 15 points during " + quarter;
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
        else{
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
        document.getElementById("result5").innerHTML = student5;

        if (points >= 10) {
            document.getElementById("line3").innerHTML = "Congratulations! You have earned a Homework Pass!";
        }
        if (points >= 25) {
            document.getElementById("line3").innerHTML = "Awesome! You have earned a Restaurant Gift Card!";
        }
        if (points >= 50) {
            document.getElementById("line3").innerHTML = "Wow! You have earned a School Swag Bag!";
        }
        }
        //Determines most points
        if(points > 50)
        {
        document.getElementById("line4").innerHTML = fname + " " + lname + " with " + points + " points.";
         }
         else if(50 > points)
         {
         document.getElementById("line4").innerHTML = "Jillian Leahy with 50 points.";
         }
         //Random Winner
            if(random == 0)
            {
            document.getElementById("line5").innerHTML = fname + " " + lname;
            }
            else if(random == 1)
            {
            document.getElementById("line5").innerHTML = "Carley Barbra";
            }
             else if(random == 2)
            {
            document.getElementById("line5").innerHTML = "Brian Grant";
            }
             else if(random == 3)
            {
            document.getElementById("line5").innerHTML = "Jillian Leahy";
            }
             else if(random == 4)
            {
            document.getElementById("line5").innerHTML = "Christian Toro";
            }

    }