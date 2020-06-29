function averageNumber() {
    let sum = 0
    let count = 0
    while (true) {
        let num = prompt("Enter Number : ")
        if (Number(num)) {
            sum += Number(num)
            count++
        }
        else if (num == "stop") {
            let average = sum / count
            console.log(`count : ${count}`)
            console.log(`average of number : ${average}`)
            break
        }
    }
}
averageNumber()