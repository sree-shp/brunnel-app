import FirstSection from "./FirstSection";
import "./Home.css";
import { Link } from "react-router-dom";
import SecondSection from "./SecondSection";

function Home() {
  return (
    <section className="home">
      <div className="home-header">
        <img src="/logo.svg" alt="" className="logo-img" />
        <div className="btn-wrapper">
          <Link to="/registration">
            <button className="get-projects-btn">Get Projects</button>
          </Link>
          <button className="onboard-talent-btn">Onboard Talent</button>
        </div>
      </div>

      <FirstSection />

      <SecondSection />

      <div className="footer">
        <span className="copyright-wrapper">
          <img src="/copyright.svg" alt="" className="" /> Talup 2023. All
          rights reserved
        </span>
        <div className="footer-links">
          <span className="">Terms & Conditions</span>
          <span className="">Privacy Policy</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
