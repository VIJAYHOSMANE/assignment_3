import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { Button } from "@mui/material";
import "../App.css";

// const Login = () => {
//   const location: any = useLocation();
//   console.log("Location is", location);

function RowRadioButtonsGroup() {
  return (
    <FormControl className="gender">
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="Male"
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

function Login() {
  return (
    <Container>
      <div className="MainMenu">
        <div className="menu">
          <div>
            <h1 className="heading">Enter your details</h1>
            <input
              style={{ marginBottom: "30px" }}
              className="input"
              type="Text"
              placeholder="Enter your Name"
            ></input>
            <input
              style={{ marginBottom: "30px" }}
              className="input"
              type="Text"
              placeholder="Enter your Email Id"
            ></input>
            <RowRadioButtonsGroup />
            <Link to="/">
              <Button
                style={{
                  marginTop: "30px",
                  backgroundColor: "#023047",
                  color: "whitesmoke",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="menubutton"
                fullWidth
                variant="contained"
                onClick={() => {
                  // setGameState("quiz");
                }}
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
// };

export default Login;
