import ProjectDetail from "../components/ProjectDetailTemplate";
import bookmarkHeroImgMobile from "../images/detail/mobile/image-bookmark-hero@2x.jpg";
import bookmarkHeroImgTablet from "../images/detail/tablet/image-bookmark-hero@2x.jpg";
import bookmarkHeroImgDesktop from "../images/detail/desktop/image-bookmark-hero@2x.jpg";
import bookmarkPreview1Mobile from "../images/detail/mobile/image-bookmark-preview-1@2x.jpg";
import bookmarkPreview1Tablet from "../images/detail/tablet/image-bookmark-preview-1@2x.jpg";
import bookmarkPreview1Desktop from "../images/detail/desktop/image-bookmark-preview-1@2x.jpg";
import bookmarkPreview2Mobile from "../images/detail/mobile/image-bookmark-preview-2@2x.jpg";
import bookmarkPreview2Tablet from "../images/detail/tablet/image-bookmark-preview-2@2x.jpg";
import bookmarkPreview2Desktop from "../images/detail/desktop/image-bookmark-preview-2@2x.jpg";

const BookmarkProject = () => {
  const projectTitle = "Bookmark";
  const projectDescription =
    "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.";
  const techStack = "HTML / CSS / JS";
  const projectBackground =
    "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.";
  const previousProject = "Manage";
  const previousLink = "/manage";
  const nextProject = "Insure";
  const nextLink = "/insure";
  const projectLink = "https://nakoyawilson.github.io/bookmark-landing-page/";

  return (
    <ProjectDetail
      projectTitle={projectTitle}
      projectDescription={projectDescription}
      techStack={techStack}
      projectBackground={projectBackground}
      previousProject={previousProject}
      previousLink={previousLink}
      nextProject={nextProject}
      nextLink={nextLink}
      projectHeroMobile={bookmarkHeroImgMobile}
      projectHeroTablet={bookmarkHeroImgTablet}
      projectHeroDesktop={bookmarkHeroImgDesktop}
      staticDesktopMobile={bookmarkPreview1Mobile}
      staticDesktopTablet={bookmarkPreview1Tablet}
      staticDesktopDesktop={bookmarkPreview1Desktop}
      staticMobileMobile={bookmarkPreview2Mobile}
      staticMobileTablet={bookmarkPreview2Tablet}
      staticMobileDesktop={bookmarkPreview2Desktop}
      projectLink={projectLink}
    />
  );
};

export default BookmarkProject;
