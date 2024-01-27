import { useEffect } from 'react';
import { Routes, Route } from "react-router";
import { MainPage } from "./pages/main-page/main-page.jsx";
import { ProfilePage } from "./pages/profile-page/profile-page.jsx";
import { CoursePage } from "./pages/course-page/course-page.jsx";
import { AuthPage } from "./pages/auth-page/auth-page.jsx";
import { WorkoutPage } from "./pages/workout-page/workout-page.jsx";
import { ProtectedRoute } from './components/protected-route/protectedRoute'

export const AppRoutes = ({ user, setUser }) => {
    return (
        <Routes>
            <Route  path="/" element={<MainPage theme='dark'/>} /> 
            <Route  path="/auth" element={<AuthPage theme='dark' setUser={setUser}/>} />
            <Route  path="/course/:id" element={<CoursePage theme='light'/>}/>
            
            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route  path="/profile" element={<ProfilePage/>} />
                <Route  path="/profile/workout/:courseId/:id" element={<WorkoutPage theme='light' />} />
            </Route>
        </Routes>
    )
}