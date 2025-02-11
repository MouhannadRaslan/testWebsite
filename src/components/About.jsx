import AboutStyle from "./About.module.css";
import Contact from "./Contact";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className={AboutStyle.banner}>
        <h2>about us</h2>
        <h1>
          Education <br /> Center
        </h1>
        <a href="">read more</a>
      </div>
      <div className={AboutStyle.boxes}>
        <div className={AboutStyle.box1}>
          <h1>Our Programs</h1>
          <span>————</span>
          <p>
            Ut enim ad cupidatat non proident, sunt mollit anim id est laborum.
            consectetur ... Ut Excepteur sint occaecat minim veniam, quis
            nostrud in culpa qui officia deserunt
          </p>
        </div>
        <div className={AboutStyle.box2}>
          <h1>Education Center</h1>
          <span>————</span>
          <p>
            Ut enim ad cupidatat non proident, sunt mollit anim id est laborum.
            consectetur ... Ut Excepteur sint occaecat minim veniam, quis
            nostrud in culpa qui officia deserunt
          </p>
        </div>
        <div className={AboutStyle.box3}>
          <h1>Community Support</h1>
          <span>————</span>
          <p>
            Ut enim ad cupidatat non proident, sunt mollit anim id est laborum.
            consectetur ... Ut Excepteur sint occaecat minim veniam, quis
            nostrud in culpa qui officia deserunt
          </p>
        </div>
        <div className={AboutStyle.box4}>
          <h1>News & Events</h1>
          <span>————</span>
          <p>
            Ut enim ad cupidatat non proident, sunt mollit anim id est laborum.
            consectetur ... Ut Excepteur sint occaecat minim veniam, quis
            nostrud in culpa qui officia deserunt
          </p>
        </div>
      </div>
      <section className={AboutStyle.help}>
        <div className={AboutStyle.helpImg}></div>
        <div className={AboutStyle.helpContent}>
          <h1>
            To help children realize their potential in the classroom and beyond
          </h1>
          <a href="">learn more</a>
        </div>
      </section>
      <section className={AboutStyle.find}>
        <div className={AboutStyle.findImg}></div>
        <div className={AboutStyle.findContent}>
          <h1>Find a Program</h1>
          <p>
            Through our work, we are building an evidence base to inform local
            practice and address some of the nation’s deepest organizational
            challenges currently hindering effective and equitable teaching and
            learning for all. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <a href="">read more</a>
        </div>
      </section>
      <Contact/>
      <Footer/>
    </>
  );
}

export default About;
