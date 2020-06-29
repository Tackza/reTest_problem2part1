function sequenceNumber() {
    let sum = 0
    let j = 1
    let k = 3
    for (let i = 5; i <= 159; i = i + 2) {
        sum = sum + (j * k * i)
        j = k
        k = i
    }
    console.log(sum)
}
sequenceNumber()