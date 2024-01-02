import { useState } from 'react';
import { Routes, Route } from "react-router";
import { MainPage } from "./pages/main-page/main-page.jsx";
import { ProfilePage } from "./pages/profile-page/profile-page.jsx";
import { CoursePage } from "./pages/course-page/course-page.jsx";
import { AuthPage } from "./pages/auth-page/auth-page.jsx";
import { WorkoutPage } from "./pages/workout-page/workout-page.jsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route  path="/" element={<MainPage theme='dark'/>} />
            <Route  path="/auth" element={<AuthPage theme='dark'/>} />
            <Route  path="/course/:id" element={<CoursePage theme='light'/>} />
            <Route  path="/profile" element={<ProfilePage/>} />
            <Route  path="/workout/" element={<WorkoutPage theme='light' isLoggedIn = {true}/>} />
        </Routes>
    )
}