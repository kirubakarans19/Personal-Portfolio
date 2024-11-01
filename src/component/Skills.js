import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p style={{ textAlign: 'center' }}>As a full stack web developer, I specialize in creating dynamic applications with React, Node.js, and Python. My expertise in data science allows me to analyze and visualize data to extract actionable insights. With experience in machine learning and deep learning, utilizing frameworks like TensorFlow and Scikit-learn, I develop intelligent solutions that enhance decision-making. I am passionate about merging technology and creativity to deliver impactful digital experiences.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="web development" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="ML" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Deep Learning" />
                                <h5>Deep Learning</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Data Science" />
                                <h5>Data Science</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="deco" />
    </section>
  )
}
