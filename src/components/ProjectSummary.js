import { Link } from "react-router-dom";
import "./ProjectSummary.css";

const ProjectSummary = ({
  projectTitle,
  projectDescription,
  layoutClass,
  projectImgMobile,
  projectImgTablet,
  projectImgDesktop,
  projectPathname,
  scrollToTop,
}) => {
  return (
    <section className={`project ${layoutClass}`}>
      <picture className="project-summary-img-wrapper">
        <source media="(max-width: 888px)" srcSet={projectImgMobile} />
        <source
          media="(max-width: 1297px) and (min-width: 889px)"
          srcSet={projectImgTablet}
        />
        <source media="(min-width: 1298px)" srcSet={projectImgDesktop} />
        <img src={projectImgMobile} alt="" className="project-summary-img" />
      </picture>
      <div className="text-wrapper">
        <h2 className="section-heading">{projectTitle}</h2>
        <p className="paragraph">{projectDescription}</p>
        <Link
          to={projectPathname}
          onClick={scrollToTop}
          className="btn-secondary"
        >
          View Project
        </Link>
      </div>
    </section>
  );
};

export default ProjectSummary;
