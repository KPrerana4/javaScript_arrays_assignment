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

console.log("count([1,2,3,4,1,2,1,6],2) : " + count([1,2,3,4,1,2,1,6],2));
console.log("count([1,2,3,4,1,2,1,6],8) : " + count([1,2,3,4,1,2,1,6],8));