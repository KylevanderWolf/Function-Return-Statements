//Check if Number is bigger than 100
const checkNumber = (number) => {
    if (number > 100) {
        return true
    } else {
        return false
    }
}
console.log(checkNumber(10))

//AI bouncer
const bouncerCheck = (maxCount, currentCount, age) => {
    if (age <= 18) {
        return 'club is for adults'
    }
    else if (maxCount >= currentCount) {
        return 'come in'
    }
    else {
        return "its too busy now, come back later"
    }
}
console.log(bouncerCheck(100, 80, 20))


//Calculate Average
const numbers = [1, 3, 9, 27, 81]
const CalculateAverage = (numbers) => {
    const totalNumbers = Math.round(numbers.reduce((a, b) => (a + b) / numbers.length))
    return totalNumbers
}

const roundedAverage = CalculateAverage(numbers)
console.log(roundedAverage)