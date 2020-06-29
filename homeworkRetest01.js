function divide() {
    let a = +prompt("Enter A : ")
    let b = +prompt("Enter B: ")
    let result
    let n = 0

    if (a > b) {
        n = a
    } else {
        n = b
    }
    for (let i = 2; i <= n; i++) {
        while (a % i == 0 && b % i == 0) {
            a = a / i
            b = b / i
        }
        result = `${a} / ${b}`
    }
    return result
}
console.log(divide())