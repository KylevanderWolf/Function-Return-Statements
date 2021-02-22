//Check if Number is bigger than 100
const checkNumber = (number) => {
    if (number > 100) {
        console.log(number + " is higher then 100")
    } else {
        console.log(number + " is equal or lower then 100")
    }
}
checkNumber(10)

//AI bouncer
const bouncerCheck = (maxCount, currentCount, age) => {
    if (age <= 18) {
        console.log('club is for adults')
    }
    else if (maxCount > currentCount) {
        console.log('come in')
    }
    else {
        console.log("its too busy now, come back later")
    }
}
bouncerCheck(100, 80, 20)


//Calculate Average
const numbers = [1, 3, 9, 27, 81]
const CalculateAverage = (numbers) => {
    const totalNumbers = Math.round(numbers.reduce((a, b) => (a + b) / numbers.length))
    return totalNumbers
}

const roundedAverage = CalculateAverage(numbers)
console.log(roundedAverage)