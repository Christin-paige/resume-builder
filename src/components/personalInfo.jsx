import { useState } from "react";
import "../styles/styles.css";

export default function PersonalInfo() {
  const [name, setName] = useState("Christin Martin");
  const [email, setEmail] = useState("email@email.com");
  const [phone, setPhone] = useState("123-456-7890");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function Button() {
    let show = document.getElementById("infoSection");
    if (show.style.display === "none") {
      show.style.display = "block";
    } else {
      show.style.display = "none";
    }
  }

  return (
    <>
      <div className="nameSection" id="nameSection">
        <div className="input" id="input">
          <h2>Personal Information</h2>
          <button onClick={Button}>+</button>

          <div className="infoSection" id="infoSection">
            <div className="labels hidden" id="infoLabels">
              <label htmlFor="nameInput">
                Name: {""}
                <input type="text" value={name} onChange={handleNameChange} />
              </label>
              <label>
                Email:{""}
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
              <label>
                Number:{""}
                <input type="text" value={phone} onChange={handlePhoneChange} />
              </label>
            </div>
          </div>
        </div>
        <div className="output">
          <h1>
            <u>{name}</u>
          </h1>
          <div className="emailPhone">
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </>
  );
}
