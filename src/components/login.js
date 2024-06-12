import { useState } from "react";

function Register() {
    const [email, setEmail] = useState('default');
    const [password, setPassword] = useState('default');
    const [name, setName] = useState('default');
    const [surname, setSurname] = useState('default');

    function Email(event) {
        if (event.target.value.length < 2) {
            setEmail('text');
        }
        else {
            setEmail("");
        }
    }

    function Name(event) {
        if (event.target.value.length < 4) {
            setName('text');
        }
        else {
            setName("");
        }

    }
    function Surname(event) {
        if (event.target.value.length < 5) {
            setSurname('text');
        }
        else {
            setSurname("");
        }
    }

    function Password(event) {
        if (event.target.value.length < 5) {
            setPassword('text');
        }
        else {
            setPassword("");
        }
    }

    function Button() {

        if (!email && !password && !name && !surname) {
            alert("MERGE");
        }
        else {
            alert("nu merge");
        }


    }





    return (
        <div className='MainContainer'>
            <div>
                <h3>Email</h3>
                <input type="text" onChange={Email} />
                <p>{email == "default" ? "" : email}</p>
            </div>

            <div>
                <h3>Password</h3>
                <input type="text" onChange={Password} />
                <p>{password}</p>
            </div>

            <div>
                <h3>Name</h3>
                <input type="text" onChange={Name} />
                <p>{name}</p>
            </div>

            <div>
                <h3>Surname</h3>
                <input type="text" onChange={Surname} />
                <p>{surname}</p>
            </div>


            <button onClick={Button}>Click me</button>




        </div>



    )

}


export default Register;
