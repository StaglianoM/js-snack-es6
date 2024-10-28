function sliceArray(elements, start, end) {

// if (start < 0) {
//     start = 0
// }

// if (end > elements.length) {
//     end = elements.length
// }

    const result = []
    for (i = start; i < end; i++) {
        const el = elements[i]
        result.push(el)
}
return result
}

const numbers = [4, 6, 5, 6, 7, 8, 9]
console.log(numbers)

const newNumbers = sliceArray(numbers, 3, 6)
console.log(newNumbers)