/* gives us the ability to check more than 1 condition concurrently
&& AND (both conditions must be true)
 || OR (either condition can be true)*/

 // exempel på && opratören
 /*
 let temp= 30;

 if(temp >10 && temp < 40){
    console.log("the weather is good!");

 }
 else{
    console.log("the weather is bad!");
 }
 */
// exempel på || operatören
 /*
 let temp= 15;

 if(temp <=0 || temp >=30){
    console.log("the weather is bad");

 }
 else{
    console.log("the weather is good");
 } */

 let temp= 29;
 let sunny = true;

 if(temp >0 && temp < 30 && sunny ){
    console.log("the weather is good!");

 }
 else{
    console.log("the weather is bad!");
 }
