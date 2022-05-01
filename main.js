// the variable Kelvin is set to 293 and make sure it stays constant we use const

const kelvin = 0;


// to get Celsius we take constKelvin and subtract 273 to get what celsius would be

 const celsius = kelvin - 273;

 //use to calculate newtons
 let newton = celsius * (33/100);
 // rounds down the newton var
 newton = Math.floor(newton)

 //step 6 taking Celsius times the out come of 9 divided by 5 and then adding 32 to get Fahrenheit 
 
 let fahrenheit = celsius * (9 / 5) + 32 ;

 
// takes the fahrenheit var and rounds it down
 
fahrenheit = Math.floor(fahrenheit);



 console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
 
//step 11 -460

console.log(`The temperature is ${newton} degrees Newton.`);
