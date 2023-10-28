import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage.jsx";
import { Layout } from "../layouts/AppLayout.jsx";
import { LoginPage } from "../pages/login/LoginPage.jsx";
import PaginaSemPermissao from '../pages/semPermissao/PaginaSemPermissao.jsx';
import CadastroUsuarioPage from "../pages/cadastros/usuarios/CadastroUsuariosPage.jsx";
import PrivateRoute from "./privateRoute/PrivateRoute.jsx";
import { CadastroPacientePage } from "../pages/cadastros/pacientes/CadastroPacientePage.jsx";
import { CadastroConsultaPage } from "../pages/cadastros/consultas/CadastroConsultaPage.jsx";


export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/cadastro-usuario" element={<CadastroUsuarioPage/>}/>
                    <Route path="/cadastro-paciente" element={<CadastroPacientePage/>}/>
                    <Route path="/cadastro-consulta" element={<CadastroConsultaPage/>}/>
                </Route>
            </Routes>
        </Router>
    )
}