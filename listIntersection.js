function intersectionOfLists(list1, list2)
{
    let result = [];
    for(let element of list1)
    {
        let list1ElementCount = count(list1, element);
        let list2ElementCount = count(list2, element);
        let leastCount = findMinimumCount(list1Count, list2Count);
        result = addElement(leastCount, result, element);
    }
    return result;
}

function count(list, elementToSearch)
{
    let count = 0;
    for(let element of list)
    {
        if(element == elementToSearch)
            count++;
    }
    return count;
}

function findMinimumCount(count1, count2)
{
    if(count1 < count2)
    {
        return count1;
    }
    else if(count1 > count2)
    {
        return count2;
    }
    return count1;
}

function addElement(leastCount, result, element)
{
    if(count(result,element) == leastCount)
        return result;
    for(let i = 0; i < leastCount; i++)
      result.push(element);
    return result;
}


console.log(intersectionOfLists([1,6,6,3],[1,2,2,3,4,6,6]));