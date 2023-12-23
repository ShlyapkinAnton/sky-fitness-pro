import { Routes, Route } from "react-router";
import { MainPage } from "./pages/main-page/main-page.jsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route  path="/" element={<MainPage />} />
        </Routes>
    )
}