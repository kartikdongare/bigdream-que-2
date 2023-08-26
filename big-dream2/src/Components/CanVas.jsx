import ClearAllIcon from "@mui/icons-material/ClearAll";
import { Box, Stack } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#BBF7D0"),
  backgroundColor: "#BBF7D0",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#BBF7D0",
  },
}));
const ColorButton1 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#BBF7D0"),
  textTransform: "capitalize",

  borderColor: "#BBF7D0",
  "&:hover": {
    backgroundColor: "#BBF7D0",
    border: "none",
  },
}));

const CanVas = () => {
  return (
    <div>
      <a
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        <ClearAllIcon sx={{ color: "#BBF7D0" }} />
      </a>
      <div
        className="offcanvas offcanvas-start"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <img
              src="https://www.cyberyami.com/images/logo.svg"
              alt="title image"
            />
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Accordion sx={{ margin: "0px", boxShadow: "0" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ padding: "0px" }}
              >
                <Typography fontWeight={"bold"}>Academia</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#FAFAFA",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginBottom: "0",
                }}
              >
                <Typography>SkillUp Programs</Typography>
                <Typography>Job Track Courses</Typography>
              </AccordionDetails>
            </Accordion>
            <Typography fontWeight={"bold"}>CTF Warriors</Typography>
            <Typography fontWeight={"bold"}>Business Solutions</Typography>
            <Box>
              <Accordion sx={{ boxShadow: "0" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ padding: "0px" }}
                >
                  <Typography fontWeight={"bold"}>Resources</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "#FAFAFA",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <Typography>About Us</Typography>
                  <Typography>Contact Us</Typography>
                  <Typography>Blogs</Typography>
                  <Typography>Cyberyami Forum</Typography>
                  <Typography
                    sx={{
                      backgroundColor: "#66bafa",
                      color: "#FAFAFA",
                      padding: "12px 22px",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    Join Discord
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <ColorButton variant="contained">Login</ColorButton>
              <ColorButton1 variant="outlined">Sign Up</ColorButton1>
            </Stack>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default CanVas;
