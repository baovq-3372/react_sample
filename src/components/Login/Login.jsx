import { Box, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/actions";
import {jwtTokenSelector} from "../../redux/selector";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();
  const accessToken = useSelector(jwtTokenSelector);

  const navigate = useNavigate()

  useEffect(() => {
    if(accessToken) navigate('/')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken])

  function loginOnclick(){
    dispatch(login({email: email, password: password}))
  }

  return (
    <div className="login-container">
      <div className="login-main">
        <div className="login-logo">TRAVEL SUN *</div>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "360px", boxSizing: "border-box" }, }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Email"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            autoComplete="current-password"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            id="loginButton"
            variant="contained"
            onClick={loginOnclick}
          >
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Login;
