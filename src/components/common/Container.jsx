import styled from "styled-components";
import {device} from "../../assets/mediaqueries/media.js";


export const StyledContainer = styled.div`
  position: relative;
  display: grid;
  min-height: calc(100vh - 70px);
  margin: 0 auto;
  padding: 0 10px;

  @media ${device.tablet} {
    place-items: center;
    width: ${props => props.width};
  }
`

export const Container = (props) => {
    return (
        <StyledContainer {...props}/>
    );
};

