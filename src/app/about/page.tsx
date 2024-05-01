import type { NextPage } from "next";
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Aakash a <span>Mobile Application Developer</span>
                  </h2>
                  <p>
                    Hi! My name is Aakash. I am a Mobile Application Developer, and I am
                    very passionate and dedicated to my work. With 3+ years
                    experience as a Mobile Application Developer, I have acquired the skills and
                    knowledge necessary to make your project a success. I enjoy
                    every step of the design process, from discussion and
                    collaboration.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span><a href="https://light1810.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer">aakash-portfolio-link</a></span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>aakash.decosta1810@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>M.Sc Computer Science</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+91 8967157120</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Kolkata</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <Link
                        href="/assets/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>iOS / Swift</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React-Native / Javascript ES6</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Android / Java</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2018 to 2020
                          </h6>
                          <h4 className="timeline-title">
                            M.Sc in Computer Science
                          </h4>
                          <p className="timeline-text">
                            I finished my postgraduate work in MSc Computer Science at St. Xavier's, and it was during this time that I began to further explore into Mobile Application Development.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2015 to 2018
                          </h6>
                          <h4 className="timeline-title">
                            B.Sc in Computer Science
                          </h4>
                          <p className="timeline-text">
                            I finished my undergraduate studies and received my BSc degree in Computer Science from St. Xavier's, earning First Division honors.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2013 to 2015
                          </h6>
                          <h4 className="timeline-title">
                            Higher Secondary Certificate
                          </h4>
                          <p className="timeline-text">
                            I achieved my HSC qualification in 2015, specializing in Science, from a school named Mary Immaculate School, Berhampore, which was affiliated with the ISC board.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Sept 2022 to Present
                          </h6>
                          <h4 className="timeline-title"> Infosys - Senior Software Engineer</h4>
                          <p className="timeline-text">
                            Since 2022, I've been employed at this company, where I initially began working with React Native and delved into iOS native module bridging. My responsibilities included contributing to the development of a utility-based electricity billing application.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" />Oct 2020 to Aug 2022
                          </h6>
                          <h4 className="timeline-title">Unified Infotech - Application Developer</h4>
                          <p className="timeline-text">
                            Following my postgraduate studies, I joined this company as an iOS Application Developer. During my tenure, I actively participated in multiple projects, utilizing Swift and Storyboard for development.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Apr 2019 to Dec 2019
                          </h6>
                          <h4 className="timeline-title">CSSLLC - Java Developer</h4>
                          <p className="timeline-text">
                            I worked as an intern here during my postgraduate studies and was employed as a Java Android App Developer.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
