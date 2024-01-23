import React from "react";
import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from "./SkillsStyled";
import { skills } from '../../data/constants'

const Skills = () => {
    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Desc>Here are some of my skills on which i have been working on for the past year.</Desc>
                <SkillsContainer>
                    {skills.map((skill) => (
                        <Skill>
                            <SkillTitle> {skill.title} </SkillTitle>
                            <SkillList>
                                {skill.skills.map((item) => (
                                    <SkillItem>
                                        <SkillImage src={item.image} />
                                        {item.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    )

}

export default Skills;