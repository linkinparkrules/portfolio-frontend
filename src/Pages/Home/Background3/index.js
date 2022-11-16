import bg3 from "./bg3.module.css"

const Background3 = () => {
  return (
    <div className={bg3.background3}>
      <h4>Academic Level</h4>
      <p className={bg3.school}>Hanoi University of Science and Technology (HUST)</p>
      <p>Specialization: Mechatronic (Cơ điện tử)</p>
      <p className={bg3.school}>Mindx Technology School</p>
      <p>Specialization: Web Fullstack Developer</p>
      <br />
      <h4>My Recent Work</h4>
      <p>Here are some projects I've worked on: </p>
      <a href="https://codic.vercel.app/" alt="codic" target="_blank" rel="noreferrer">
        Codic
      </a>
    </div>
  );
};

export default Background3;