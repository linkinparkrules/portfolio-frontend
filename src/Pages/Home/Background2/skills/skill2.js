import skills from "./skills.module.css"

const Skill2 = () => {
  return (
    <>
      <div className={`${skills.skill} ${skills.middleColumn}`}>
        <i className="fa-brands fa-node-js"></i>
        <h4>BACKEND</h4>
      </div>

      <div className={skills.middleColumn}>
        <p className={skills.title}>Framework:</p>
        <p>ExpressJS, NodeJS</p>
      </div>

      <div className={skills.middleColumn}>
        <p className={skills.title}>Dev tools and <b>Database</b>:</p>
        <p className={skills.lists} >
          VSCode
          <br /> Github
          <br /> Postman
          <br /> Heroku
          <br /> <b>MongoDB</b>
        </p>
      </div>
    </>

  );
};

export default Skill2;