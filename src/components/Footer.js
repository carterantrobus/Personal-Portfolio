import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* <MailchimpForm /> */}
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/carterantrobus/"><img src={navIcon1} /></a>
                            <a href="https://github.com/carterantrobus"><img src={navIcon2} /></a>
                            {/* <a href="https://www.instagram.com/carter.tro/"><img src={navIcon3} /></a> */}
                            <p>CopyRight 2023, All Rights Reserved by Carter Antrobus</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}