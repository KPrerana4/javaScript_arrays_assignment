function intersectionOfLists(list1, list2){
    let result = [];
    for(let element of list1){
        let list1ElementCount = count(list1, element);
        let list2ElementCount = count(list2, element);
        let leastCount = Math.min(list1ElementCount, list2ElementCount);
        result = addElementToResult(leastCount, result, element);
    }
    return result;
}

function count(list, searchingElement)
{
    let count = 0;
    for(let element of list)
    {
        if(element == searchingElement)
            count++;
    }
    return count;
}

function addElementToResult(leastCount, result, element)
{
    if(count(result,element) == leastCount){
        return result;
    }
    for(let i = 0; i < leastCount; i++){
      result.push(element);
    }
    return result;
}

console.log("result:" + intersectionOfLists([1,6,6,3],[1,2,2,3,4,6,6]));
console.log("result:" + intersectionOfLists([1,6,3,2,2],[1,2,2,3,4,6,6]));
console.log("result:" + intersectionOfLists([],[1,2,3]));