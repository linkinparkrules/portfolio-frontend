import bg3 from "./bg3.module.css";
import codic from "../../../Assets/codic.png"

const Project = () => {
  return (
    <div className={bg3.project}>
      <h4>MY RECENT WORK</h4>
      <p>Here is one of the projects I've worked on: 
        <a href="https://codic.vercel.app/" alt="codic" target="_blank" rel="noreferrer">
          View my website
        </a>
      </p>
      <div className={bg3.projectList} >
        <a href="https://codic.vercel.app/" alt="codic" target="_blank" rel="noreferrer">
          <img className={bg3.projectImg} src={codic} alt="codic" />
        </a>

      </div>

    </div>
  )
};

export default Project;