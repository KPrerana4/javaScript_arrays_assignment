function unionLists(list1, list2)
{
    return list1.concat(list2);
}

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

function isSubset(list1, list2)
{
    for(let element of list2)
    {
        if(count(list2, element) != count(list1, element)){
            return false;
        }
    }
    return true;
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

function isReverse(list1, list2){
    let isEqual = false;
    if(list1.length == list2.length){
        let temporaryList = list1;
        list1 = reverseTheList(list1);
        isEqual = areListsEqual(list1,list2);
        list1 = temporaryList;
    }
    return isEqual;
}

function reverseTheList(list1)
{
    let reverseList = [];
    for(let index = list1.length - 1; index >= 0; index--)
    {
        reverseList.push(list1[index]);
    }
    return reverseList;
}

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

function areListsEqual(list1, list2)
{
    for(let index = 0; index < list1.length; index++){
        if(list1[index] != list2[index]){
            return false;
        }
    }
    return true;
}

module.exports = {unionLists, intersectionOfLists, isSubset, isReverse, difference, areListsEqual};