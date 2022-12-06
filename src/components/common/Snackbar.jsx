import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setAppError} from "../../store/slices/authSlice.js";

const StyledSnackBar = styled.span`
  position: absolute;
  bottom: 10px;
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: rgb(211 47 47);
  color: white;
  z-index: 99;
  animation: fadeIn ease 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }

  }
`

export const Snackbar = (props) => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.auth.error)

    setTimeout(() => {
        dispatch(setAppError(null))
    }, 3000)

    if (!error) {
        return null
    }
    return (
        <StyledSnackBar {...props}>
            {error}
        </StyledSnackBar>
    );
};

