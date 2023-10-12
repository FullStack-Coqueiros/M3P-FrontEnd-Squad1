import { Sidebar } from '../Components/OthersComponents/Sidebar/Sidebar.jsx';
import { Toolbar } from '../Components/OthersComponents/Toolbar/Toolbar.jsx';
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="App">

        <div className="SidebarBox">
            <Sidebar/>
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
