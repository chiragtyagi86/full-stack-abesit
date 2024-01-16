import React from "react";
import "./Css/About.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="banner"></div>
      <div className="about-head">
        <div className="about">
          <div className="about-left">
            <h2>
              Established in the year 2007, ABESIT Group of Institutions (AKTU
              College Code 290) is a self-financed engineering institution
              situated in a prominent location at NE-3, Crossings Republik,
              Ghaziabad.
            </h2>
            <p>
              The institute is approved by AICTE and affiliated with Dr. A.P.J.
              Abdul Kalam Technical University, Lucknow, Uttar Pradesh. Right
              since its inception nearly 16 years ago, the ABESIT Group of
              Institutions has been delivering excellence in the field of
              engineering education.
            </p>
            <p>
              The institute has earned a formidable reputation by providing
              global quality education in a highly disciplined and conducive
              environment.
            </p>
          </div>
          <div className="about-right">
            <img
              src="https://www.abesit.in/wp-content/uploads/2023/04/about-overview-img1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="yes">
          <h1>DEPARTMENTS</h1>
          <div className="grid">
            <div>
              <img
                src="https://www.abesit.in/wp-content/themes/abesit/images/computer-science-img.jpg"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://www.abesit.in/wp-content/themes/abesit/images/cse-ai-img.jpg"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://www.abesit.in/wp-content/themes/abesit/images/cse-data-science.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.abesit.in/wp-content/themes/abesit/images/mca-img.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.abesit.in/wp-content/themes/abesit/images/it-mca-dept-img.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.abesit.in/wp-content/themes/abesit/images/it-ece-dept-img.jpg"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://www.abesit.in/wp-content/themes/abesit/images/iot-dept-img.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="about2">
          <div className="about2-left">
            <img
              src="https://www.abesit.in/wp-content/themes/abesit/images/nvindia-img.jpg"
              alt=""
            />
          </div>
          <div className="about2-right">
            <h2>
              1 st College in AKTU to adopt nVIDIA platform for AI, ML, Data
              Science & IOT
            </h2>
            <hr />
            <h3>
              The objective of establishing nVIDIA Artificial Intelligence
              Centre of Excellence are
            </h3>
            <ul>
              <li>Build an “Industry-Ready” AI talent pool</li>
              <li>Promote AI research in Institute</li>
            </ul>
          </div>
        </div>
        <div className="about">
          <div className="about-left">
            <h1></h1>
            <p>
              The Institute has recently set up an AI-based Centre of Excellence
              in association with nVIDIA for students and faculty where they’ll
              be provided exposure to industry standards with high quality in a
              competitive and challenging environment. This is the
              first-of-its-kind Centre of Excellence established in any private
              institute in the affiliating university of Dr. A.P.J. Abdul Kalam
              Technical University, Lucknow, and NCR Region
            </p>
          </div>
          <div className="about-right">
            <img
              src="https://www.abesit.in/wp-content/uploads/2023/04/nvindia-img1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
