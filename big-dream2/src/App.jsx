import { Box } from "@mui/material";
import "./App.css";
import NavBar from "./Components/NavBar";
import SkillUp from "./Components/SkillUp";
import OverView from "./Components/OverView";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Box>
        <SkillUp />
        <OverView />
        <Footer />
      </Box>
    </>
  );
}

export default App;
