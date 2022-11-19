import bg3 from "./bg3.module.css"

const Education = () => {
  return (
    <div className={bg3.education}>
      <h4>EDUCATION <i className="fa-solid fa-book"></i> </h4>
      <div className={bg3.educationLevel} >
        <p className={bg3.school}>
          Hanoi University of Science and Technology (HUST) <i className="fa-solid fa-building-columns"></i>
        </p>
        <p className={bg3.specialization}>
          Specialization: Mechatronic (Cơ điện tử)
          </p>
      </div>

      <div className={bg3.educationLevel} >
        <p className={bg3.school}>
          Mindx Technology School <i className="fa-solid fa-school"></i>
        </p>
        <p className={bg3.specialization}>
          Specialization: Web Fullstack Developer
          </p>
      </div>
    </div>
  )
}

export default Education;