function union(list1, list2)
{
    return list1.concat(list2);
}

console.log("union([1,2,2,3],[1,2,2,4,6,6])="+ union([1,2,2,3],[1,2,2,4,6,6]));
console.log("union([],[1,2])= "+ union([],[1,2]));