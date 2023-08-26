import { Box, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <Box className="footer">
      <Box width={"90%"} m={"auto"} pb={5} pt={5}>
        <Grid container md={12}>
          <Grid item xs={12} md={4} mb={4}>
            <img src="	https://www.cyberyami.com/images/logo.svg" />
            <Box sx={{ display: "flex", gap: "1rem" }} pt={2}>
              <FacebookIcon className="icons" />
              <InstagramIcon className="icons" />
              <TwitterIcon className="icons" />
              <LinkedInIcon className="icons" />
            </Box>
          </Grid>
          <Grid item md={8} xs={12}>
            <Box sx={{ display: "flex", gap: "4rem", flexWrap: "wrap" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <Typography fontWeight={"bold"}>RESOURCES</Typography>
                <Typography className="icons">Leaderboard</Typography>
                <Typography className="icons">About Us</Typography>
                <Typography className="icons">Contact Us</Typography>
                <Typography className="icons">Blogs</Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <Typography fontWeight={"bold"}>LEGALS</Typography>
                <Typography className="icons">Terms & Conditions</Typography>
                <Typography className="icons">Privacy Policy</Typography>
                <Typography className="icons">Refund Policy</Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <Typography fontWeight={"bold"}>FOR BUSINESSES</Typography>
                <Typography className="icons">Business Solutions</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ borderBottom: "2px solid #dbdad5", margin: "1rem 0" }}></Box>
        <Typography fontSize={"small"} mt={5}>
          ©2022, All Rights Reserved -Cyberyami | Wissenhive E-Learning
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
