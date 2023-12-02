import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  console.log(user)
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:3001/auth/login", user);
    dispatch(loginSuccess(res.data));

    return res.data;
  } catch (err) {
    console.log(err)
    dispatch(loginFailure());
  }
};
