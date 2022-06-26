import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./ProjectDetailTemplate.css";
import CallToAction from "./CallToAction";
import leftArrow from "../images/icons/arrow-left.svg";
import rightArrow from "../images/icons/arrow-right.svg";

const ProjectDetail = ({
  projectTitle,
  projectDescription,
  techStack,
  projectLink,
  previousProject,
  nextProject,
  previousLink,
  nextLink,
  projectHeroMobile,
  projectHeroTablet,
  projectHeroDesktop,
  staticDesktopMobile,
  staticDesktopTablet,
  staticDesktopDesktop,
  staticMobileMobile,
  staticMobileTablet,
  staticMobileDesktop,
}) => {
  const scrollToTop = useOutletContext();

  return (
    <main className="project-detail container">
      <Helmet>
        <title>Frontend Mentor | {projectTitle} Project</title>
      </Helmet>
      <picture className="hero-img-wrapper">
        <source media="(max-width: 888px)" srcSet={projectHeroMobile} />
        <source
          media="(max-width: 1297px) and (min-width: 889px)"
          srcSet={projectHeroTablet}
        />
        <source media="(min-width: 1298px)" srcSet={projectHeroDesktop} />
        <img src={projectHeroMobile} alt="" className="project-hero-img" />
      </picture>
      <section className="overview">
        <h1 className="section-heading">{projectTitle}</h1>
        <p className="paragraph">{projectDescription}</p>
        <span className="stack-details">
          Interaction Design / Front End Development
        </span>
        <span className="stack-details">{techStack}</span>
        <a
          href={projectLink}
          className="btn-secondary"
          target="_blank"
          rel="noreferrer"
        >
          Visit Website
        </a>
      </section>
      <section className="project-background">
        <h2 className="sub-heading">Project Background</h2>
        <p className="paragraph">
          This project was a front-end challenge from Frontend Mentor. It’s a
          platform that enables you to practice building websites to a design
          and project brief. Each challenge includes mobile and desktop designs
          to show how the website should look at different screen sizes.
          Creating these projects has helped me refine my workflow and solve
          real-world coding problems. I’ve learned something new with each
          project, helping me to improve and adapt my style.
        </p>
        <h2 className="sub-heading">Static Previews</h2>
        <picture className="static-img-wrapper">
          <source media="(max-width: 888px)" srcSet={staticDesktopMobile} />
          <source
            media="(max-width: 1297px) and (min-width: 889px)"
            srcSet={staticDesktopTablet}
          />
          <source media="(min-width: 1298px)" srcSet={staticDesktopDesktop} />
          <img src={staticDesktopMobile} alt="" className="static-img" />
        </picture>
        <picture className="static-img-wrapper">
          <source media="(max-width: 888px)" srcSet={staticMobileMobile} />
          <source
            media="(max-width: 1298px) and (min-width: 889px)"
            srcSet={staticMobileTablet}
          />
          <source media="(min-width: 1298px)" srcSet={staticMobileDesktop} />
          <img src={staticMobileMobile} alt="" className="static-img" />
        </picture>
      </section>
      <div className="links">
        <Link
          to={previousLink}
          className="link previous-link"
          onClick={scrollToTop}
        >
          <img src={leftArrow} alt="" />
          <div className="link-text-wrapper">
            <span className="link-title">{previousProject}</span>
            <span className="link-span">Previous Project</span>
          </div>
        </Link>
        <Link to={nextLink} className="link next-link" onClick={scrollToTop}>
          <img src={rightArrow} alt="" />
          <div className="link-text-wrapper">
            <span className="link-title">{nextProject}</span>
            <span className="link-span">Next Project</span>
          </div>
        </Link>
      </div>
      <CallToAction />
    </main>
  );
};

export default ProjectDetail;
