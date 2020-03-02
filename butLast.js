function butLast(list)
{
    return list.slice(0,list.length - 1);
}

console.log(butLast([1,2,3,4,5]));
console.log(butLast([]));