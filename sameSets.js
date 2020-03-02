function isSameSet(list1, list2)
{
    if(list1.length == list2.length)
    {
        return list1.every(function(element){
                return count(list1, element) == count(list2, element);
        },list2);
    }
    return false;
}

function count(list, element)
{
    return list.filter(function(member){
            return element == member;
    },element).length;
}

console.log("isSameSet([1,2,3],[1,3,2]) = " + isSameSet([1,2,3],[1,3,2]));
console.log("isSameSet([1,3,2],[1,2,3]) = " + isSameSet([1,3,2],[1,2,3]));
console.log("isSameSet([1,2,3],[2,1,3,4]) = " + isSameSet([1,2,3],[2,1,3,4]));
console.log("isSameSet([2,1,3,4],[1,2,3]) = " + isSameSet([2,1,3,4],[1,2,3]));