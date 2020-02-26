function isSameSet(list1, list2)
{
    if(list1.length != list2.length)return false;
    for(let element of list1)
    {
        if(count(list1, element) != count(list2, element)){
            return false;
        }
    }
    return true;
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

console.log("isSameSet([1,2,3],[1,3,2]) = " + isSameSet([1,2,3],[1,3,2]));
console.log("isSameSet([1,3,2],[1,2,3]) = " + isSameSet([1,3,2],[1,2,3]));
console.log("isSameSet([1,2,3],[2,1,3,4]) = " + isSameSet([1,2,3],[2,1,3,4]));
console.log("isSameSet([2,1,3,4],[1,2,3]) = " + isSameSet([2,1,3,4],[1,2,3]));