import "./FirstSection.css";

function FirstSection() {
  return (
    <div className="first-section">
      <img src="/squares.svg" alt="" className="squares" />
      <div className="heading-wrapper">
        <h3 className="heading-message-1">Success stories</h3>
        <h1 className="heading-message-2">
          Every success journey <br /> we&apos;ve encountered.
        </h1>
      </div>
      <div className="details-wrapper">
        <div className="details-left-wrapper">
          <img src="/women.svg" alt="" className="women-img" />

          <div className="achievement-1">
            <img src="/sparkle.svg" alt="" className="sparkle" />
            <h1 className="achievement-1-number">40%</h1>
            <h3 className="achievement-1-text">
              Achieved reduction in
              <br /> project execution time
              <br /> by optimising team
              <br /> availability
            </h3>
          </div>
          <div className="staff-deployment">
            <div className="rocket-img-container">
              <img src="/rocket.svg" alt="" className="" />
            </div>
            <div className="">
              <h1 className="">10 DAYS</h1>
              <h3 className="">Staff Deployment</h3>
            </div>
          </div>
          <div className="achievement-2">
            <h1 className="achievement-2-number">
              $0.5 <span className="achievement-2-number-text">MILLION</span>
            </h1>
            <h3 className="achievement-2-text">
              Reduced client expenses
              <br /> by saving on hiring and
              <br /> employee costs.
            </h3>
          </div>
        </div>
        <div className="details-right-wrapper">
          <h1 className="details-text">
            Enhance fortune 50
            <br /> company’s insights
            <br /> teams research
            <br /> capabilities
          </h1>
          <div className="carousel">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
          <button className="explore-btn">
            Explore More
            <img src="/arrow.svg" alt="" className="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
