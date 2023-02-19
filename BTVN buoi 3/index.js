// Bai 1
for( i = 1 ; i <= 5 ; i++) {
    for( j = 1 ; j <= 5 - i ; j++) {
   console.log(" ");
    }
    for( k = 1 ; k <= 2 * i - 1 ; k++) {
        console.log("1");
    }
}

// Bai 2
myArr = [9,7,9,0,7,8,387,123,456];
newArray = [];
for( i = 0 ; i <= 9 ; i++) {
    if(myArr[i] % 2 == 0) {
        newArray.push(myArr[i]);
    }
}
console.log(newArray);