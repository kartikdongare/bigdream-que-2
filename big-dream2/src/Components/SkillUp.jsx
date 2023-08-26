import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DoneIcon from "@mui/icons-material/Done";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import PersonIcon from "@mui/icons-material/Person";
const SkillUp = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box className="skill-up">
      <Grid
        container
        md={12}
        xs={12}
        sm={12}
        rowSpacing={{ xs: 5, sm: 5 }}
        sx={{ width: "90%", margin: "auto" }}
      >
        <Grid item md={8}>
          <Box
            width={"85%"}
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Typography fontSize={20} fontWeight={"bold"}>
              Skillup
            </Typography>
            <Typography fontSize={15}>
              Skillup/{" "}
              <Typography variant="span" fontWeight={"bold"}>
                Burpsuite Bootcamp
              </Typography>
            </Typography>
            <Typography variant="h5" fontWeight={"bold"}>
              Burpsuite Bootcamp
            </Typography>
            <Typography>
              BurpSuite is an all-in-one tool used for WAPT. There are various
              functions that the burp suite can perform that help one in the
              process of pen-testing a website. We can intercept traffic, such
              as requests and responses sent to web servers, and also perform
              various analyses on those requests. BurpSuite is used by
              professionals in the field of testing security for websites.
              BurpSuite comes in 2 versions: professional, a paid product, and
              the free, Community edition
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "cenetr" }}>
              <Typography sx={{ color: "#FFA723" }} variant="span">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />{" "}
              </Typography>
              5.0
            </Typography>
            <button
              style={{
                width: "9rem",
                height: "2.5rem",
                fontSize: "15px",
                fontWeight: "bold",
                border: "none",
                backgroundColor: "#BBF7D0",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Login To Enroll
            </button>
            <Stack direction={"row"} gap={1}>
              <ThumbUpAltIcon />
              <Typography>Beginner &nbsp;&nbsp;|</Typography>
              <PersonIcon />
              <Typography>40 Enrolled Students</Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item md={4} xs={12} sm={12}>
          <Box backgroundColor={"#FAFAFA"}>
            <Typography variant="h6" ml={2} fontWeight={"bold"}>
              Course Content
            </Typography>
            <Box
              sx={{ borderBottom: "2px solid #dbdad5", margin: "1rem 0" }}
            ></Box>
            <Box sx={{ height: "62vh", overflow: "auto" }}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                style={{
                  marginBottom: "0px",
                  borderBottom: "2px solid #dbdad5",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{ fontSize: "15px", fontWeight: "bold", flexShrink: 1 }}
                  >
                    1.Introduction
                  </Typography>
                </AccordionSummary>
                <Box sx={{ borderBottom: "2px solid #dbdad5" }}></Box>
                <AccordionDetails>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      color: "#71717A",
                    }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        padding: "1px",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>
                      Defining Burpsuite
                    </Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                style={{
                  marginBottom: "0px",
                  marginTop: "0px",
                  borderBottom: "2px solid #dbdad5",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{ flexShrink: 0, fontSize: "15px", fontWeight: "bold" }}
                  >
                    2. What is Burpsuite
                  </Typography>
                </AccordionSummary>
                <Box sx={{ borderBottom: "2px solid #dbdad5" }}></Box>
                <AccordionDetails>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      color: "#71717A",
                    }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>
                      Defining Burpsuite
                    </Typography>
                  </Box>
                  <Box
                    sx={{ borderBottom: "2px solid #dbdad5", margin: "1rem 0" }}
                  ></Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        padding: "1px",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>
                      Community vs Professional vs Enterprise edition
                    </Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                style={{
                  marginBottom: "0px",
                  marginTop: "0px",
                  borderBottom: "2px solid #dbdad5",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{ flexShrink: 0, fontSize: "15px", fontWeight: "bold" }}
                  >
                    3. Setting up Burpsuite
                  </Typography>
                </AccordionSummary>
                <Box sx={{ borderBottom: "2px solid #dbdad5" }}></Box>
                <AccordionDetails>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      color: "#71717A",
                    }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        padding: "1px",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>manual Setup</Typography>
                  </Box>
                  <Box
                    sx={{ borderBottom: "2px solid #dbdad5", margin: "1rem 0" }}
                  ></Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        padding: "1px",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>Foxy Proxy</Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                style={{
                  marginBottom: "0px",
                  marginTop: "0px",
                  borderBottom: "2px solid #dbdad5",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{ flexShrink: 0, fontSize: "15px", fontWeight: "bold" }}
                  >
                    4. Future of Burpsuite
                  </Typography>
                </AccordionSummary>
                <Box sx={{ borderBottom: "2px solid #dbdad5" }}></Box>
                <AccordionDetails>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      color: "#71717A",
                    }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        padding: "1px",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>
                      Community edition features
                    </Typography>
                  </Box>
                  <Box
                    sx={{ borderBottom: "2px solid #dbdad5", margin: "1rem 0" }}
                  ></Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        padding: "1px",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>Proxy</Typography>
                  </Box>
                  <Box
                    sx={{ borderBottom: "2px solid #dbdad5", margin: "1rem 0" }}
                  ></Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        padding: "1px",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>Repeater</Typography>
                  </Box>
                  <Box
                    sx={{ borderBottom: "2px solid #dbdad5", margin: "1rem 0" }}
                  ></Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        padding: "1px",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>Intruder</Typography>
                  </Box>
                  <Box
                    sx={{ borderBottom: "2px solid #dbdad5", margin: "1rem 0" }}
                  ></Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        padding: "1px",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>Decoder</Typography>
                  </Box>
                  <Box
                    sx={{ borderBottom: "2px solid #dbdad5", margin: "1rem 0" }}
                  ></Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        padding: "1px",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>Comparer</Typography>
                  </Box>
                  <Box
                    sx={{ borderBottom: "2px solid #dbdad5", margin: "1rem 0" }}
                  ></Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        padding: "1px",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>Sequencer</Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
                style={{
                  marginBottom: "0px",
                  marginTop: "0px",
                  borderBottom: "2px solid #dbdad5",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{ flexShrink: 0, fontSize: "15px", fontWeight: "bold" }}
                  >
                    5. Burpsuite Browser
                  </Typography>
                </AccordionSummary>
                <Box sx={{ borderBottom: "2px solid #dbdad5" }}></Box>
                <AccordionDetails>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      color: "#71717A",
                    }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        padding: "1px",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>Introduction</Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
                style={{
                  marginBottom: "0px",
                  marginTop: "0px",
                  borderBottom: "2px solid #dbdad5",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{ flexShrink: 0, fontSize: "15px", fontWeight: "bold" }}
                  >
                    6. Scoping
                  </Typography>
                </AccordionSummary>
                <Box sx={{ borderBottom: "2px solid #dbdad5" }}></Box>
                <AccordionDetails>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      color: "#71717A",
                    }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        padding: "1px",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>Introduction</Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
                style={{
                  marginBottom: "0px",
                  marginTop: "0px",
                  borderBottom: "2px solid #dbdad5",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{ flexShrink: 0, fontSize: "15px", fontWeight: "bold" }}
                  >
                    7. Sitemap
                  </Typography>
                </AccordionSummary>
                <Box sx={{ borderBottom: "2px solid #dbdad5" }}></Box>
                <AccordionDetails>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      color: "#71717A",
                    }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        padding: "1px",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>Introduction</Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel8"}
                onChange={handleChange("panel8")}
                style={{
                  marginBottom: "0px",
                  marginTop: "0px",
                  borderBottom: "2px solid #dbdad5",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{ flexShrink: 0, fontSize: "15px", fontWeight: "bold" }}
                  >
                    8. Burpsuite Extension
                  </Typography>
                </AccordionSummary>
                <Box sx={{ borderBottom: "2px solid #dbdad5" }}></Box>
                <AccordionDetails>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      color: "#71717A",
                    }}
                  >
                    <Typography
                      sx={{
                        border: "none",
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        padding: "1px",
                        color: "white",
                        backgroundColor: "gray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon fontSize="10px" />
                    </Typography>
                    <Typography fontSize={"15px"}>Introduction</Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SkillUp;
