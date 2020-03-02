function repeatElement(element, n)
{
    let list = new Array(n);
    return list.fill(element);
}

console.log("repeatElement('a',4) = " + repeatElement('a',4));
console.log("repeatElement('ab',6) = " + repeatElement('ab',6));
console.log("repeatElement(2,8) = " + repeatElement(2,8));