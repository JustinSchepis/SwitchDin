
function binaryGap(num){
    if (num < 0 ) {
        return 'Not a positive integer';
    } else {
        let binary = (num).toString(2);
    const arr = binary.split('1').map((solution, index, binaryArr) => {
            return binaryArr[index + 1] != undefined ? solution.length : 0;
        });
        return Math.max.apply(Math, arr);
    }
}
console.log(binaryGap(579))
