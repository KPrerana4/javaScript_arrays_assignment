function isReverse(list1, list2){
    let isEqual = false;
    if(list1.length == list2.length){
        let temporaryList = list1;
        list1 = reverseTheList(list1);
        isEqual = areListsEqual(list1,list2);
        list1 = temporaryList;
    }
    return isEqual;
}

function reverseTheList(list1)
{
    let reverseList = [];
    for(let index = list1.length - 1; index >= 0; index--)
    {
        reverseList.push(list1[index]);
    }
    return reverseList;
}

function areListsEqual(list1, list2)
{
    for(let index = 0; index < list1.length; index++){
        if(list1[index] != list2[index]){
            return false;
        }
    }
    return true;
}

function main(){
    let list1=[1,2,3];
    let list2=[3,2,1];
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
