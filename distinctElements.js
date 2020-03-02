function isDistinct(list)
{
    return list.every(function(element,index,list){
        return !list.slice(index + 1).includes(element);
    });
}

console.log("isDistinct([1,2,3,4]) = " + isDistinct([1,2,3,4]));
console.log("isDistinct([1,2,3,1]) = " + isDistinct([1,2,3,1]));
console.log("isDistinct([]) = " + isDistinct([]));