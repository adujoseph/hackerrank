function plusMinus(arr) {
    if(arr.length < 1){
        return 'Empty array found'
    }
    let posArr = [];
    let negArr = [];
    let zeroArr = [];
    let posRatio, negRatio, zeroRatio;
    arr.map((num) => {
        if(num === 0){
            zeroArr.push(num)
        }else if(num > 0){
            posArr.push(num)
        } else {
            negArr.push(num)
        }
    })
    posRatio = (posArr.length/arr.length).toFixed(6);
    negRatio = (negArr.length/arr.length).toFixed(6);
    zeroRatio = (zeroArr.length/arr.length).toFixed(6)
    return `${posRatio} \n ${negRatio} \n ${zeroRatio}`
}