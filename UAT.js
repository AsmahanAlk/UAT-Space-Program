

//test


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
    //this is the else if statement that does the warning
    } else if (i > 6){
        setTimeout(function () {
            //this is for replacing text each time with the variable currTime
            document.getElementById("active").innerHTML ="Warning Less than 1/2 way to launch, time left: " + currTime;
            //subtracting 1 from currTim every second
            currTime --;
        }, 1000 * i);
        //the countdown
    } else{
        setTimeout(function () {
            document.getElementById("active").innerHTML = currTime;
            currTime --;
        }, 1000 * i);
    }
}
}


//test

function checkCreds()
{
    //delcaring the variables for the form
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var badgeNumber = document.getElementById("password").value;
    var nameInfo = firstName + lastName;

 //this is where the condtions 20 characters limit and 3 numbers limit are 
    if(nameInfo.length > 20 || nameInfo.length < 4){
        document.getElementById("loginStatus").innerHTML = "Invalid Name: " + firstName + lastName;
    }
    else if(badgeNumber.length > 3){
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number: " + badgeNumber;
    }
  //if the user did a valid job at login they go to countdown timer page
    else{
        location.replace("blastoff.html");
    }

}