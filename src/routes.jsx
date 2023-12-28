import { Routes, Route } from "react-router";
import { MainPage } from "./pages/main-page/main-page.jsx";
import { ProfilePage } from "./pages/profile-page/profile-page.jsx";
import { CoursePage } from "./pages/course-page/course-page.jsx";
import { AuthPage } from "./pages/auth-page/auth-page.jsx";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route  path="/" element={<MainPage theme='dark' />} />
            <Route  path="/profile" element={<ProfilePage />} />
            <Route  path="/auth" element={<AuthPage theme='dark' />} />
            
            <Route  path="/course/yoga" element={<CoursePage theme='light' contentKey='yoga' />} />
            <Route  path="/course/stretching" element={<CoursePage theme='light' contentKey='stretching' />} />
            <Route  path="/course/dance-fitness" element={<CoursePage theme='light' contentKey='danceFitness' />} />
            <Route  path="/course/step-aerobics" element={<CoursePage theme='light' contentKey='stepAerobics' />} />
            <Route  path="/course/bodyflex" element={<CoursePage theme='light' contentKey='bodyflex' />} />
        </Routes>
    )
}