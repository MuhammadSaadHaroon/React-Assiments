import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>

      <form className="contact-form">
        <TextField label="Your Name" variant="outlined" required fullWidth />
        <TextField label="Your Email" type="email" variant="outlined" required fullWidth />
        <TextField
          label="Your Message"
          variant="outlined"
          multiline
          rows={4}
          required
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;
