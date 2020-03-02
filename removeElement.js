function removeElement(list, element)
{
    return list.filter(function(member){
        return !(member == element);
    });
}

console.log("list : " + [1,2,3,4,5,1,1,2]);
console.log("removeElement(list,1)=" + removeElement([1,2,3,4,5,1,1,2], 1));
console.log("removeElement(list,2)=" + removeElement([1,2,3,4,5,1,1,2], 2));
console.log("removeElement(list,0)=" + removeElement([1,2,3,4,5,1,1,2], 0));