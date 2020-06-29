let first = 0
let second = 1
let fibonacci 
let n = +prompt("Enter order number : ")
if (n == 1) {
    console.log(first)
} else if (n == 2) {
    console.log(second)
}
for (let i = 3; i <= n; i++) {
    fibonacci = first + second
    first = second
    second = fibonacci
}
console.log(fibonacci)