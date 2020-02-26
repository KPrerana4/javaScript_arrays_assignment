const functions = require('./functions');
function main()
{
    console.log("Unions:\n"+functions.unionLists([1,2,2,3],[1,2,2,4,6,6]));
    console.log(functions.unionLists([],[1,2]));

    console.log("\nIntersections:")
    console.log(functions.intersectionOfLists([1,6,6,3],[1,2,2,3,4,6,6]));
    console.log(functions.intersectionOfLists([1,6,3,2,2],[1,2,2,3,4,6,6]));
    console.log(functions.intersectionOfLists([],[1,2,3]));

    console.log("\nis subset:");
    console.log(functions.isSubset([1,2,3], [1,2]));
    console.log(functions.isSubset([1,2,2,3], [1,2,2]));
    console.log(functions.isSubset([1,2,3], [1,4]));
    console.log(functions.isSubset([1,2,3], []));

    console.log("\nDifferences:");
    console.log(functions.difference([1,2,3], [1,2]));
    console.log(functions.difference([1,2,2], [1,2]));

    console.log("\nRevere");
    let list1=[1,2,3];
    let list2=[3,2,1];
    console.log("list1 = "+list1+"     list2 = "+list2);
    console.log("isReverse(list1,list2) = " + functions.isReverse(list1,list2));
    console.log("isReverse(list2,list1) = " + functions.isReverse(list2,list1));
    list1=[1,2,4];
    list2=[3,2,1];
    console.log("list1 = "+list1+"     list2 = "+list2);
    console.log("isReverse(list1,list2) = " + functions.isReverse(list1,list2));
    console.log("isReverse(list2,list1) = " + functions.isReverse(list2,list1));

    console.log("\nAre Equal");
    list1=[1,2,3];
    list2=[1,2,3];
    console.log("areEqual(list1,list2) = " + functions.areListsEqual(list1,list2));
    console.log("areEqual(list2,list1) = " + functions.areListsEqual(list2,list1));
    list1=[1,2,3];
    list2=[2,1,3];
    console.log("areEqual(list1,list2) = " + functions.areListsEqual(list1,list2));
    console.log("areEqual(list2,list1) = " + functions.areListsEqual(list2,list1));
}

main();