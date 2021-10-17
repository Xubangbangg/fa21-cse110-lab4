* q1: print 3, since var is a function scope variable, after the for loop, it will be added to 3. 
* q2: print 150, since the discountedprice will print the last element's discounted price in the prices list. 
* q3: print 150, since 150 is an integer, the round function will not change the price, so the final price will be same as the discounted price. 
* q4: This function will return the discounted array (50,100,150) (but line 19 don't have a var to get the return value.)
  
* q5: Error. Since let is a block scope variable, i will not be accessible outside of the for loop. 
* q6: Error. Same as q5, since let is a block scope variable, discountedprice will not be accessible outside of the for loop. 
* q7: print 150, This is because finalprice is declared in the function, line 4 is in the same scope as line 14, so finalprice is accessible. 
* q8: This function will return the discounted array (50,100,150) (but line 19 don't have a var to get the return value.)

* q9: Error. Since let is a block scope variable, i will not be accessible outside of the for loop. 
* q10: print 3. This is becasue length is a const variable, and prices array has 3 elements. 
* q11: Function will return the discounted array (50,100,150)
* q12A : student.name;
* q12B 
console.log(student["Grad Year"]);
console.log(student.greeting);
console.log(student["Favorite teacher"].name);
console.log(student.courseload[0]);


* q13: 
    1. '32' String concatenation
    1. 1  since string don't have the '-' operation, it becomes arithmatic 3 -2 = 1
    2. 3  since 3 is an integer, null is 0 in integer operation, therefor it's 3 + 0 = 3
    3. '3null' since this time '3' is a string, null becomes string 'null', the string concatenation -> '3null'
    4. 4  since true maps to 1 
    5. 0  since false and null both maps to 0 in this case
    6. '3undefined' undefined becomes a string since '3' is a string, the string concatenation is '3undefined'
    7. NaN  Since string don't have the '-' operation and undefined is NaN

* q14:
    1. true string '2' becomes number 2
    2. false ??? number 2 < 12
    3. true  number 2 == 2
    4. false triple equal will compare the type first
    5. false true is 1, 1 not equal to 2
    6. true Since Boolean(2) has a number, boolean(2) will return true, it will pass the triple equal check

* q15: 
  * * '==' means equality, if variable types are different, it should first change the type and then compare.
  * * '===' means identity, if the variable types are different, then they are definitely different. 


* q17: The result will be [2,4,6], in the for loop, the arr element will do the doSomething function, which will double the number, and push back to the newArr. 
* q18: 1 4 3 2