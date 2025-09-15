import React from "react";
import styled from "styled-components";

// Container for the whole skills section
const Section = styled.div`
  padding: 60px 20px;
  text-align: center;
  background-color: #fafafa;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

// Title
const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

// Logos grid
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 40px;
  justify-items: center;

  @media (max-width: 768px) {
    gap: 25px;
  }

  @media (max-width: 480px) {
    gap: 18px;
  }
`;

// Each skill card
const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.15);
  }
`;

// Icon styling
const Icon = styled.i`
  font-size: 60px;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

// Label below icon
const Label = styled.span`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #444;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const Skills = () => {
  const skills = [
    { icon: "devicon-react-original colored", name: "React" },
    { icon: "devicon-nodejs-plain colored", name: "Node.js" },
    { icon: "devicon-mysql-plain colored", name: "MySQL" },
    { icon: "devicon-javascript-plain colored", name: "JavaScript" },
    { icon: "devicon-html5-plain colored", name: "HTML5" },
    { icon: "devicon-css3-plain colored", name: "CSS3" },
    { icon: "devicon-java-plain colored", name: "Java" },
    { icon: "devicon-spring-plain colored", name: "Spring Boot" },
  ];

  return (
    <Section>
      <Title>Skills</Title>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <Icon className={skill.icon} />
            <Label>{skill.name}</Label>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  );
};

export default Skills;
