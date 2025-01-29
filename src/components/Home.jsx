import HomeStyle from "./Home.module.css";

function Home() {
  return (
    <>
      {/* banner start */}
      <section>
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
    </>
  );
}

export default Home;
