import React from "react";
const data = new Date();
const currentTime=data.getHours();
let greting="Kunni qaysi payti🤔";
let customStyle={
  color:"kunni payti o'zgargach bror rang berilsin"
}
if(currentTime<12){
greting="Good morning";
customStyle.color="red"
} else if(currentTime<18){
  greting="Good afternoon";
  customStyle.color="green"
  } else{
    greting="Good night";
    customStyle.color="blue"
  }
 const Heading =()=>{
return <h2 className="heading" style={customStyle}>{greting}</h2>
 }
 export default Heading;