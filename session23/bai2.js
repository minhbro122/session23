let array = [];
while (array.length < 10) {
    const randomNumber = Math.floor(Math.random() * 100); 
    if (!array.includes(randomNumber)) { 
        array.push(randomNumber); 
    }
}

let maxValue = array[0];
let maxIndex = 0;

for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
        maxValue = array[i];
        maxIndex = i;
    }
}
console.log("Mảng số nguyên là:", array);
console.log("Giá trị lớn nhất là:", maxValue, "tại vị trí:", maxIndex)S