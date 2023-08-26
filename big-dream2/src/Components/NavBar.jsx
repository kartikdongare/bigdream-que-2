import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./NavBar.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import CanVas from "./CanVas";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#BBF7D0"),
  backgroundColor: "#BBF7D0",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#BBF7D0",
  },
}));

const NavBar = () => {
  return (
    <Box sx={{ zIndex: "1", marginBottom: "4rem" }}>
      <Box
        width={"95%"}
        sx={{
          height: "5rem",
          boxShadow: "0 0 10px #e1e3e1",
          borderRadius: "10px",
          position: "fixed",
          left: "2.5%",
          top: "4%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "1",
          backgroundColor: "white",
        }}
      >
        <Box
          width={"90%"}
          margin={"auto"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ display: { md: "none", sm: "flex", xs: "flex" } }}>
            <CanVas />
          </Typography>
          <Box>
            <img src="https://www.cyberyami.com/images/logo.svg" />
          </Box>
          <Box
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Box className="dropdown">
              <Typography className="dropbtn icons">Academia</Typography>
              <Box className="dropdown-content">
                <Box sx={{ width: "80%", margin: "auto" }}>
                  <Typography className="sub-dpn-content">
                    SkillUp Programs
                  </Typography>
                  <Typography className="sub-dpn-content">
                    Job Track courses
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Typography className="dropbtn icons">CTF Warriors</Typography>
            <Typography className="dropbtn icons">
              Business Solutions
            </Typography>
            <Box className="dropdown">
              <Typography className="dropbtn icons">Resources</Typography>
              <Box className="dropdown-content">
                <Box sx={{ width: "80%", margin: "auto" }}>
                  <Typography className="sub-dpn-content">About Us</Typography>
                  <Typography className="sub-dpn-content">
                    Contact Us
                  </Typography>
                  <Typography className="sub-dpn-content">Blogs</Typography>
                  <Typography className="sub-dpn-content">
                    Cyberyami Forum
                  </Typography>
                  <Typography className="sub-dpn-content">
                    Contact Us
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ShoppingCartIcon />
            <Typography
              sx={{ display: { md: "flex", sm: "none", xs: "none" } }}
            >
              Sign in
            </Typography>
            <Typography
              sx={{ display: { md: "flex", sm: "none", xs: "none" } }}
            >
              <ColorButton>Login</ColorButton>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default NavBar;
