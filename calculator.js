/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = function (){
  var memory = 0;
  var total = 0;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   function load (x){
    inspect(newTotal);
    total = x;
    return total;
   }

  /**
   * Return the value of `total`
   * @return { Number }
   */

   function getTotal (){
    return total;
   }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function add(num){
    inspect(num);
    total += num;
    return total;
   }


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function subtract(num){
    inspect(num);
    total -= num;
    return total;
   }


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function multiply(num){
    inspect(num);
    total *= num;
    return total;
   }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function divide(num){
    inspect(num);
    total /= num;
    return total;

   }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

  function inspect(num1){
    if(typeof num1 !== "number"){
      throw new Error("Hey, I'mma give you Lickins!");
    }
  }


};
