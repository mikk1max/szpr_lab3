function fibonacci(num) {
    let a = 1, b = 0, temp
    while (num > 0) {
        temp = a
        a = a + b
        b = temp
        num--
    }
    return b
}
console.log(fibonacci(9))
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

// ZAD_2
// Zmienione zostały wiersze 3 a 7 =>
// ( nie >= a tylko > ; nie num++ a tylko num-- )

