import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { AppLayout } from "../layouts/AppLayout";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route path="/" element={<HomePage/>}/>
                </Route>
            </Routes>
        </Router>
    )
}