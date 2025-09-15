import React from "react";
import styled from "styled-components";

const Section = styled.div`
  padding: 60px 20px;
  background: #f9f9f9;
  text-align: center;
  border-radius: 10px;
  max-width: 900px;
  margin: 40px auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);

  @media (max-width: 1024px) {
    padding: 50px 18px;
    margin: 30px auto;
  }

  @media (max-width: 768px) {
    padding: 40px 16px;
    margin: 20px auto;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 30px 12px;
    margin: 15px auto;
    border-radius: 6px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    display: block;
    width: 60%;
    height: 3px;
    background: #61dafb;
    margin: 8px auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 18px;

  strong {
    color: #222;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 1.4;
    margin-bottom: 12px;
  }
`;

const About = () => {
  return (
    <Section>
      <Title>About Me</Title>
      <Paragraph>
        Hi, I'm <strong>Bhavesh 👋</strong>. I'm a React Developer passionate
        about building modern, user-friendly web applications.
      </Paragraph>
      <Paragraph>
        I have experience with{" "}
        <strong>React, Redux, Node.js, Express, and MySQL</strong>. I enjoy
        solving real-world problems and continuously learning new technologies.
      </Paragraph>
      <Paragraph>
        My goal is to grow as a full-stack developer and contribute to impactful
        projects. Outside of coding, I like exploring tech blogs and
        experimenting with side projects.
      </Paragraph>
    </Section>
  );
};

export default About;
