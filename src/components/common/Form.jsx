import React from 'react';
import styled from "styled-components"
import {TextField} from "./TextField";
import {Button} from "./Button";
import {Flex} from "./Flex.jsx";
import {device} from "../../assets/mediaqueries/media.js";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authLogin, authRegister} from "../../store/slices/authSlice.js";
import {CustomLink} from "./CustomLink.jsx";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

const StyledForm = styled.form`
  position: relative;
  top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  
  .loginTitle {
    margin-bottom: 20px;
    border-radius: 4px;
    padding: 4px 10px;
    background-color: dodgerblue;
  }

  .error {
    align-self: start;
    color: orangered;
  }

  @media ${device.tablet} {
    width: 350px;
    padding: 30px;
  }
`
export const Form = ({formType}) => {

    const dispatch = useDispatch()

    const schema = yup.object({
        userName: yup.string().min(3, "Имя должно содержать минимум 3 символа"),
        email: yup.string().email().required("Обязательное поле"),
        password: yup.string().min(4, "Пароль должен содержать минимум 4 символа").required("Обязательное поле")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    // todo: fix undefined
    const onSubmit = data => {
        if (formType === "signin") {
            data && dispatch(authRegister(data))
        }
        if (formType === "login") {
            data && dispatch(authLogin(data))
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>

            {
                formType === "signin" &&
                <>
                    <TextField {...register("userName")}
                               placeholder="User name"/>
                    {errors.userName && <span className="error">* {errors.userName.message}</span>}
                </>
            }


            <TextField  {...register("email")}
                        placeholder="email"/>
            {errors.email && <span className="error">* {errors.email.message}</span>}

            <TextField {...register("password")}
                       placeholder="password"
                       type="password"
            />
            {errors.password && <span className="error">* {errors.password.message}</span>}

            <Flex direction="row" justify="center">
                {
                    formType === "login"
                        ? <Button callback={onSubmit} variant="contained">
                            Войти
                        </Button>
                        : <Flex direction="column" gap="10px" margin="15px 0 0">
                            <Button callback={onSubmit} variant="contained">
                                Зарегистрироваться
                            </Button>
                            <CustomLink path="/login" text="Уже есть аккаунт?"/>
                        </Flex>
                }
            </Flex>
        </StyledForm>
    )
};
