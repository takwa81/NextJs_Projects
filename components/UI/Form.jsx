import React from "react";
import styles from "../../styles/Form.module.scss";

const Form = () => {
  const submitHandler = () => {
    e.preventDefault();
  };
  return (
    <form className={`${styles.form}`} onSubmit={submitHandler}>
      <div className={`${styles.form_group}`}>
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className={`${styles.form_group}`}>
        <input type="email" placeholder="Email Address" required />
      </div>
      <div className={`${styles.form_group}`}>
        <textarea type="text" rows={5} placeholder="Message" required />
      </div>

      <button className="primary_btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
