console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    for(let i = 0; i <= count; i++){
       if( count < 0){
            console.log(count)
           }
       if(i % 2 == 1){
            console.log(i);
           }
       
      
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = "Congrats " + userName + ", you can drive!";
    let belowSixteen = "Sorry " + userName + ", but you need to wait until you're 16.";

    if( age >= 16){
        console.log(aboveSixteen);
    }
    else{
        console.log(belowSixteen);
    }
}

function checkAge2(){
    let userName = prompt("Enter your name")
    let age = prompt("Enter your age")

    let aboveSixteen = "Congrats " + userName + ", you can drive!";
    let belowSixteen = "Sorry " + userName + ", but you need to wait until you're 16.";

    if( age >= 16){
        console.log(aboveSixteen);
    }
    else{
        console.log(belowSixteen);
    }
}


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

a = prompt("enter x coordinate :")
b = prompt("enter y coordinate :")
console.log(quadrantChecker(a, b));

function quadrantChecker(x, y){
    
    if(x < 0){
        if(y < 0){
            console.log("(" + x + "," + y + ") is on the 3rd quadrant");
        }

        else if(y == 0){
            console.log("(" + x + "," + y + ") is on the x axis");
        }
        else{ //y > 0//
            console.log("(" + x + "," + y + ") is on the 2nd quadrant");
        }

    }

    else if(x == 0){

         if(y == 0){
            console.log("(" + x + "," + y + ") is on the origin");
        }
        else{ // y != 0 //
            console.log("(" + x + "," + y + ") is on the y axis");
        }
    }

    else{  // x > 0 //

        if(y < 0){
            console.log("(" + x + "," + y + ") is on the 4th quadrant");
        }

        else if(y == 0){
            console.log("(" + x + "," + y + ") is on the x axis");
        }
        else{
            console.log("(" + x + "," + y + ") is on the 1st quadrant");
        }

    }

}


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangleChecker(x, y, z){
     
    if(x + y > z || x + z > y || y + z > x){
        if(x == y && x == z){
            console.log(" Sides" + x + ", " + y + ", " + z + " make an Equilateral triangle");
        }
        else if(x == y || x == z || y == z){
            console.log(" Sides" + x + ", " + y + ", " + z + " make an Isocelese triangle");
        }
        
        else{
            console.log(" Sides" + x + ", " + y + ", " + z + " make a Scalene triangle");
        }
    }
    
    else {
        console.log(" Sides" + x + ", " + y + ", " + z + " make an Invalid Triangle");
    }

   
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function DataPlanStatus(PlanLimit, day, usage){


    let remainDays = 30 - day;
    let dailyAvg = usage / day;
    let optimalAvg = PlanLimit / 30;
    let usageDiff = usage - PlanLimit;
 
    console.log(day + " days used, " + remainDays + "days remaining");
    console.log("Average daily use: " + dailyAvg + " GB/day");

    if(dailyAvg * 30 <= usage){
        console.log("Within bounds of  your plan limit.");
    }
    else{
        
        console.log("You are EXCEEDING your average daily use (" + dailyAvg + " GB/day),");
        console.log("continuing this high usage, you'll exceed your data plan by " + usageDiff + "GB.");
        console.log("To stay below your data plan, use no more than " + optimalAvg + " GB/day.");
    }

}