function everyNthElement(list, n){
    if(n <= 0){
        return list;
    }
    return list.filter((element, index) => index % n == 0);
}

console.log(everyNthElement([1,2,3,4,5,6,7,8,9,10],3));