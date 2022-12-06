import {ThemeProvider} from "styled-components";
import {themes} from "./assets/theme/themes.js";
import {useState} from "react";
import {Main} from "./components/Main.jsx";
import {Route, Routes} from "react-router-dom";
import {Post} from "./components/post/Post.jsx";
import {Posts} from "./components/post/Posts.jsx";
import {SignInPage} from "./components/common/signin-login/SignInPage.jsx";
import {LoginPage} from "./components/common/signin-login/LoginPage.jsx";
import {useAuthRedirect} from "./hooks/useAuthRedirect.js";
import './App.css'
import {useAppInit} from "./hooks/useAppInit.js";
import {PATH} from "./routes.js";
import {CreatePostPage} from "./components/CreatePostPage.jsx";
import {Snackbar} from "./components/common/Snackbar.jsx";

function App() {
    const [theme, setTheme] = useState("dark")

    useAppInit();

    useAuthRedirect();

    return (
        <ThemeProvider theme={themes[theme]}>
            <Snackbar/>
            <Routes>
                <Route path={PATH.DEFAULT} element={<Main/>}>
                    <Route index element={<Posts/>}/>
                    <Route path={PATH.POST} element={<Post/>}/>
                    <Route path={PATH.LOGIN} element={<LoginPage/>}/>
                    <Route path={PATH.SIGN_IN} element={<SignInPage/>}/>
                    <Route path={PATH.CREATE_POST} element={<CreatePostPage/>}/>
                </Route>
            </Routes>
        </ThemeProvider>
    )
}

export default App
