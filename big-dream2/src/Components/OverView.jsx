import { Box, Button, Grid, Typography } from "@mui/material";
import { useRef, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import StarIcon from "@mui/icons-material/Star";

const OverView = () => {
  const [color, setColor] = useState(true);
  const overview = useRef();
  const review = useRef();

  const handlePageScroll = (val, ref) => {
    setColor(val);
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };
  return (
    <Box>
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Box mt={6}>
          <Button
            variant="text"
            style={{
              textTransform: "capitalize",
              color: "black",
              cursor: "pointer",
            }}
            onClick={() => handlePageScroll(true, overview)}
          >
            Overview
          </Button>
          <Button
            variant="text"
            style={{
              textTransform: "capitalize",
              color: "black",
              cursor: "pointer",
            }}
            onClick={() => handlePageScroll(false, review)}
          >
            Review
          </Button>
        </Box>
        <Box sx={{ borderBottom: "2px solid #dbdad5", position: "relative" }}>
          <Box
            sx={{
              borderBottom: "3px solid #230f8a",
              width: "60px",
              marginLeft: "8px",
              position: "absolute",
              left: color ? "none" : "70px",
            }}
          ></Box>
        </Box>
        <Grid container md={12} columnSpacing={15} mt={7}>
          <Grid item xs={12} sm={12} md={7} mb={3} ref={overview}>
            <Typography variant="h5" fontWeight={"bold"} mb={2}>
              Overview
            </Typography>
            <Typography color="#71717A">
              Burpsuite bootcamp brings you a detailed, structured way of
              learning and practicing this tool. This tool is highly used in the
              industry and mainly is used for conducting WAPT i.e Web
              Application Penetration Testing. You will learn about every aspect
              and sub-tools included in the burp suite included in this bootcamp
              are practice labs to get your hands on the burp suite and theory
              lectures with interactive video demonstrations.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Typography variant="h6" mb={2}>
              Top skill you will learn
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DoneIcon fontSize="10px" />
                </Typography>
                <Typography fontSize={"15px"}>
                  Understanding of Burpsuite
                </Typography>
              </Box>
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
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DoneIcon fontSize="10px" />
                </Typography>
                <Typography fontSize={"15px"}>
                  Know the tools offered by the burp suite
                </Typography>
              </Box>
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
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DoneIcon fontSize="10px" />
                </Typography>
                <Typography fontSize={"15px"}>
                  Use burp suite with ease in your testing
                </Typography>
              </Box>
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
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DoneIcon fontSize="10px" />
                </Typography>
                <Typography fontSize={"15px"}>
                  Know the difference between the pro & free edition
                </Typography>
              </Box>
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
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DoneIcon fontSize="10px" />
                </Typography>
                <Typography fontSize={"15px"}>
                  Perform full-fledged WAPT using only BurpSuite
                </Typography>
              </Box>
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
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DoneIcon fontSize="10px" />
                </Typography>
                <Typography fontSize={"15px"}>
                  {" "}
                  Learn Real-world techniques
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="h6" mt={6} mb={3}>
          This course will includes:
        </Typography>
      </Box>
      <Box bgcolor={"#FAFAFA"}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            width: "77%",
            justifyContent: "center",
            margin: "auto",
            gap: "20px",
          }}
          pt={8}
          pb={8}
        >
          <Box
            bgcolor={"white"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "20px",
              width: "20rem",
            }}
            px={2}
            pt={12}
            pb={11}
          >
            <img
              src="https://www.cyberyami.com/images/courses/theory.svg"
              alt="img1"
            />
            <Typography variant="h6" textAlign={"center"}>
              Self paced - Pragmatic Topics
            </Typography>
          </Box>
          <Box
            bgcolor={"white"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "20px",
              width: "20rem",
            }}
            px={2}
            pt={12}
            pb={11}
          >
            <img
              src="https://www.cyberyami.com/images/courses/practice-lab.svg"
              alt="img1"
            />
            <Typography variant="h6" textAlign={"center"}>
              Hands-on Practice Labs
            </Typography>
          </Box>
          <Box
            bgcolor={"white"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "20px",
              width: "20rem",
            }}
            px={2}
            pt={12}
            pb={11}
          >
            <img
              src="https://www.cyberyami.com/images/courses/cert-completion.svg"
              alt="img1"
            />
            <Typography variant="h6" textAlign={"center"}>
              Certificate of Completion
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box bgcolor={"#DCFCE7"}>
        <Box sx={{ width: "90%", margin: "auto" }} pt={6} pb={6}>
          <Typography variant="h5" mb={4} fontWeight={"bold"}>
            About the author
          </Typography>
          <Box
            sx={{
              width: "94%",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5rem",
            }}
          >
            <img
              src="https://www.cyberyami.com/_next/image?url=%2Fimages%2Flogo-black.png&w=828&q=75"
              alt="img3"
              className="img3"
            />
            <Box>
              <Typography variant="h6" mb={2} fontWeight={"bold"}>
                Team Cyberyami
              </Typography>
              <Typography>
                CyberYami brings you a plethora of custom-designed bootcamps and
                courses. The learning material focuses on hands-on practice that
                is much needed in cyber security. We have included labs and
                challenges to make you understand how things work and are done
                in the industry. You can showcase your skills on your resume
                with our certification proving that you can apply the knowledge
                gained in a real-world scenario.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box width={"90%"} m={"auto"} mt={15} mb={5} ref={review}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }} mb={4}>
          <Typography fontWeight={"bold"}>Reviews</Typography>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Typography>5.0</Typography>
            <Typography
              sx={{ color: "#FFA723", display: "flex", gap: "5px" }}
              variant="span"
            >
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />{" "}
            </Typography>
            <Typography fontSize={"small"}>(1 Rating)</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFFCF2",
            padding: "2rem",
            width: { xs: "100%", sm: "55%", md: "33%" },
            borderRadius: "10px",
          }}
        >
          <Box sx={{ display: "flex", gap: "20px" }}>
            <img
              src="https://www.cyberyami.com/_next/image?url=%2Fimages%2Favatar.png&w=1920&q=75"
              alt="img4"
              width={"50px"}
            />
            <Box>
              <Typography fontWeight={"bold"}>Vishal Naik</Typography>
              <Typography
                sx={{ color: "#FFA723", display: "flex", gap: "5px" }}
                variant="span"
              >
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />{" "}
              </Typography>
            </Box>
          </Box>
          <Typography mt={3}>Awsome bootcamp like very much</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }} mt={1}>
          <Button
            variant="text"
            sx={{ textTransform: "capitalize", cursor: "pointer" }}
          >
            Prev
          </Button>
          <Button
            variant="text"
            sx={{ textTransform: "capitalize", cursor: "pointer" }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OverView;
