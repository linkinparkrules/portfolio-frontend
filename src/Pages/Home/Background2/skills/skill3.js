import skills from "./skills.module.css"

const Skill3 = () => {
  return (
    <>
      <div className={skills.skill}>
        <i className="fa-solid fa-language"></i>
        <h4>LANGUAGE</h4>
      </div>

      <div>
        <p className={skills.title}>Language i use:</p>
        <p>English, Vietnamese</p>
      </div>

      <div>
        <p className={skills.title}>Experience:</p>
        <p>Ielts 7.0</p>
      </div>
    </>

  );
};

export default Skill3;