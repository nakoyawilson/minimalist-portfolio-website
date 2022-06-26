import ProjectDetail from "../components/ProjectDetailTemplate";
import insureHeroImgMobile from "../images/detail/mobile/image-insure-hero@2x.jpg";
import insureHeroImgTablet from "../images/detail/tablet/image-insure-hero@2x.jpg";
import insureHeroImgDesktop from "../images/detail/desktop/image-insure-hero@2x.jpg";
import insurePreview1Mobile from "../images/detail/mobile/image-insure-preview-1@2x.jpg";
import insurePreview1Tablet from "../images/detail/tablet/image-insure-preview-1@2x.jpg";
import insurePreview1Desktop from "../images/detail/desktop/image-insure-preview-1@2x.jpg";
import insurePreview2Mobile from "../images/detail/mobile/image-insure-preview-2@2x.jpg";
import insurePreview2Tablet from "../images/detail/tablet/image-insure-preview-2@2x.jpg";
import insurePreview2Desktop from "../images/detail/desktop/image-insure-preview-2@2x.jpg";

const InsureProject = () => {
  const projectTitle = "Insure";
  const projectDescription =
    "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.";
  const techStack = "HTML / CSS / JS";
  const previousProject = "Bookmark";
  const previousLink = "/bookmark";
  const nextProject = "Fylo";
  const nextLink = "/fylo";
  const projectLink = "https://nakoyawilson.github.io/insure-landing-page/";

  return (
    <ProjectDetail
      projectTitle={projectTitle}
      projectDescription={projectDescription}
      techStack={techStack}
      previousProject={previousProject}
      previousLink={previousLink}
      nextProject={nextProject}
      nextLink={nextLink}
      projectHeroMobile={insureHeroImgMobile}
      projectHeroTablet={insureHeroImgTablet}
      projectHeroDesktop={insureHeroImgDesktop}
      staticDesktopMobile={insurePreview1Mobile}
      staticDesktopTablet={insurePreview1Tablet}
      staticDesktopDesktop={insurePreview1Desktop}
      staticMobileMobile={insurePreview2Mobile}
      staticMobileTablet={insurePreview2Tablet}
      staticMobileDesktop={insurePreview2Desktop}
      projectLink={projectLink}
    />
  );
};

export default InsureProject;
