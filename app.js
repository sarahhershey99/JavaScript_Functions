console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count < 0) {
        for (let i = -1; i >= count; i--) {
            if (i % 2 != 0) {
                console.log(i)
            }
        }
    } else {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
} 
}
printOdds(-10)
printOdds(10)
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age) {
let oldEnoughMsg = `Congrats ${name}! You can drive!`;
let tooYoungMsg = `Sorry ${name}, You need to wait ${16 - age}
 year(s) to drive.`;

if (age < 16) {
    console.log(tooYoungMsg)
} else {
    if (age >= 16) {
        console.log(oldEnoughMsg)
    }
}
}

checkAge ("Ben", 12);
checkAge ("Seth", 16);
checkAge ("Cameron", 21);

console.log("EXERCISE 3:")
function checkQuadrant (x, y) {
    if (x > 0 && y > 0) {
        return "1";
    } else if (x < 0 && y > 0) {
        return "2";
    } else if (x < 0 && y < 0) {
        return "3";
    } else if (x > 0 && y < 0) {
        return "4";
    } else if (x == 0 && y != 0) {
        return "X Axis";
    } else if (x != 0 && y == 0) {
        return "Y Axis";
    } else {
        return "Origin";
    }
}

console.log(checkQuadrant (1, 1))
console.log(checkQuadrant (-1, 1))
console.log(checkQuadrant (-1, -1))
console.log(checkQuadrant(1, -1))
console.log(checkQuadrant(0, -1))
console.log(checkQuadrant(1, 0))
console.log(checkQuadrant(0, 0))

console.log("EXERCISE 4:")
function isValidTriangle (a, b, c) {
    return a + b > c && a + c > b && b + c > a
}

function checkTriangle(a, b, c) {
let isValid = isValidTriangle(a, b, c);
if (isValid) {
    if (a == b && b == c) {
        return `Equilateral`;
    } else if (a == b || b == c) {
        return `Isosceles`;
    } else {
        return `Scalene`
    }
} else {
    return `Not a valid triangle.`;
}
}

console.log(checkTriangle (2, 3, 4))
console.log(checkTriangle(2, 2, 2))
console.log(checkTriangle(1, 2, 2))
console.log(checkTriangle(1, 1, 2))

console.log("EXERCISE 5:")

function dataUsageFeedback (planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;

    console.log(`${day} day(s) used, ${remainingDays}
     day(s) remaining`);
     console.log(`Average projected use: ${projectedAvg} GB/day`);
     if (currentAvg > projectedAvg) {
        statusmsg = "EXCEEDING";
     } else if (currentAvg < projectedAvg) {
        statusmsg = "UNDER";
     } else if (currentAvg = projectedAvg) {
        statusmsg = "AT";
     }


     console.log(`You are ${statusmsg} your average 
     daily use ${currentAvg},
     by continuing this usage, you'll end up 
     using ${planLimit -(usage + projectedUsage)} GB from 
     your data limit. To stay below your data plan, use no
     more than ${remainingData / remainingDays} GB/day.`);
}

dataUsageFeedback(50, 12, 25);