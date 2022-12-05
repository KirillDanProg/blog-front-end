import React from 'react';
import {Title} from "../common/Title.jsx";
import {Flex} from "../common/Flex.jsx";
import {PostText} from "./PostText.jsx";
import styled from "styled-components"
import {PostImage} from "./PostImage.jsx";
import defaultImage from "../../assets/img/default-image.svg"
import {device} from "../../assets/mediaqueries/media.js";
import {Link, useParams} from "react-router-dom";
import {CustomLink} from "../common/CustomLink.jsx";

const StyledPostContainer = styled.div`
  width: 80%;
  padding: 12px;
  background-color: ${props => props.theme.subBackground};
  
  @media ${device.tablet} {
    width: 30%;
  }
`
export const PostContainer = ({post}) => {

    return (
        <StyledPostContainer>

            <Flex direction="column">

                <PostImage src={post.imageUrl || defaultImage}/>

                <Title value={post.title}/>

                <PostText text={post.text}/>

                <CustomLink path={`/posts/${post._id}`}  text="читать"/>

            </Flex>

        </StyledPostContainer>

    );
};

