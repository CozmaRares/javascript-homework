/**
* This is an example problem. Please follow the instructions on how to complete the problems.
* If there are any questions please feel free to ask.
*/

// Each problem has a function in which you add your code so solve the problem.
function wasteTime() {
    // You can define variables that you need in the function.
    let i = 0;
    //This while will loop until i is equal to 99.
    while (i < 100) {
        //Wasting some time.
        i++;
    }
    //All problems should return an answer.
    return "Please return all your answers";
}

//This is a way a simple way to track how long an operation takes.
console.time("wasteTime");
//Loggin the answer to the problem.
console.log(wasteTime());
//The timer will stop and the time will be output to the console.
console.timeEnd("wasteTime");

// We are going to save all your answers here. No changes are required on this object.
const answers = {};

/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
function sumOfMultiples() {
    let i = 0;
    let total = 0;
    while (i < 1000) {
        if (i % 3 === 0 || i % 5 === 0) {
            total = total + i;
        }
        i++
    }
    return total;
}

console.time("sumOfMultiples");
answers.sumOfMultiples = sumOfMultiples();
console.timeEnd("sumOfMultiples");
console.log(answers.sumOfMultiples);

/**
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 */
function fibonacciSum() {
    let max = 4000000;
    let fibonacciArray = [1, 1];
    let fibbSum = 0;
    let fibbNumber = 0;
    do {
        fibbNumber = fibonacciArray[fibonacciArray.length - 2] + fibonacciArray[fibonacciArray.length - 1];
        if (fibbNumber <= max || fibbNumber % 2 === 0) {
            if (fibbNumber % 2 === 0) {
                fibbSum += fibbNumber;
            }
            fibonacciArray[fibonacciArray.length] = fibbNumber;
        }
    } while (fibbNumber < max)

    return fibbSum;
}

console.time("fibonacciSum");
answers.fibonacciSum = fibonacciSum();
console.timeEnd("fibonacciSum");
console.log(answers.fibonacciSum);

/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143?
 */
function largestPrimeFactor() {
    let maxFactor = 0;

    while (n % 2 == 0) {
        maxFactor = 2;
        n = n / 2;
    }

    for (let i = 3; i * i <= n; i += 2) {
        while (n % i == 0) {
            maxFactor = i;
            n = n / i;
        }
    }

    if (n > 2)
        return n;

    return maxFactor;
}

console.time("largestPrimeFactor");
answers.largestPrimeFactor = largestPrimeFactor();
console.timeEnd("largestPrimeFactor");
console.log(answers.largestPrimeFactor);

/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */
function largestPalindrome() {
    const isPalindrome = (number) => {
        const string = number.toString();
        const reversedString = string.split("")
            .reverse().join("");
        return string == reversedString;
    };

    let largest = 0;

    for (let i = 999; i >= 100; i--) {
        if (i * 999 < largest)
            break;

        for (let j = 999; j >= i; j--) {
            const product = i * j;

            if (product < largest)
                break;

            if (isPalindrome(product))
                largest = product;
        }
    }

    return largest;
}

console.time("largestPalindrome");
answers.largestPalindrome = largestPalindrome();
console.timeEnd("largestPalindrome");
console.log(answers.largestPalindrome);

/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */
function smallestMultipleOf1to20() {
    //Your code goes here
}

console.time("smallestMultipleOf1to20");
answers.smallestMultipleOf1to20 = smallestMultipleOf1to20();
console.timeEnd("smallestMultipleOf1to20");
console.log(answers.smallestMultipleOf1to20);

/**
 * The sum of the squares of the first ten natural numbers is, 12 + 22 + ... + 102 = 385
 * The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)2 = 552 = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

function sumSquareDifference() {
    //Your code goes here
}

console.time("sumSquareDifference");
answers.sumSquareDifference = sumSquareDifference();
console.timeEnd("sumSquareDifference");
console.log(answers.sumSquareDifference);

/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */
function primeAtPosition() {
    //Your code goes here
}

console.time("primeAtPosition");
answers.primeAtPosition = primeAtPosition();
console.timeEnd("primeAtPosition");
console.log(answers.primeAtPosition);

/**
 * The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
 * 7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450
 * Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
 */

function largestProductInSeries() {
    //Your code here
}

console.time("largestProductInSeries");
answers.largestProductInSeries = largestProductInSeries();
console.timeEnd("largestProductInSeries");
console.log(answers.largestProductInSeries);

/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a2 + b2 = c2
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.
 */
function pythagoreanTriplet() {
    //Your code goes here
}

console.time("pythagoreanTriplet");
answers.pythagoreanTriplet = pythagoreanTriplet();
console.timeEnd("pythagoreanTriplet");
console.log(answers.pythagoreanTriplet);

/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below two million.
 */

function sumOfPrimes() {
    //Your code goes here
}

console.time("sumOfPrimes");
answers.sumOfPrimes = sumOfPrimes();
console.timeEnd("sumOfPrimes");
console.log(answers.sumOfPrimes);

/**
 * In the 20×20 grid below, four numbers along a diagonal line have been marked in red.
 * 08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
 * 49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
 * 81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
 * 52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
 * 22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
 * 24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
 * 32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
 * 67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
 * 24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
 * 21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
 * 78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
 * 16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
 * 86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
 * 19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
 * 04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
 * 88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
 * 04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
 * 20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
 * 20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
 * 01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48
 * The product of these numbers is 26 × 63 × 78 × 14 = 1788696.
 * What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?
 */

function largestProductInAGrid() {
    //Your code goes here
}

console.time("largestProductInAGrid");
answers.largestProductInAGrid = largestProductInAGrid();
console.timeEnd("largestProductInAGrid");
console.log(answers.largestProductInAGrid);

/**
 * The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
 * 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 * Let us list the factors of the first seven triangle numbers:
 * 1: 1
 * 3: 1,3
 * 6: 1,2,3,6
 * 10: 1,2,5,10
 * 15: 1,3,5,15
 * 21: 1,3,7,21
 * 28: 1,2,4,7,14,28
 * We can see that 28 is the first triangle number to have over five divisors.
 * What is the value of the first triangle number to have over five hundred divisors?
 */

function highlyDivisibleTriangularNumber() {
    //Your code goes here
}

console.time("highlyDivisibleTriangularNumber");
answers.highlyDivisibleTriangularNumber = highlyDivisibleTriangularNumber();
console.timeEnd("highlyDivisibleTriangularNumber");
console.log(answers.highlyDivisibleTriangularNumber);

//Logging all answers at the end.
console.log(answers);
