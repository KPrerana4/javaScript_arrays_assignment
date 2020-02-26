function drop(list, n)
{
    if(n >= list.length)
    {
        return "Not possible";
    }
    return list.slice(n);
}

console.log("drop([1,2,3,4,5],2) = " + drop([1,2,3,4,5],2));
console.log("drop([1,2,3,4,5],6) = " + drop([1,2,3,4,5],6));