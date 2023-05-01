function checkOutlier(arr){
    let even = arr.filter(el => el % 2 ===0); 
    let odd = arr.filter(el => el % 2 !==0); 
    return even.length === 1 ? `Outlier is ${even}`: `Outlier is ${odd}`; 
}
// console.log(checkOutlier([160, 3, 1719, 19, 11, 13, -21])); 
console.log(checkOutlier([160, 301, 17190, 190, 110, 130, -20])); 