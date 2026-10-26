//Task#2 Anastasiia Althsuler and Evgeny Altshuler

//Iterates through numbers from 2 to 236.
for (let num = 2; num < 237; num++) {
  // Assumes the current number is prime until a divisor is found.
  let isPrime = true;

  //Checks divisors from 2 through the square root of the current number.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    //Checks whether the current number is divisible by the candidate divisor.
    if (num % i === 0) {
      // Marks the number as composite.
      isPrime = false;
    }
  }

  //Checks whether the number is still considered prime.
  if (isPrime) {
    // Prints the prime number to the console.
    console.log(num);
  }
}
