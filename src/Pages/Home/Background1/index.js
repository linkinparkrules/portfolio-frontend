import bg1 from "./bg1.module.css"
import avatar from "../../../Assets/avatar.png"
import devices from "../../../Assets/devices.svg"
import { useEffect } from "react";

const Background1 = () => {
  useEffect(() => {
    document.title = "Nghia Cao | Fullstack Developer"
  }, [])

  return (
    <div className={bg1.background1}>
      <h1 className={bg1.jobIntro}>Fullstack Developer</h1>
      <p>Hi, my name is Nghia Cao. Nice to meet you.</p>
      <img className={bg1.avatar} src={avatar} alt="avatar"/>
      <img className={bg1.devices} src={devices} alt="devices"/>
    </div>
  );
};

export default Background1;