function sequenceNumber() {
    let sum = 1
    for (let i = 2; i <= 18954; i++) {
        if (i % 2 == 0) {
            sum = sum + (i * -1)
        } else {
            sum = sum + i
        }
    }
    console.log(sum)
}
sequenceNumber()