function cycle(list, n)
{
    let newList = [], index = 0;
    while(newList.length != n)
    {
        newList.push(list[index]);
        index = (index + 1) % list.length;
    }
    return newList;
}

console.log(cycle([1,2],1));
console.log(cycle([1,2,3],5));