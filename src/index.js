module.exports = function reverse (n){
    if (n < 0){
        n *= (-1);
    }
    let str = String(n);
    let arr = str.split('');
    let newStr = '';
    for (let i = arr.length - 1; i >= 0; i--){
        newStr += arr[i];
    }
    return newStr;
}
