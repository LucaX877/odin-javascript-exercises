const fibonacci = function(num) {
    arr = [1,1]
    for (let i = 1; i < num; i++) {
        arr.push(arr[i]+arr[i-1]);
    }
    if (num == 0) return 0;
    else if (num < 0) return "OOPS";
    return arr[num-1]

};

// Do not edit below this line
module.exports = fibonacci;
