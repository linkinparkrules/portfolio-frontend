import skills from "./skills.module.css"

const Skill1 = () => {
  return (
    <>
      <div className={skills.skill}>
        <i className="fa-brands fa-react"></i>
        <h4>FRONTEND</h4>
      </div>

      <div>
        <p className={skills.title}>Framework:</p>
        <p>ReactJS</p>
      </div>
      
      <div>
        <p className={skills.title}>Dev tools:</p>
        <p> VSCode
          <br /> Github
          <br /> HTML & CSS
          <br /> Vercel
        </p>
      </div>
    </>

  );
};

export default Skill1;