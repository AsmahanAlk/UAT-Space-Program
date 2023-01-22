



function countDown()
{
    //currTime is the seconds knocked off
    var currTime = 10;
   //a for loop because I found it the easiest 
    for (var i = 1; i <= 11; i++)
{
    //this is the if statement for the end of the countdown
    if (i == 11) {
        setTimeout(function () {
            //this is for blastoff
            document.getElementById("active").innerHTML = "BLASTOFF";
        }, 1000 * i);
    //this is the else if statement that does the countdown itself 
    } else if (i < 11){
        setTimeout(function () {
            //this is for replacing text each time with the variable currTime
            document.getElementById("active").innerHTML = currTime;
            //subtracting 1 from currTim every second
            currTime --;
        }, 1000 * i);
    }
}
}
