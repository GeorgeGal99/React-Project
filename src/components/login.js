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


// export default Register;


// MARINA

import { useState } from "react";
import "./input.css";

function Input() {
    let regex = /^[a-zA-Z]+$/;

    const [usernameValidationMessage, setUsernameValidationMessage] =
        useState("");
    const [emailValidationMessage, setEmailValidationMessage] = useState("");
    const [passwordValidationMessage, setPasswordValidationMessage] =
        useState("");

    const [showValidationUsername, setShowValidationMessageUsername] =
        useState(true);
    const [showValidationEmail, setShowValidationMessageEmail] = useState(true);
    const [showValidationPassword, setShowValidationMessagePassword] =
        useState(true);

    function ValidateUsername(event) {
        let inputData = event.target.value;
        if (inputData === "") {
            setUsernameValidationMessage("Can't be blank!");
            setShowValidationMessageUsername(true);
        } else if (!regex.test(inputData)) {
            setUsernameValidationMessage("Can't contain numbers!");
            setShowValidationMessageUsername(true);
        } else {
            setShowValidationMessageUsername(false);
        }
    }

    function ValidateEmail(event) {
        let inputData = event.target.value;
        if (inputData === "") {
            setEmailValidationMessage("Can't be blank!");
            setShowValidationMessageEmail(true);
        } else if (!inputData.includes("@")) {
            setEmailValidationMessage("Wrong email format");
            setShowValidationMessageEmail(true);
        } else {
            setShowValidationMessageEmail(false);
        }
    }

    function ValidatePassword(event) {
        let inputData = event.target.value;
        if (inputData === "") {
            setPasswordValidationMessage("Can't be blank!");
            setShowValidationMessagePassword(true);
        } else {
            setShowValidationMessagePassword(false);
        }
    }

    function Submit() {
        console.log("Te rog mergi :(");
    }
    return (
        <>
            <h1>Login</h1>
            <div>
                <p>Username</p>
                <input type="text" onChange={ValidateUsername} />
                <p>{showValidationUsername ? usernameValidationMessage : ""}</p>
            </div>
            <div>
                <p>Email</p>
                <input type="text" onChange={ValidateEmail} />
                <p>{showValidationEmail ? emailValidationMessage : ""}</p>
            </div>
            <div>
                <p>Password</p>
                <input type="text" onChange={ValidatePassword} />
                <p>{showValidationPassword ? passwordValidationMessage : ""}</p>
            </div>
            <div>
                <button disabled={!showValidationPassword && !showValidationEmail && !showValidationUsername ? false : true} onClick={Submit}>
                    Submit
                </button>
                {/* <button className={!showValidationPassword && !showValidationEmail && !showValidationUsername ? "not-disabled" : "disabled"}onClick={Submit}>
          {!showValidationPassword ? "not-disabled" : "disabled"}
        </button>
        <p>{showValidationPassword ? "true" : "false"}</p> */}
            </div>
        </>
    );
}

export default Input;
