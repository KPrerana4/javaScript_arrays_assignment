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

function frequency(list, element)
{
    return list.filter((member) => member == element).length;
}

console.log("count([1,2,3,4,1,2,1,6,2,2],2) : " + frequency([1,2,3,4,1,2,1,6,2,2],2));
console.log("count([1,2,3,4,1,2,1,6],8) : " + frequency([1,2,3,4,1,2,1,6],8));