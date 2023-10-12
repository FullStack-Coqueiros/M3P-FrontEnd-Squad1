import { Sidebar } from '../components/OthersComponents/Sidebar/Sidebar.jsx';
import { Toolbar } from '../components/OthersComponents/Toolbar/Toolbar.jsx';
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="App">

        <div className="SidebarBox">
            <Sidebar/> // Fazer importação do Menu
        </div>

        <div className="Main">
            <div className="Header">
                <Toolbar/>
            </div>

            <div className="Content">
                <Outlet/>
            </div>

        </div>
    </div>
  )
}
