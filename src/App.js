import logo from './logo.svg';
import './App.css';
import Ticket from "./components/ticket.js"
import Button from "./components/button.js"
import Input from './components/input.js';
import Register from './components/login.js';



import { useState } from 'react';


const message = "Hello from React"
const User = { name: "George", surname: "Gal" };
const tickets = [
  { name: "Radu", concertName: "Guns&Roses", time: "12:20" },
  { name: "Tiberiu", concertName: "ACDC", time: "14:20" },
  { name: "Florin", concertName: "ACDC", time: "14:20" }]


// function random() {
//   return Math.random() * 100;
// }


function App() {
  return (
    <div>
      {/* <h1>{message}</h1>
      <p>Sardukari</p>
      <h2>{User.name},{User.surname}</h2> */}
      {/* <Wellcome name="George" surname="Gal"></Wellcome>
      <Ticket></Ticket> */}
      {/* {random()} */}

      {/* <Ticket name={tickets[0].name} concertName={tickets[0].concertName} time={tickets[0].time}></Ticket> */}

      {/* {
        tickets.map(tick => {
          return <Ticket name={tick.name} concertName={tick.concertName} time={tick.time}></Ticket>
        })
      } */}
      {/* <Input></Input> */}
      <Register></Register>
    </div >
  );
}


function Wellcome(props) {
  return (
    <h1>Hello,{props.name === "George" ? "CEofi" : "Adevar"},{props.surname}</h1>
  )
}









export default App;
