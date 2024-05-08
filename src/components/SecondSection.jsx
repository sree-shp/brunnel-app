import "./SecondSection.css";

function SecondSection() {
  return (
    <div className="second-section">
      <div className="questions-left">
        <div className="question-heading-wrapper">
          <h3 className="question-sub-heading">What&apos;s on your mind</h3>
          <h1 className="question-heading">Ask Questions</h1>
        </div>
        <img src="/union.svg" alt="" className="union-img" />
      </div>
      <div className="questions-right">
        <div className="question-wrapper">
          <div className="">
            <p className="question-text">Do you offer freelancers?</p>
            <img src="/plus.svg" alt="" className="plus-img" />
          </div>
          <hr />
        </div>
        <div className="question-wrapper">
          <div className="">
            <p className="question-text">
              What&apos;s the guarantee that I will be satisfied
              <br />
              with the hired talent?
            </p>
            <img src="/plus.svg" alt="" className="plus-img" />
          </div>
          <hr />
        </div>
        <div className="question-wrapper">
          <div className="">
            <p className="question-text">
              Can I hire multiple talents at once?
            </p>
            <img src="/minus.svg" alt="" className="plus-img" />
          </div>
          <p className="question-answer">
            If unhappy with a project, communicate with the freelancer, allow
            for revisions, and refer to the agreement. Escalate to platform
            support if needed, considering mediation. Review policies, seek
            collaborative solutions for resolution.
          </p>
        </div>
        <div className="question-wrapper">
          <div className="">
            <p className="question-text">
              Why should I not go to an agency directly?
            </p>
            <img src="/plus.svg" alt="" className="plus-img" />
          </div>
          <hr />
        </div>
        <div className="question-wrapper">
          <div className="">
            <p className="question-text">
              Who can help me pick a right skillset
              <br />
              and duration for me?
            </p>
            <img src="/plus.svg" alt="" className="plus-img" />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
