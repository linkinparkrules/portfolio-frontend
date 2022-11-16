import skills from "./skills.module.css"

const Skill1 = () => {
  return (
    <>
      <div className={skills.skill}>
        <i className="fa-brands fa-react"></i>
        <h4>FRONTEND</h4>
      </div>

      <div>
        <p className={skills.title}>Language i use:</p>
        <p>HTML, CSS, Git, React</p>
      </div>
      
      <div>
        <p className={skills.title}>Dev tools:</p>
        <p> VsCode
          <br /> Github
          <br /> React
          <br /> React Router Dom
          <br /> Axios
          <br /> Vercel
        </p>
      </div>
    </>

  );
};

export default Skill1;