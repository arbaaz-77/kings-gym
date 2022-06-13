import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="space-between"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "100px", height: "100px" }} />
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "14px", xs: "10px" } }}
        mt="41px"
        pb="40px"
      >
        Arbaaz Sumar &copy;
      </Typography>
    </Stack>
  </Box>
);

export default Footer;
