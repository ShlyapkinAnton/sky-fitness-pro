import { Routes, Route } from "react-router";
import { MainPage } from "./pages/main-page/main-page.jsx";
import { ProfilePage } from "./pages/profile-page/profile-page.jsx";
import { WorkoutPage } from "./pages/workout-page/workout-page.jsx";
import { AuthPage } from "./pages/auth-page/auth-page.jsx";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route  path="/" element={<MainPage theme='dark' />} />
            <Route  path="/profile" element={<ProfilePage />} />
            <Route  path="/auth" element={<AuthPage theme='dark' />} />
            
            <Route  path="/workout/yoga" element={<WorkoutPage theme='light' contentKey='yoga' isShowButton={false}/>} />
            <Route  path="/workout/stretching" element={<WorkoutPage theme='light' contentKey='stretching' isShowButton={false}/>} />
            <Route  path="/workout/dance-fitness" element={<WorkoutPage theme='light' contentKey='danceFitness' isShowButton={false}/>} />
            <Route  path="/workout/step-aerobics" element={<WorkoutPage theme='light' contentKey='stepAerobics' isShowButton={false}/>} />
            <Route  path="/workout/bodyflex" element={<WorkoutPage theme='light' contentKey='bodyflex' isShowButton={false}/>} />
        </Routes>
    )
}