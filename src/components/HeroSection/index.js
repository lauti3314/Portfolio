import React from "react";
import { Bio } from "../../data/constants";
import heroImag from "../../images/yoImag.jpg";
import Typewriter from 'typewriter-effect';
import HeroBgAnimation from "../HeroBgAnimation";
import { HeroContainer, HeroBg, HeroLeftContainer, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton, Img } from "./HeroStyled";

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>

                        <title>Hi, I am <br /> {Bio.name}</title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.CV} target='display'>View CV</ResumeButton>

                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={heroImag} alt="hero-image" />

                    </HeroRightContainer>
                </HeroInnerContainer>


            </HeroContainer>
        </div>
    );
}

export default HeroSection;