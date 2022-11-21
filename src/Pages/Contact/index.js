import contact from "./contact.module.css";
import { useEffect, useState } from "react";
import avatar from "../../Assets/avatar.png"

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Nghia Cao"
  }, [])

  const [text, setText] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(event) {
    setText((prev) => {
      return ({
        ...prev, [event.target.name]: event.target.value
      })
    })
  }
  console.log(text);


  function handleSubmit(event) {
    event.preventDefault();
  };

  return (
    <div className={contact.contact}>
      <img className={contact.avatar} src={avatar} alt="avatar" />

      <h1>
        Thanks for taking the time to reach out. How can I help you today?
      </h1>

      <form className={contact.form} onSubmit={handleSubmit}>
        <div className={contact.info}>
          <InfoChild label="Name" type="text" name="name" onChange={handleChange}/>
          <InfoChild label="Email" type="email" name="email" onChange={handleChange}/>
        </div>
        <div className={contact.message}>
          <label className={contact.label}>Message</label>
          <textarea
            className={contact.messageInfo}
            type="text"
            name="message"
            onChange={handleChange}
          />
        </div>

        <div className={contact.button}>
          <button className={contact.submitButton} type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

const InfoChild = (props) => {
  return (
    <div className={contact.infoChild}>
      <label className={contact.label}>{props.label}</label>
      <input
        className={contact.inputInfo}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Contact;