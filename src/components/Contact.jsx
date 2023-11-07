import "./Contact.css";
import { Error } from "../assets";
import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleEmail = () => {
    if (!emailRegex.test(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div className="ContactBox">
      <p className="ContactBox-Txt">35,000+ already joined</p>
      <h1 className="ContactBox-Title">
        Stay up-to-date with what we&apos;re doing
      </h1>
      <div className="ContactBox-FormBox">
        <label
          htmlFor="email"
          className={
            error
              ? "ContactBox-FormBox-Label LabelError"
              : "ContactBox-FormBox-Label"
          }
        >
          <input
            type="email"
            name="email"
            required
            id="email"
            placeholder="Enter your email address"
            className="ContactBox-FormBox-Input"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <img src={Error} alt="" className="img-error" />}

          {error && (
            <p className="error">Whoops, make sure it&apos;s an email</p>
          )}
        </label>
        <button className=" ContactBox-FormBox-Btn" onClick={handleEmail}>
          contact us
        </button>
      </div>
    </div>
  );
}
export default Contact;
