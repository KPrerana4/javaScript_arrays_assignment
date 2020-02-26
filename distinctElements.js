function isDistinct(list)
{
    for(let element of list)
    {
        if(count(list, element) != 1){
            return false;
        }
    }
    return true;
}

function count(list, element)
{
    let count = 0;
    for(let element1 of list)
    {
        if(element1 == element)
            count++;
    }
    return count;
}

console.log("isDistinct([1,2,3]) = " + isDistinct([1,2,3]));
console.log("isDistinct([1,2,3,1]) = " + isDistinct([1,2,3,1]));
