import contact from "./contact.module.css";
import { useEffect, useState } from "react";
import avatar from "../../Assets/avatar.png";
import httpContact from "../../Axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Nghia Cao"
  }, [])

  const navigate = useNavigate();

  const [text, setText] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [textError, setTextError] = useState({
    name: "",
    email: "",
    message: "",
    error: ""
  })

  function handleChange(event) {
    setText((prev) => {
      return ({
        ...prev, [event.target.name]: event.target.value
      })
    })
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (text.name.replace(/\s+/g, '') === "") {
      setTextError({
        name: "Please type something!",
        email: "",
        message: "",
        error: ""
      });
      return;
    } else if (text.email.replace(/\s+/g, '') === "") {
      setTextError({
        name: "",
        email: "Please type something!",
        message: "",
        error: ""
      });
      return;
    } else if (text.message.replace(/\s+/g, '') === "") {
      setTextError({
        name: "",
        email: "",
        message: "Please type something!",
        error: ""
      });
      return;
    }
    try {
      setTextError({
        name: "",
        email: "",
        message: "",
        error: ""
      });
      httpContact.post('/contact', text);
      alert("Thank you! I will reply back as soon as possible!")
      navigate('/');
    } catch (err) {
      setTextError((prev) => {
        return ({ ...prev, [text.error]: "Something went wrong!" })
      });
    };
  };

  return (
    <div className={contact.contact}>
      <img className={contact.avatar} src={avatar} alt="avatar" />

      <h1>
        Thanks for taking the time to reach out. How can I help you today?
      </h1>

      <form className={contact.form} onSubmit={handleSubmit}>
        <div className={contact.errorMessage}>{textError.error}</div>
        <div className={contact.info}>
          <InfoChild
            label="Name"
            type="text"
            name="name"
            onChange={handleChange}
            value={text.name}
            textError={textError.name}
          />

          <InfoChild
            label="Email"
            type="email"
            name="email"
            onChange={handleChange}
            value={text.email}
            textError={textError.email}
          />

        </div>
        <div className={contact.message}>
          <label className={contact.label}>Message</label>
          <textarea
            className={contact.messageInfo}
            type="text"
            name="message"
            onChange={handleChange}
            value={text.message}
          />
          <div className={contact.errorMessage}>{textError.message}</div>
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
        value={props.value}
      />
      <div className={contact.errorMessage}>{props.textError}</div>
    </div>
  );
};

export default Contact;