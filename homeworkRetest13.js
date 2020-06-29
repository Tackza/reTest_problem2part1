function differentNumber() {
    let max = Infinity
    let min = -Infinity
    while (true) {
        let num = prompt("Enter Number : ")
        if (Number(num) > Number(min)) {
            min = num
        }
        if (Number(num) < Number(max)) {
            max = num
        }
        if (num == "stop") {
            let different = min - max
            console.log(`Number of different : ${different}`)
            break
        }
    }
}
differentNumber()