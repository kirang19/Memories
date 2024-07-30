import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from "@material-ui/core";
import Auth from "./components/Auth/auth.js";
import Home from "./components/Home/home.js";
import Navbar from "./components/Navbar/navbar.js";

const App = () => {
    return <>
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" exact Component={Home}></Route>
                    <Route path="/auth" exact Component={Auth}></Route>
                </Routes>
            </Container>
        </BrowserRouter>
    </>
};
export default App;