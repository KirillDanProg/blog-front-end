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

function App() {
    const [theme, setTheme] = useState("dark")

    useAppInit();

    useAuthRedirect();

    return (
        <ThemeProvider theme={themes[theme]}>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Posts/>}/>
                    <Route path="posts/:id" element={<Post/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="signin" element={<SignInPage/>}/>
                </Route>
            </Routes>
        </ThemeProvider>
    )
}

export default App
