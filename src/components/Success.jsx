import { useEffect } from "react";
import "./Success.css";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);
  return (
    <section className="success">
      <div className="header ">
        <img src="/logo.svg" alt="" className="" />
      </div>

      <div className="success-wrapper">
        <img src="/success.svg" alt="" className="success-img" />

        <div className="messages-wrapper">
          <h3 className="success-message">Success Submitted</h3>
          <h1 className="congrats-message">Congratulations</h1>
          <p className="additional-message">
            Your request has been successfully submitted to us. We
            <br /> will validate your information and reach out to your
            <br /> shortly with updates
          </p>
        </div>
      </div>
      <div className="redirect">
        Redirecting you to Homepage in <span className="timer">5 Seconds</span>{" "}
      </div>
    </section>
  );
}

export default Success;
