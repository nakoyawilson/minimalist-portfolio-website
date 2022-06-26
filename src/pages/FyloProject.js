import ProjectDetail from "../components/ProjectDetailTemplate";
import fyloHeroImgMobile from "../images/detail/mobile/image-fylo-hero@2x.jpg";
import fyloHeroImgTablet from "../images/detail/tablet/image-fylo-hero@2x.jpg";
import fyloHeroImgDesktop from "../images/detail/desktop/image-fylo-hero@2x.jpg";
import fyloPreview1Mobile from "../images/detail/mobile/image-fylo-preview-1@2x.jpg";
import fyloPreview1Tablet from "../images/detail/tablet/image-fylo-preview-1@2x.jpg";
import fyloPreview1Desktop from "../images/detail/desktop/image-fylo-preview-1@2x.jpg";
import fyloPreview2Mobile from "../images/detail/mobile/image-fylo-preview-2@2x.jpg";
import fyloPreview2Tablet from "../images/detail/tablet/image-fylo-preview-2@2x.jpg";
import fyloPreview2Desktop from "../images/detail/desktop/image-fylo-preview-2@2x.jpg";

const FyloProject = () => {
  const projectTitle = "Fylo";
  const projectDescription =
    "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.";
  const techStack = "HTML / CSS";
  const previousProject = "Insure";
  const previousLink = "/insure";
  const nextProject = "Manage";
  const nextLink = "/manage";
  const projectLink =
    "https://nakoyawilson.github.io/fylo-dark-theme-landing-page/";

  return (
    <ProjectDetail
      projectTitle={projectTitle}
      projectDescription={projectDescription}
      techStack={techStack}
      previousProject={previousProject}
      previousLink={previousLink}
      nextProject={nextProject}
      nextLink={nextLink}
      projectHeroMobile={fyloHeroImgMobile}
      projectHeroTablet={fyloHeroImgTablet}
      projectHeroDesktop={fyloHeroImgDesktop}
      staticDesktopMobile={fyloPreview1Mobile}
      staticDesktopTablet={fyloPreview1Tablet}
      staticDesktopDesktop={fyloPreview1Desktop}
      staticMobileMobile={fyloPreview2Mobile}
      staticMobileTablet={fyloPreview2Tablet}
      staticMobileDesktop={fyloPreview2Desktop}
      projectLink={projectLink}
    />
  );
};

export default FyloProject;
