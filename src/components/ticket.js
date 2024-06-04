import "./ticket.css";
import Button from "./button";

function Ticket(props) {

    return (<div className="ticket">

        <p>Hello, {props.name}</p>
        <p>Your ticket for concert {props.concertName}</p>
        <p>Time of entry {props.time}</p>
        <Button action="delete" class="red" text={`Do you want to delete your ticket for:${props.concertName}`} label="Delete" ></Button>
        <Button action="save" class="verde" text={`save your ticket for:${props.concertName}`} label="Save" ></Button>
        <Button action="favorite " class="yellow" text={`Favorite this your ticket for:${props.concertName}`} label="Favorite" ></Button>


    </div>
    )

}
export default Ticket;