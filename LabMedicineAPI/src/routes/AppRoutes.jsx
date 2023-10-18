import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { Layout } from "../layouts/AppLayout.jsx";
import { LoginPage } from "../pages/login/LoginPage";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<HomePage/>}/>
                </Route>
            </Routes>
        </Router>
    )
}