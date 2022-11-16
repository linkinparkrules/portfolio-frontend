import skills from "./skills.module.css"

const Skill2 = () => {
  return (
    <>
      <div className={`${skills.skill} ${skills.middleColumn}`}>
        <i className="fa-brands fa-node-js"></i>
        <h4>BACKEND</h4>
      </div>

      <div className={skills.middleColumn}>
        <p className={skills.title}>Language i use:</p>
        <p>JavaScript, Express, NodeJs, Axios, MongoDb</p>
      </div>
      
      <div className={skills.middleColumn}>
        <p className={skills.title}>Dev tools:</p>
        <p> VsCode
          <br /> Github
          <br /> Express
          <br /> MongoDb
          <br /> Cors
          <br /> JWT
          <br /> Heroku
        </p>
      </div>
    </>

  );
};

export default Skill2;