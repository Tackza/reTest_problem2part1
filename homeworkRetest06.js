function sequenceNumber() {
    let sum = 0
    let j = 1
    for (let i = 2; i <= 88; i++) {
        sum = sum + (i * j)
        j = i
    }
    console.log(sum)
}
sequenceNumber()