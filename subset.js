function isSubset(list1, list2)
{
    return list2.every(function(element){
        return count(list2, element) == count(list1, element);
    },list1);
}

function count(list, element)
{
    return list.filter(function(member){
        return element == member;
    },element).length;
}

console.log("isSubset([1,2,3], [1,2]) = " + isSubset([1,2,3], [1,2]));
console.log("isSubset([1,2,2,3], [1,2,2]) = " + isSubset([1,2,2,3], [1,2,2]));
console.log("isSubset([1,2,3], [1,4]) = " + isSubset([1,2,3], [1,4]));
console.log("isSubset([1,2,3], []) = " + isSubset([1,2,3], []));