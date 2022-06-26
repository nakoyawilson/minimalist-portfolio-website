import ProjectDetail from "../components/ProjectDetailTemplate";
import manageHeroImgMobile from "../images/detail/mobile/image-manage-hero@2x.jpg";
import manageHeroImgTablet from "../images/detail/tablet/image-manage-hero@2x.jpg";
import manageHeroImgDesktop from "../images/detail/desktop/image-manage-hero@2x.jpg";
import managePreview1Mobile from "../images/detail/mobile/image-manage-preview-1@2x.jpg";
import managePreview1Tablet from "../images/detail/tablet/image-manage-preview-1@2x.jpg";
import managePreview1Desktop from "../images/detail/desktop/image-manage-preview-1@2x.jpg";
import managePreview2Mobile from "../images/detail/mobile/image-manage-preview-2@2x.jpg";
import managePreview2Tablet from "../images/detail/tablet/image-manage-preview-2@2x.jpg";
import managePreview2Desktop from "../images/detail/desktop/image-manage-preview-2@2x.jpg";

const ManageProject = () => {
  const projectTitle = "Manage";
  const projectDescription =
    "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.";
  const techStack = "HTML / CSS / JS";
  const previousProject = "Fylo";
  const previousLink = "/fylo";
  const nextProject = "Bookmark";
  const nextLink = "/bookmark";
  const projectLink = "https://nakoyawilson.github.io/manage-landing-page/";

  return (
    <ProjectDetail
      projectTitle={projectTitle}
      projectDescription={projectDescription}
      techStack={techStack}
      previousProject={previousProject}
      previousLink={previousLink}
      nextProject={nextProject}
      nextLink={nextLink}
      projectHeroMobile={manageHeroImgMobile}
      projectHeroTablet={manageHeroImgTablet}
      projectHeroDesktop={manageHeroImgDesktop}
      staticDesktopMobile={managePreview1Mobile}
      staticDesktopTablet={managePreview1Tablet}
      staticDesktopDesktop={managePreview1Desktop}
      staticMobileMobile={managePreview2Mobile}
      staticMobileTablet={managePreview2Tablet}
      staticMobileDesktop={managePreview2Desktop}
      projectLink={projectLink}
    />
  );
};

export default ManageProject;
