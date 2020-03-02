function difference(list1, list2)
{
    return list1.filter(function(element){
        return !this.includes(element);
    },list2);
}

console.log("difference([1,2,3], [1,2]) = " + difference([1,2,3], [1,2]));
console.log(difference([1,2,2], [1,2]));