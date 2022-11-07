import logo from "./logo.svg";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Button,
  TextField,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@mui/material";

import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
