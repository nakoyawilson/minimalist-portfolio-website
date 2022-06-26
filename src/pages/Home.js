import { Link, useOutletContext } from "react-router-dom";
import avatarMobile from "../images/homepage/mobile/image-homepage-profile@2x.jpg";
import avatarTablet from "../images/homepage/tablet/image-homepage-profile@2x.jpg";
import avatarDesktop from "../images/homepage/desktop/image-homepage-profile@2x.jpg";
import CallToAction from "../components/CallToAction";
import "./Home.css";

const Home = () => {
  const scrollToTop = useOutletContext();

  return (
    <main className="home container">
      <section className="hero">
        <div className="container">
          <h1 className="section-heading">
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>
          <a href="#about" className="btn-primary">
            About Me
          </a>
        </div>
      </section>
      <div className="about-wrapper">
        <picture>
          <source media="(max-width: 888px)" srcSet={avatarMobile} />
          <source
            media="(max-width: 1297px) and (min-width: 889px)"
            srcSet={avatarTablet}
          />
          <source media="(min-width: 1298px)" srcSet={avatarDesktop} />
          <img src={avatarMobile} alt="" className="profile-img" />
        </picture>
        <section id="about" className="about">
          <h2 className="section-heading">About Me</h2>
          <p className="paragraph">
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </p>
          <Link to="portfolio" onClick={scrollToTop} className="btn-secondary">
            Go to Portfolio
          </Link>
        </section>
      </div>
      <CallToAction scrollToTop={scrollToTop} />
    </main>
  );
};

export default Home;
