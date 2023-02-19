// Bai 1
var bag = ["Grape", 15];
console.log("I have " + bag[1] + " " + bag[0]);


// Bai 2
for(var i = 0; i < 3 ; i ++) {
    console.log("I have " + bag[1] + " " + bag[0]);
};

// Bai 3
var myDog = {
    name: "Ngáo",
    legs: 4,
    friends: ["everthing!"]
};
myDog.name = "Husky";
myDog.color = "brown";
delete myDog.friends;

console.log(myDog);