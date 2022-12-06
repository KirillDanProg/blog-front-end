import React from 'react';
import {Button, TextField} from "./common";
import styled from "styled-components"

const StyledCreatePostPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;

  .field {
    width: 90%;
  }

  .textarea {
    width: 90%;
    min-height: 100px;
  }
`
export const CreatePostPage = () => {

    return (
        <StyledCreatePostPage>

            <TextField type="text"
                       className="field"
                       placeholder="Заголовок"
            />

            <textarea
                className="textarea"
            >

            </textarea>

            <Button>
                Опубликовать
            </Button>
        </StyledCreatePostPage>
    )
};

