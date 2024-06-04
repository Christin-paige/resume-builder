import { useState } from "react";

export default function Experience() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleCompanyChange(e) {
    setCompany(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function Button() {
    let show = document.getElementById("experienceSection");
    if (show.style.display === "none") {
      show.style.display = "block";
    } else {
      show.style.display = "none";
    }
  }

  return (
    <>
      <div className="nameSection">
        <div className="input">
          <h2>Experience</h2>
          <button onClick={Button}>+</button>
          <div className="experienceSection" id="experienceSection">
            <div className="labels">
              <label>
                Title: {""}
                <input type="text" value={title} onChange={handleTitleChange} />
              </label>
              <label>
                Company: {""}
                <input
                  type="text"
                  value={company}
                  onChange={handleCompanyChange}
                />
              </label>
              <label>
                Description: {""}
                <textarea
                  type="text"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="output">
          <h2>Professional Experience</h2>
          <h4>{title}</h4>
          <p>{company}</p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
