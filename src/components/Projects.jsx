import React from "react";
import styled from "styled-components";

const Section = styled.div`
  padding: 60px 20px;
  text-align: center;
  background: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 25px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  justify-items: center;

  @media (max-width: 480px) {
    gap: 18px;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Screenshot = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
  object-fit: cover;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const ProjectTitle = styled.h3`
  margin: 10px 0;
  font-size: 22px;
  color: #222;

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  font-size: 15px;
  color: #555;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 12px;
  flex-wrap: wrap;
`;

const Button = styled.a`
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;
  cursor: pointer;

  &.live {
    background: #4caf50;
    color: white;
  }

  &.live:hover {
    background: #43a047;
  }

  &.code {
    background: #333;
    color: white;
  }

  &.code:hover {
    background: #000;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 7px 12px;
  }
`;

const Projects = () => {
  return (
    <Section>
      <Title>Projects</Title>
      <ProjectsGrid>
        {/* QuickKart */}
        <Card>
          <Screenshot src="/quickkart1.png" alt="QuickKart Screenshot" />
          <Screenshot src="/quickkart2.png" alt="QuickKart Screenshot" />

          <ProjectTitle>QuickKart</ProjectTitle>
          <Description>
            An e-commerce web app built with React, Redux-Saga, and TypeScript.
            Features cart, product listings, and responsive design.
          </Description>
          <ButtonGroup>
            <Button
              href="https://quickkart-app.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="live"
            >
              🔗 Live Demo
            </Button>
            <Button
              href="https://github.com/BhaveshJibhakate/QuickKart"
              target="_blank"
              rel="noopener noreferrer"
              className="code"
            >
              💻 Code
            </Button>
          </ButtonGroup>
        </Card>

        {/* Weather Dashboard */}
        <Card>
          <Screenshot src="weatherapi.png" alt="Weather Dashboard" />
          <ProjectTitle>Weather Dashboard</ProjectTitle>
          <Description>
            A React app that fetches live weather data using the OpenWeather API.
          </Description>
          <Button
            href="https://github.com/BhaveshJibhakate/weather-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="code"
          >
            💻 Code
          </Button>
        </Card>

        {/* To-Do App */}
        <Card>
          <Screenshot src="/loginPage.png" alt="To-Do App Login Page" />
          <Screenshot src="todo_app.png" alt="Todo Dashboard" />

          <ProjectTitle>To-Do App</ProjectTitle>
          <Description>
            Full-stack To-Do app with authentication using React, Node.js, and
            MySQL.
          </Description>
                <Button
            href="https://github.com/BhaveshJibhakate/todo-app"
            target="_blank"
            rel="noopener noreferrer"
            className="code"
          >
            💻 Code
          </Button>
        </Card>
      </ProjectsGrid>
    </Section>
  );
};

export default Projects;
