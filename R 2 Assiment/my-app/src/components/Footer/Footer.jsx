import React from "react";
import { Box, Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Typography variant="body2" className="footer-text">
        © 2025 All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
