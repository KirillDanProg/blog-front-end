import {device} from "../mediaqueries/media.js";
import styled from "styled-components"

const StyledMenu = styled.svg`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;

  path {
    fill: ${props => props.theme.subTextColor};
  }

  @media ${device.tablet} {
    display: none;
  }
`

export const MenuBurger = ({toggleSidebar}) => {

    const onClickHandler = () => {
        toggleSidebar(true)
    }

    return (
        <StyledMenu onClick={onClickHandler}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
            <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </StyledMenu>
    )
}