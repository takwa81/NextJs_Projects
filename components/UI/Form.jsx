import React, { useState } from "react";
import styles from "../../styles/Form.module.scss";
import Button from "./Button";

const Form = () => {
  const [name , setName] = useState('') ;
  const [email , setEmail] = useState('');
  const [message , setMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("thanks " + name + " youre Email" + email + "Message" + message);
    alert("thanks " + name + " youre Email" + email + "Message" + message);
  };
  return (
    <form className={`${styles.form}`}>
      <div className={`${styles.form_group}`}>
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className={`${styles.form_group}`}>
        <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className={`${styles.form_group}`}>
        <textarea type="text" rows={5} placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} required />
      </div>
      <Button text="Send" style="primary_btn" data={(e) => submitHandler(e)}/>
    </form>
  );
};

export default Form;
