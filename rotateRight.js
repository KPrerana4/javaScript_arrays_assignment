function rotateRight(list, number)
{
    if(number >= list.length){
        number %= list.length;
    }
    let rotatedList = [];
    rotatedList.push(list.slice(list.length - number));
    rotatedList.push(list.slice(0, list.length - number))
    return rotatedList;
}

console.log("rotateRight([1,2,3,4,5]) = " + rotateRight([1,2,3,4,5], 1));
console.log("rotateRight([1,2,3]) = " + rotateRight([1,2,3], 4));