function minMax() {
    let max = Infinity
    let min = -Infinity
    while (true) {
        let num = prompt("Enter the number : ")
        if (Number(num) < Number(max)) {
            max = num
        }
        if (Number(num) > Number(min)) {
            min = num
        }
        if (num == "stop") {
            console.log(`min : ${max} , max : ${min}`)
            break
        }
    }
}
minMax()