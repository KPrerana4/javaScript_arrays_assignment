function isReverse(list1, list2)
{
    if(list1.length == list2.length)
    {
        return list1.every(function(element, index){
                return list1[index] == list2[list2.length - index - 1];
            },list2);
    }
    return false;
}

function main()
{
    let list1=[1,2,3,4];
    let list2=[4,3,2,1];
    console.log("list1 = "+list1+"     list2 = "+list2);
    console.log("isReverse(list1,list2) = " + isReverse(list1,list2));
    console.log("isReverse(list2,list1) = " + isReverse(list2,list1));
    list1=[1,2,4];
    list2=[3,2,1];
    console.log("list1 = "+list1+"     list2 = "+list2);
    console.log("isReverse(list1,list2) = " + isReverse(list1,list2));
    console.log("isReverse(list2,list1) = " + isReverse(list2,list1));
}

main();
