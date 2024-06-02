import { useState } from 'react'
import '../styles/styles.css';

export default function Education(){

    const [school, setSchool] = useState('');
    const [program, setProgram] = useState('');
    const [degree, setDegree] = useState('');

    function handleSchoolChange(e){
        setSchool(e.target.value)
    }
    function handleProgramChange(e){
        setProgram(e.target.value)
    }
    function handleDegreeChange(e){
        setDegree(e.target.value)
    }
    

return(
    <>
    <div className="schoolSection">
    <div className="input">
    <h2>Education</h2>
    <div className="labels">
    <label>College:{''}
    <input
    type="text"
    value={school}
    onChange={handleSchoolChange} />
    </label>
    <label>Program:{''}
    <input
    type="text"
    value={program}
    onChange={handleProgramChange} />
    </label>
    <label>Degree:{''}
    <input
    type="text"
    value={degree}
    onChange={handleDegreeChange} />
    </label>
    
    </div>
    </div>

<div className="output">
    <h2>Education</h2>
    <h4>{school}</h4>
    <p>{program}</p>
    <p>{degree}</p>
    </div>
    </div>
    </>
)
    
}