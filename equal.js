function areListsEqual(list1, list2)
{
    for(let index = 0; index < list1.length; index++){
        if(list1[index] != list2[index]){
            return false;
        }
    }
    return true;
}

function main()
{
    let list1=[1,2,3], list2=[1,2,3];
    console.log("list1 = " + list1 +"  list2 = " + list2);
    console.log("areEqual(list1,list2) = " + areListsEqual(list1,list2));
    console.log("areEqual(list2,list1) = " + areListsEqual(list2,list1));
    list1=[1,2,3];
    list2=[2,1,3];
    console.log("list1 = " + list1 +"  list2 = " + list2);
    console.log("areEqual(list1,list2) = " + areListsEqual(list1,list2));
    console.log("areEqual(list2,list1) = " + areListsEqual(list2,list1));
}

main();