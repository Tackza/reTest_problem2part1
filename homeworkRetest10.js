function insertNumber() {
    let min = Infinity
    while (true) {
        let x = prompt("enter number : ")
        if (Number(x) < Number(min)) {
            min = x
        }
        if (x == "stop") {
            break
        }
    }
    return min
}
console.log(insertNumber())