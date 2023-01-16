





function countDown()
{
    var currTime = 10;
    //timer for 10 seconds left
    setTimeout(function () {
        //code is here for the 1st timer
        document.getElementById("countdown").innerHTML = currTime;
        currTime = currTime - 1;
    }, 1000);
    //9 sec left
    setTimeout(function () {
        //code is here for the 1st timer
        document.getElementById("countdown").innerHTML = currTime;
        currTime = currTime - 1;
    }, 2000);
    //8 sec left
    setTimeout(function () {
        //code is here for the 1st timer
        document.getElementById("countdown").innerHTML = currTime;
        currTime = currTime - 1;
    }, 3000);
    //7 sec left
    setTimeout(function () {
        //code is here for the 1st timer
        document.getElementById("countdown").innerHTML = currTime;
        currTime = currTime - 1;
    }, 4000);
    //6 sec left
    setTimeout(function () {
        //code is here for the 1st timer
        document.getElementById("countdown").innerHTML = currTime;
        currTime = currTime - 1;
    }, 5000);
    //5 sec left
    setTimeout(function () {
        //code is here for the 1st timer
        document.getElementById("countdown").innerHTML = currTime;
        currTime = currTime - 1;
    }, 6000);
    //4 sec left
    setTimeout(function () {
        //code is here for the 1st timer
        document.getElementById("countdown").innerHTML = currTime;
        currTime = currTime - 1;
    }, 7000);
    //3 sec left
    setTimeout(function () {
        //code is here for the 1st timer
        document.getElementById("countdown").innerHTML = currTime;
        currTime = currTime - 1;
    }, 8000);
    //2 sec left
    setTimeout(function () {
        //code is here for the 1st timer
        document.getElementById("countdown").innerHTML = currTime;
        currTime = currTime - 1;
    }, 9000);
    //1 sec left
    setTimeout(function () {
        //code is here for the 1st timer
        document.getElementById("countdown").innerHTML = currTime;
        currTime = currTime - 1;
    }, 10000);
     //prints Blastoff
     setTimeout(function () {
        //code is here for the 1st timer
        document.getElementById("countdown").innerHTML = "BLASTOFF";
        currTime = currTime - 1;
    }, 11000);
    

}