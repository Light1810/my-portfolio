import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Projects</h2>
            </div>
          </div>

          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="./imgs/portfolio/1.jpeg" alt="Project Snapshot" />
                </div>
                <div className="portfolio-info">
                  <h4>MySCE</h4>
                  <h6 className="icon" >Electric Utility App</h6>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="./imgs/portfolio/2.jpeg" alt="Project Snapshot" />
                </div>
                <div className="portfolio-info">
                  <h4>VIQ</h4>
                  <h6 className="icon" >Audio Video Transcription App</h6>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="./imgs/portfolio/3.jpeg" alt="Project Snapshot" />
                </div>
                <div className="portfolio-info">
                  <h4>JM Cashback</h4>
                  <h6 className="icon" >Offer, Cashback and Coupons App</h6>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="./imgs/portfolio/4.jpeg" alt="Project Snapshot" />
                </div>
                <div className="portfolio-info">
                  <h4>Football Zeal</h4>
                  <h6 className="icon" >Social Media App for Football enthusiast</h6>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="./imgs/portfolio/5.jpeg" alt="Project Snapshot" />
                </div>
                <div className="portfolio-info">
                  <h4>Kawawa Wallet</h4>
                  <h6 className="icon" >Digital Wallet App</h6>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="./imgs/portfolio/6.jpeg" alt="Project Snapshot" />
                </div>
                <div className="portfolio-info">
                  <h4>Review Probe Jobs</h4>
                  <h6 className="icon" >Job marketplace App</h6>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
