function difference(list1, list2)
{
    let result = [];
    for(let element of list1){
        if(!list2.includes(element)){
            result.push(element);
        }
    }
    return result;
}

console.log("difference([1,2,3], [1,2]) = " + difference([1,2,3], [1,2]));
console.log(difference([1,2,2], [1,2]));