import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
// import headerImg from "../assets/img/profile-pic2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full Stack Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(30 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return  (
      <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={24} md={12} xl={14}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={ isVisible ? "animate__animated animate__fadeIn" : "" }>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Carter Antrobus `}<span className="wrap">{text}</span></h1>
                    <p>I'm a full stack web developer with a background in technical and customer-focused support. Looking for an opportunity to apply creative, analytical, and communicative skills on a development team.</p>
                    <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </div>}
                    </TrackVisibility>                
                </Col>
                {/* <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                    {({ isVisible }) => 
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img src={headerImg} alt="Header Img" />
                    </div>}
                    </TrackVisibility>
                </Col> */}
            </Row>
        </Container>
      </section>
    )
}