function drop(list, n)
{
    return list.slice(n);
}

console.log("drop([1,2,3,4,5],2) = " + drop([1,2,3,4,5],2));
console.log("drop([1,2,3,4,5],6) = ");
console.log(drop([1,2,3,4,5],6));