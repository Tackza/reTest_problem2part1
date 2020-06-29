let number1 = Infinity
let number2 = Infinity
let number3 = Infinity
while (true) {
    let num = prompt("Enter The Number : ")
    if (Number(num) < Number(number1) && Number(num) < Number(number2) && Number(num) < Number(number3)) {
        number3 = number2
        number2 = number1
        number1 = num
    }
    else if (Number(num) < Number(number2) && Number(num) > Number(number1)) {
        number3 = number2
        number2 = num
    }
    else if (Number(num) < Number(number3) && Number(num) > Number(number1) && Number(num) > Number(number2)) {
        number3 = num
    }
    else if (num == "stop") {
        console.log(`Min1 : ${number1} < Min2 : ${number2} < Min3 : ${number3}`)
        break
    }
}