import { Link } from "react-router-dom";
import "./CallToAction.css";

const CallToAction = ({ scrollToTop }) => {
  return (
    <section className="cta">
      <h2 className="section-heading">
        Interested in doing a project together?
      </h2>
      <Link to="contact" onClick={scrollToTop} className="btn-secondary">
        Contact Me
      </Link>
    </section>
  );
};

export default CallToAction;