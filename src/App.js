import Button from "@mui/material/Button";
import "./App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Container, styled } from "@mui/material";

function App() {
  return (
    <Container>
      <br />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "blue",
          color: "red",
          ":hover": { backgroundColor: "white", color: "blue" },
        }}
        startIcon={<DeleteIcon style={{ color: "red" }} />}
      >
        Container
      </Button>

      <Container>
        <br />
        <Button variant="contained">Hiii</Button>
      </Container>
    </Container>
  );
}

export default App;
