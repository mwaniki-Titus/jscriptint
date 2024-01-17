for (let x = 6; x >= 1; x--) {
  console.log("*".repeat(x));
}

//example2

for (let i = 1; i <= 5; i ++) {
    let spaces = (" ".repeat(5 - i) )
    let stars = "*".repeat(i);
    console.log(spaces + stars);
}
for (let i = 4; i >= 1; i--) {
    let spaces = (" ".repeat(5 - i) )
    let stars = "*".repeat(i);
    console.log(spaces + stars);
}


// example 3

for (let i = 1; i <= 9; i +=2) {
    let spaces = " ".repeat((9- i )/2 )
    let stars = "*".repeat(i);
    console.log(spaces + stars);
}
for (let i = 7; i >= 1; i -=2) {
    let spaces = " ".repeat((9 - i)/2 )
    let stars = "*".repeat(i);
    console.log(spaces + stars);
}

// example 4
for (let i = 1; i <= 1; i++) {
    let stars = "*".repeat(7);
    console.log(stars);
}

for (let i = 2; i <= 8; i++) {
    let spaces = " ".repeat(6);
    let stars = "*";
    console.log(spaces + stars);
}
 
// Exampl 5
for (let i = 1; i <= 1; i++) {
    let stars = "*".repeat(7);
    console.log(stars);
}

for (let i = 2; i <= 8; i++) {
    let spaces = " ".repeat(6);
    let stars = "*";
    console.log(stars);
}


// example 6


let count = 0;
console.log("Generate random no ");

while (count < 6) {
    let randomNumber = Math.floor(Math.random() * 49) + 1;
    console.log("Generated random number:", randomNumber);
    console.log("Continue generating");
    count++;
}

console.log("Generating finished");


