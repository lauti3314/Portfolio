import React from "react";
import { useState } from "react";
import { projects } from "../../data/constants";
import { Container, ToggleButtonGroup, Wrapper, Title, Desc, ToggleButton, Divider, CardContainer } from "../Projects/ProjectsStyled";
import ProjectCard from "../Cards/ProjectCards";


const Projects = ({ openModal, setOpenModal }) => {
    const [toggle, setToggle] = useState('all');
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    I have worked on a wide range of projects. Here are some of my projects.
                </Desc>
                <ToggleButtonGroup>

                    {toggle === 'all' ?
                        <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                        :
                        <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'Henry App' ?
                        <ToggleButton active value="Henry App" onClick={() => setToggle('Henry App')}>HENRY APP</ToggleButton>
                        :
                        <ToggleButton value="Henry App" onClick={() => setToggle('Henry App')}>HENRY APP</ToggleButton>
                    }
                </ToggleButtonGroup>
                <CardContainer>
                    {toggle === 'all' && projects
                        .map((project) => (
                            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                    {projects
                        .filter((item) => item.category === toggle)
                        .map((project) => (
                            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );

};

export default Projects;