import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Arduino Tool Plaza",
      description:
        "The Arduino Tool Plaza project is designed to automate the management of a toll plaza system using Arduino-based technology.",
      imgUrl: projImg1,
      url: "https://github.com/your-github/arduino-tool-plaza",
    },
    {
      title: "Automated Document Verification System",
      description:
        "Developed an automated document verification system to authenticate official documents using Tesseract OCR for text extraction.",
      imgUrl: projImg2,
      url: "https://github.com/your-github/document-verification",
    },
    {
      title: "Portfolio Website",
      description:
        "I showcase my skills in creating user-centric, responsive, and intuitive web applications",
      imgUrl: projImg3,
      url: "https://github.com/your-github/weather-app",
    },
    {
      title: "Tic-Tac-Toe Game",
      description:
        "Developed a simple Tic-Tac-Toe game using HTML, CSS, and JavaScript.",
      imgUrl: projImg4,
      url: "https://github.com/rishabh23-byte/tictactoe",
    },
    {
      title: "Web-dev Projects",
      description:
        "Small web projects like login-page, profile card, frontpage of website",
      imgUrl: projImg5,
      url: "https://github.com/your-github/web-dev-projects",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    This section highlights a selection of my projects,
                    providing tangible examples of my skills and experience.
                    Each project is accompanied by a brief overview, along with
                    links to the source code. These projects demonstrate my
                    ability to tackle complex challenges, utilize a variety of
                    technologies, and effectively manage the development process
                    from start to finish.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
