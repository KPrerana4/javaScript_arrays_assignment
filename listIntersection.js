function intersection(list1, list2){
    let result = [];
    for(let element of list1){
        let list1ElementCount = count(list1, element);
        let list2ElementCount = count(list2, element);
        let minimumCount = Math.min(list1ElementCount, list2ElementCount);
        result = addElementToResult(minimumCount, result, element);
    }
    return result;
}

function count(list, element)
{
    let count = 0;
    for(let index = 0; index < list.length; index++)
    {
        if(list[index] == element)
            count++;
    }
    return count;
}

function addElementToResult(minimumCount, result, element)
{
    if(count(result,element) == minimumCount){
        return result;
    }
    for(let i = 0; i < minimumCount; i++){
      result.push(element);
    }
    return result;
}

console.log("Intersection between lists:");
console.log("[1,6,6,3],[1,2,2,3,4,6,6]: " + intersection([1,6,6,3],[1,2,2,3,4,6,6]));
console.log("[1,6,3,2,2],[1,2,2,3,4,6,6]: " + intersection([1,6,3,2,2],[1,2,2,3,4,6,6]));
console.log(intersection([],[1,2,3]));