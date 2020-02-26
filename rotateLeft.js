function rotateLeft(list, number)
{
    if(number >= list.length){
        number %= list.length;
    }
    let rotatedList = [];
    rotatedList.push(list.slice(number));
    rotatedList.push(list.slice(0, number))
    return rotatedList;
}

console.log("rotateLeft([1,2,3,4,5], 1) = " + rotateLeft([1,2,3,4,5], 1));
console.log("rotateLeft([1,2,3], 5) = " + rotateLeft([1,2,3], 5));