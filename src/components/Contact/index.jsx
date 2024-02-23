import React, { useRef } from "react";
import { Snackbar } from "@mui/material";
import emailjs from "@emailjs/browser";
import {
  ContactTitle,
  Container,
  Desc,
  Title,
  Wrapper,
  ContactForm,
  ContactInput,
  ContactInputMessage,
  ContactButton,
} from "./ContactStyled";

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mjl0dpn",
        "template_b4bcnon",
        form.current,
        "9upym69OsqIHXLXj2"
      )
      .then(
        () => {
          console.log("Muy bien");
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
