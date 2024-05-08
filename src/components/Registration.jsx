import { useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  const [disabled, setDisabled] = useState(true);

  const [error, setError] = useState();

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    if (formValues.email.trim() !== "" && formValues.name.trim() !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  function handleSumbit(event) {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      setError(true);
    } else {
      setError(false);
      navigate("/success");
    }
  }

  return (
    <section className="registration">
      <div className="header ">
        <img src="/logo.svg" alt="" className="" />
        <Link to="/">
          <img src="/close.svg" alt="" className="close" />
        </Link>
      </div>
      <div className="form-wrapper ">
        <div className="form-heading-wrapper">
          <h1 className="form-heading ">Registration Form</h1>
          <div className="form-text ">
            <h1 className="">Start your success </h1>
            <h1 className="">Journey here!</h1>
          </div>
        </div>
        <form className="form " onSubmit={handleSumbit}>
          <div className="input-wrapper ">
            <input
              className="form-input "
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <input
              className="form-input "
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {error && (
              <span className="validation-error">
                <img src="/error.svg" alt="" /> {"  "} Enter a valid email
                address
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={disabled}
            className={`${disabled ? "disabled" : ""} submit-btn`}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Registration;
