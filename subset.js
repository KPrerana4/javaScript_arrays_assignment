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

console.log(isSubset([1,2,3], [1,2]));
console.log(isSubset([1,2,2,3], [1,2,2]));
console.log(isSubset([1,2,3], [1,4]));
console.log(isSubset([1,2,3], []));