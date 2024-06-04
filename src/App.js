import logo from './logo.svg';
import './App.css';
import Ticket from "./components/ticket.js"
import Button from "./components/button.js"

const message = "Hello from React"
const User = { name: "George", surname: "Gal" };
const ticket = [
  { name: "Radu", concertName: "Guns&Roses", time: "12:20" },
  { name: "Tiberiu", concertName: "ACDC", time: "14:20" }]


function random() {
  return Math.random() * 100;
}


function App() {
  return (
    <div>
      {/* <h1>{message}</h1>
      <p>Sardukari</p>
      <h2>{User.name},{User.surname}</h2> */}
      {/* <Wellcome name="George" surname="Gal"></Wellcome>
      <Ticket></Ticket> */}
      {/* {random()} */}
      <Ticket name={ticket[0].name} concertName={ticket[0].concertName} time={ticket[0].time}></Ticket>
      {ticket.map(tick => {
        return <Ticket name={tick.name} concertName={tick.concertName} time={tick.time}></Ticket>

      })}

    </div >
  );
}


function Wellcome(props) {
  return (
    <h1>Hello,{props.name == "George" ? "CEofi" : "Adevar"},{props.surname}</h1>
  )
}

export default App;
