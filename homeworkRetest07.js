function sequenceNumber() {
    let sum = 0
    let j = 1
    let k = 2
    for (let i = 3; i <= 89; i++) {
        sum = sum + (j * k * i)
        j = k
        k = i
    }
    console.log(sum)
}
sequenceNumber()