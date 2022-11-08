document.getElementById("myButton").onclick=function(){

    const myCheckBox = document.getElementById("myCheckBox")
    const visaBTn = document.getElementById("visaBtn");
    const mastercardBtn= document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheckBox.checked){

    console.log("you are subscribed!");
}
else{
    console.log("nähe tråkigt");

}
if(visaBTn.checked){
    console.log("ur paying with visa!")
}
else if(mastercardBtn.checked){
    console.log("ur paying with mastercard!")
}
 else if(paypalBtn.checked){
    console.log("ur paying with paypal")
}
else{
    console.log("u must select a payment type!")
}
}