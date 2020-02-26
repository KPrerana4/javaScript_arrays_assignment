function everyNthElement(list, n){
    if(n <= 0)
        return list;
    let elements = [];
    for(let index = 0; index < list.length; index += n){
        elements.push(list[index]);
    }
    return elements;
}

console.log(everyNthElement([1,2,3,4,5,6,7,8,9,10],2));