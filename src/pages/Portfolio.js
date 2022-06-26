import { useOutletContext } from "react-router-dom";
import bookmarkImgMobile from "../images/portfolio/mobile/image-portfolio-bookmark@2x.jpg";
import bookmarkImgTablet from "../images/portfolio/tablet/image-portfolio-bookmark@2x.jpg";
import bookmarkImgDesktop from "../images/portfolio/desktop/image-portfolio-bookmark@2x.jpg";
import fyloImgMobile from "../images/portfolio/mobile/image-portfolio-fylo@2x.jpg";
import fyloImgTablet from "../images/portfolio/tablet/image-portfolio-fylo@2x.jpg";
import fyloImgDesktop from "../images/portfolio/desktop/image-portfolio-fylo@2x.jpg";
import insureImgMobile from "../images/portfolio/mobile/image-portfolio-insure@2x.jpg";
import insureImgTablet from "../images/portfolio/tablet/image-portfolio-insure@2x.jpg";
import manageImgMobile from "../images/portfolio/desktop/image-portfolio-manage@2x.jpg";
import insureImgDesktop from "../images/portfolio/mobile/image-portfolio-insure@2x.jpg";
import manageImgTablet from "../images/portfolio/tablet/image-portfolio-manage@2x.jpg";
import manageImgDesktop from "../images/portfolio/desktop/image-portfolio-manage@2x.jpg";
import "./Portfolio.css";
import ProjectSummary from "../components/ProjectSummary";
import CallToAction from "../components/CallToAction";

const Portfolio = () => {
  const scrollToTop = useOutletContext();

  return (
    <main className="portfolio container">
      <div className="projects-wrapper">
        <ProjectSummary
          layoutClass="row-reverse"
          projectTitle="Manage"
          projectDescription="This project required me to build a fully responsive landing page to the
      designs provided. I used HTML5, along with CSS Grid and JavaScript for the
      areas that required interactivity, such as the testimonial slider."
          projectImgMobile={manageImgMobile}
          projectImgTablet={manageImgTablet}
          projectImgDesktop={manageImgDesktop}
          projectPathname="/manage"
          scrollToTop={scrollToTop}
        />
        <ProjectSummary
          layoutClass="row"
          projectTitle="Bookmark"
          projectDescription="This project required me to build a fully responsive landing page to the
      designs provided. I used HTML5, along with CSS Grid and JavaScript for the
      areas that required interactivity, such as the features section."
          projectImgMobile={bookmarkImgMobile}
          projectImgTablet={bookmarkImgTablet}
          projectImgDesktop={bookmarkImgDesktop}
          projectPathname="/bookmark"
          scrollToTop={scrollToTop}
        />
        <ProjectSummary
          layoutClass="row-reverse"
          projectTitle="Insure"
          projectDescription="This was a small project which mostly consisted of
      HTML and CSS. I built a fully-responsive landing page. The only JavaScript
      this project required was to enable the toggling of the mobile navigation."
          projectImgMobile={insureImgMobile}
          projectImgTablet={insureImgTablet}
          projectImgDesktop={insureImgDesktop}
          projectPathname="/insure"
          scrollToTop={scrollToTop}
        />
        <ProjectSummary
          layoutClass="row"
          projectTitle="Fylo"
          projectDescription="This project was built in pure HTML and CSS. I had
      mobile and desktop designs to work to and built it so that it was
      fully-responsive. I took a mobile-first approach and used modern CSS like
      Flexbox and Grid for layout purposes. "
          projectImgMobile={fyloImgMobile}
          projectImgTablet={fyloImgTablet}
          projectImgDesktop={fyloImgDesktop}
          projectPathname="/fylo"
          scrollToTop={scrollToTop}
        />
      </div>
      <CallToAction />
    </main>
  );
};

export default Portfolio;
