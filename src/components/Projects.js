import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/movieapp.png";
import projImg2 from "../assets/img/weatherapp.png";
import projImg3 from "../assets/img/rpggame.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [
        {
            title: "Movie Reviews Site",
            description: "Design & Functionality",
            imgURL: projImg1,
        },
        {
            title: "Global Weather",
            description: "Design & Functionality",
            imgURL: projImg2,
        },
        {
            title: "RPG Game",
            description: "For Fun",
            imgURL: projImg3,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    {/* <TrackVisibility>
                        {({ isVisible }) => */}
                            {/* <div className={isVisible ? "animate__animated animate__slideInDown" : ""}> */}
                                <h2>Projects</h2>
                                <br></br>
                                <Tab.Container id="project-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                        </Nav.Item>
                                        {/* <Nav.Item>
                                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                        </Nav.Item> */}
                                    </Nav>
                                    <Tab.Content id="slideInUp">
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard 
                                                            key={index}
                                                            {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            {/* <Row>
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard 
                                                            key={index}
                                                            {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row> */}
                                        </Tab.Pane>
                                        {/* <Tab.Pane eventKey="third">
                                            <Row>
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard 
                                                            key={index}
                                                            {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane> */}
                                    </Tab.Content>
                                </Tab.Container>
                            {/* </div>}
                        </TrackVisibility> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}