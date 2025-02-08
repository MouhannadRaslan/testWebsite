import HomeStyle from "./Home.module.css";

function Home() {
  return (
    <>
      {/* banner start */}
      <section className={HomeStyle.bannerSection}>
        <div className={HomeStyle.banner}>
          <div className={HomeStyle.bannerContent}>
            <h5 className={HomeStyle.bannerSubTitle}>Little More About Us</h5>
            <h1 className={HomeStyle.bannerTitle}>Your Kids is Our Future</h1>
            <p className={HomeStyle.bannerPrg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a className={HomeStyle.bannerBtn} href="">
              READ MORE
            </a>
          </div>
        </div>
        <div className={HomeStyle.bannerImg}></div>
      </section>
      {/* banner end */}
      {/* boxes start */}
      <div className={HomeStyle.boxes}>
        <div className={HomeStyle.box1}>
          <h1 className={HomeStyle.boxHeader}>Free Classes</h1>
          <p className={HomeStyle.boxPrg}>
            Ut enim ad cupidatat non proident, sunt mollit anim id est laborum.
            consectetur ... Ut Excepteur sint occaecat minim veniam, quis
            nostrud in culpa qui officia deserunt
          </p>
        </div>
        <div className={HomeStyle.box2}>
          <h1 className={HomeStyle.boxHeader}>Camps for Kids</h1>
          <p className={HomeStyle.boxPrg}>
            Ut enim ad cupidatat non proident, sunt mollit anim id est laborum.
            consectetur ... Ut Excepteur sint occaecat minim veniam, quis
            nostrud in culpa qui officia deserunt
          </p>
        </div>
        <div className={HomeStyle.box3}>
          <h1 className={HomeStyle.boxHeader}>Activities</h1>
          <p className={HomeStyle.boxPrg}>
            Ut enim ad cupidatat non proident, sunt mollit anim id est laborum.
            consectetur ... Ut Excepteur sint occaecat minim veniam, quis
            nostrud in culpa qui officia deserunt
          </p>
        </div>
        <div className={HomeStyle.box4}>
          <h1 className={HomeStyle.boxHeader}>Strategy</h1>
          <p className={HomeStyle.boxPrg}>
            Ut enim ad cupidatat non proident, sunt mollit anim id est laborum.
            consectetur ... Ut Excepteur sint occaecat minim veniam, quis
            nostrud in culpa qui officia deserunt
          </p>
        </div>
      </div>
      {/* boxes end */}
      {/* section start */}

      <section className={HomeStyle.section}>
        <div className={HomeStyle.sectionRow1}>
          <div className={HomeStyle.sectionImg1}></div>
          <div className={HomeStyle.rowContent1}>
            <h1>Small Group Size</h1>
            <p>
              Ultricies leo integer malesuada nunc vel risus commodo viverra
              maecenas. Lobortis elementum nibh tellus molestie nunc non.
              Aliquet bibendum
            </p>
            <a href="">LEARN MORE</a>
          </div>
        </div>
        <div className={HomeStyle.sectionRow2}>
          <div className={HomeStyle.rowContent2}>
            <h1>Over 140000 classes</h1>
            <p>
              Ultricies leo integer malesuada nunc vel risus commodo viverra
              maecenas. Lobortis elementum nibh tellus molestie nunc non.
              Aliquet bibendum
            </p>
            <a href="">CONTACT US</a>
          </div>
          <div className={HomeStyle.sectionImg2}></div>
        </div>
      </section>

      {/* section end */}
    </>
  );
}

export default Home;
