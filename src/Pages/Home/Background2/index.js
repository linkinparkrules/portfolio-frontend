import bg2 from "./bg2.module.css"
import Skill1 from "./skills/skill1.js";
import Skill2 from "./skills/skill2.js";
import Skill3 from "./skills/skill3.js";

const Background2 = () => {
  return (
    <>
      <div className={bg2.background2}>
        <div className={bg2.intro}>
          As someone who is organized and good with logic, i want to be a part of the main workforce
          for the company, to give optimal solutions for the customers. Also, i want to increase my capacity
          and ability through the company's professional work environment.
        </div>
      </div>
      <div className={bg2.skillsBoard}>
        <Skill1 />
        <Skill2 />
        <Skill3 />
      </div>
    </>

  );
};

export default Background2;