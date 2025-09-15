import React from "react";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const Section = styled.div`
  padding: 60px 20px;
  text-align: center;
  background: #282c35;
  color: white;

  @media (max-width: 768px) {
    padding: 50px 16px;
  }

  @media (max-width: 480px) {
    padding: 40px 12px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 25px;
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

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 25px;
  }

  @media (max-width: 480px) {
    gap: 18px;
  }
`;

const IconLink = styled.a`
  font-size: 40px;
  color: #fff;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: #61dafb;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Contact = () => {
  return (
    <Section>
      <Title>Contact Me</Title>
      <IconsContainer>
        <IconLink
          href="tel:+917774032535"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPhone />
        </IconLink>
        <IconLink
          href="mailto:youremail@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </IconLink>
        <IconLink
          href="https://github.com/BhaveshJibhakate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/bhaveshkumar-jibhakate-243b862b5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </IconLink>
      </IconsContainer>
    </Section>
  );
};

export default Contact;
