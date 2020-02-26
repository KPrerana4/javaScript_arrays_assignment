function range(startValue,endValue,step = 1)
{
    if(step == 0){
        return [startValue];
    }
    if(step > 0){
        return rangeForPositiveStep(startValue, endValue, step);
    }
    return rangeForNegativeStep(startValue, endValue, step);
}

function rangeForPositiveStep(startValue, endValue, step)
{
     let values = [];
     for(let value = startValue; value < endValue; value += step){
        values.push(value);
     }
     return values;
}

function rangeForNegativeStep(startValue, endValue, step)
{
     let values = [];
     for(let value = startValue; value > endValue; value += step){
        values.push(value);
     }
     return values;
}

console.log("\nRange");
console.log("range(1,5) = " + range(1,5));
console.log("range(1,10,2) = " + range(1,10,2));
console.log("range(5,0,-1) = " + range(5,0,-1));
console.log("range(1,6,0) = " + range(1,6,0));
console.log("range(100,1) = " + range(100,1));