import bg_2 from "./assets/images/bg-2.svg";
import "./FeatureList.css";

export default function FeatureList() {
  return (
    <>
      <div className="feature-list-container">
        <ul className="features-list">
          <li className="features-list-item">
            <div className="feature-group-1">
              <div className="features-list-no">
                <span className="features-list-no-span">1</span>
              </div>
            </div>
            <div className="feature-group-2">
              <h3 className="features-list-header heading-s">
                Actionable insights
              </h3>
              <div className="features-list-content">
                Optimize your products, improve customer satisfaction and stay
                ahead of the competition with our product data analytics.
              </div>
            </div>
          </li>

          <li className="features-list-item">
            <div className="feature-group-1">
              <div className="features-list-no">
                <span className=" features-list-no-span">2</span>
              </div>
            </div>
            <div className="feature-group-2">
              <h3 className="features-list-header heading-s">
                Data-driven decision
              </h3>
              <div className="features-list-content">
                Make data-driven decisions with our product data analytics. Our
                AI-generated reports help you unlock insights hidden in your
                product data.
              </div>
            </div>
          </li>

          <li className="features-list-item">
            <div className="feature-group-1">
              <div className="features-list-no">
                <span className="features-list-no-span">3</span>
              </div>
            </div>
            <div className="feature-group-2">
              <h3 className="features-list-header heading-s">
                Always affordable
              </h3>
              <div className="features-list-content">
                Always affordable pricing that scales with your business. Get
                top-quality product data analytics services without hidden costs
                or unexpected fees.
              </div>
            </div>
          </li>
        </ul>
      </div>
      <img src={bg_2} />
    </>
  );
}
