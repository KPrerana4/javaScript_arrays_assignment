function repeatElement(element, n)
{
    let list = [];
    while(list.length != n)
    {
        list.push(element);
    }
    return list;
}

console.log("repeatElement('a',4) = " + repeatElement('a',4));
console.log("repeatElement('ab',6) = " + repeatElement('ab',6));
console.log("repeatElement(2,8) = " + repeatElement(2,8));