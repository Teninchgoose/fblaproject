# fblaproject

<script>
for(var i = 0, i < 5, i++)
{
string += (fnamelist[Math.random()*fnamelist.length-1] + " " + fnamelist[Math.random()*fnamelist.length-1] + " in grade " + (12*Math.random() + 9) + " has " + Math.random()*52 + " points.";
}
document.getElementById("result").innerHTML = string;
}
  function h()
{
let fnamelist = ["Nikole", "Remy", "Dewi", "Maria", "Kenneth", "Burt", "Sarah", "Storm", "Mya"]

let string = (firstName + " " + lastName + " in grade " + grade + " has " + points + " points." + "\n");
for(var i = 0, i < 5, i++)
{
string += (fnamelist[Math.random()*fnamelist.length-1] + " " + fnamelist[Math.random()*fnamelist.length-1] + " in grade " + (12*Math.random() + 9) + " has " + Math.random()*52 + " points.";
}
document.getElementById("result").innerHTML = string;
}
</script>