import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import frontend from "../assets/img/Frontend.png";
import backend from "../assets/img/Backend.png";
import devtools from "../assets/img/DevTools.png";

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
            <Container>
                <Row>
                    <Col>
                    <div className="skill-box">
                        <h2>Skills</h2>
                        <p>As an undergraduate studying computer science, I have spent the last couple years learning the technologies listed here.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={frontend} />
                                <h5>Frontend</h5>
                            </div>
                            <div className="item">
                                <img src={backend} />
                                <h5>Backend</h5>
                            </div>
                            <div className="item">
                                <img src={devtools} />
                                <h5>Tools</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" src={colorSharp} /> */}
        </section>
      )
}