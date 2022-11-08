// switch = statement that examines a value
//          for a match against many case clauses.
//          more efficient that many "else if" statements


// exempel nr1
/*let grade= "F";

if(grade == "A"){
    console.log("you did great!");

}
else if(grade=="B"){
    console.log("you did good!");
}
else if(grade== "C"){
    console.log("you did okey!");
}
else if(grade=="D"){
    console.log("you passed... barely!");
}
else if(grade=="F"){
    console.log("you failed hoe!");
}

else{
    console.log(grade, "is not a letter grade!");
} */

// exempel på switch i bokstav betyg
/*
let grade="F"

switch(grade){
    case "A":
        console.log("you did great");
        break;
        case"B":
        console.log("you did good!");
        break;
        case "C":
        console.log("you did okey");
        break;
        case"D":
        console.log("you passed.");
        break;
        case"F":
        console.log("you failed.");
        break;
        default:
            console.log(grade, "is not a letter grade!");

}*/

// switch exempel på nummer betyg och hur du omvandlar dem till bokstavligt betyg.
let grade= 59;

switch(true){
    case grade >=90:
        console.log("you did great");
        break;
    case grade >=80:
        console.log("you did good!");
        break;
    case grade >=70:
        console.log("you did okey");
        break;
    case grade >=60:
        console.log("you passed.");
        break;
    case grade < 60:
        console.log("you failed.");
        break;
        default:
            con
            sole.log(grade, "is not a letter grade!");

}