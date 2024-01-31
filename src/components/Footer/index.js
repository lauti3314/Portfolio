import { Bio } from "../../data/constants";
import { FooterContainer, Nav, FooterWrapper, Logo, SocialMediaIcons } from "../Footer/FooterStyled";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>

                <Logo>Lautaro Tejada</Logo>

                <Nav>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </Nav>


                <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
                </SocialMediaIcons>


            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;