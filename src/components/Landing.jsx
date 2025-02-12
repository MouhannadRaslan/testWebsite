import LandingStyle from "./Landing.module.css";
import Contact from "./Contact";
import Footer from "./Footer";

function Landing() {
  return (
    <>
      <div className={LandingStyle.banner}>
        <h2>welcome</h2>
        <h1>
          Family & <br /> Education <br /> Center
        </h1>
        <a href="">read more</a>
      </div>
      <section className={LandingStyle.help}>
        <h1 className={LandingStyle.helpHeader}>
          To help children realize their potential
        </h1>
        <p className={LandingStyle.helpPrg}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat
          cupidatat non proident
        </p>
        <div className={LandingStyle.helpRow1}>
          <div className={LandingStyle.helpImg1}></div>
          <div className={LandingStyle.helpContent}>
            <h1>Learning Together</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <a href="">learn more</a>
          </div>
        </div>
        <div className={LandingStyle.helpRow2}>
          <div className={LandingStyle.helpContent}>
            <h1>Our Programs & Services</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <a href="">learn more</a>
          </div>
          <div className={LandingStyle.helpImg2}></div>
        </div>
        <div className={LandingStyle.helpRow3}>
          <div className={LandingStyle.helpImg3}></div>
          <div className={LandingStyle.helpContent}>
            <h1>Join the community</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <a href="">learn more</a>
          </div>
        </div>
      </section>
      <section className={LandingStyle.follow}>
        <div className={LandingStyle.followHeader}>
          <h1>Follow us on social media</h1>
          <p>Programs, Events & Updates</p>
        </div>
        <div className={LandingStyle.followHashtag}>
          <h1>#education_center</h1>
        </div>
      </section>
      <section className={LandingStyle.online}>
        <h1>
          Browse and book hundreds <br /> of free online classes
        </h1>
        <div className={LandingStyle.onlineContent}>
          <div className={LandingStyle.onlineBox}>
            <h1>Free Online Math Class</h1>
            <h3>Ages 6-9 years</h3>
            <a href="">MORE</a>
            <h1>Free Online Math Class</h1>
            <h3>Ages 6-9 years</h3>
            <a href="">MORE</a>
            <h1>Free Online Math Class</h1>
            <h3>Ages 6-9 years</h3>
            <a href="">MORE</a>
          </div>
          <div className={LandingStyle.onlineBox}>
            <h1>Free Online Math Class</h1>
            <h3>Ages 6-9 years</h3>
            <a href="">MORE</a>
            <h1>Free Online Math Class</h1>
            <h3>Ages 6-9 years</h3>
            <a href="">MORE</a>
            <h1>Free Online Math Class</h1>
            <h3>Ages 6-9 years</h3>
            <a href="">MORE</a>
          </div>
        </div>
      </section>
      <section className={LandingStyle.choose}>
        <h1>Why choose us?</h1>
        <p>
          Join our community of life long learners. Ut enim ad minim veniam,
          quis <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <div className={LandingStyle.numbers}>
          <span>875+</span>
          <span>75+</span>
          <span>150+</span>
          <span>27</span>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
