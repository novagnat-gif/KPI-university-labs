const max = (matrix) => {
    let max = matrix[0][0];
    for (const arr of matrix) {
        for (const number of arr){
            if (number > max){
                max = number;
            }
        }
    }
    return max;
};



const m = max([[4,7,10], [13,16,19], [21,24,27]]);

console.log(m);