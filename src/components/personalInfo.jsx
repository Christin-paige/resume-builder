import {useState} from 'react';
import '../styles/styles.css';


export default function PersonalInfo(){

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');



function handleNameChange(e){
    setName(e.target.value)
}
function handleEmailChange(e){
    setEmail(e.target.value)
}
function handlePhoneChange(e){
    setPhone(e.target.value)
}

function toggleDetails(){
const hideButton = document.getElementById = ("infoLabels")
const showDetails = document.getElementById = ("hideButton")

hideButton.classList.toggle('expanded');
showDetails.classList.toggle('hidden');
}


return (
    <>
    <div className="nameSection" id="nameSection">
    <div className="input" id="input">
    <button className="hideButton" id="hideButton" onClick={toggleDetails}>+</button>
    <div className="infoSection" id="infoSection">
    <h2>Personal Information</h2> 
   
    <div className="labels hidden" id="infoLabels">
        
        <label htmlFor ="nameInput">
           Name: {''}
            <input
            type="text"
            value={name}
            onChange={handleNameChange}
            />
           
        </label>
        <label>
           Email:{''}
            <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            />
        </label>
        <label>
           Number:{''}
            <input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            />
        </label>
       
        </div>
        </div>
        </div>
        <div className="output">
        <h1><u>{name}</u></h1>
        <div className="emailPhone">
        <p>{email}</p>
        <p>{phone}</p>
        </div>
        </div>
        </div>
       

       </>
)
    
}