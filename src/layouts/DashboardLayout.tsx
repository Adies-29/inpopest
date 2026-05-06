import { Link, Outlet} from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout(){

    const logout = useAuthStore((state) => state.logout )
    

    // fungsi logout
    const handleLogout = () => {
        logout();
        
    };

    return(
        <div className="flex w-full min-h-screen">
            {/* kiri */}
            <div className="bg-green-200 w-64 flex flex-col justify-between p-4">

                <div>
                    <h1 className="font-bold text-2xl text-center text-green-950">Inpopest</h1>
                </div>

                <div>
                    <ul className="flex flex-col gap-6 w-full">
                        <li>
                            <Link to="/dashboard" className="">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/category">Category</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/pembicara">Pembicara</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/event">Event</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button 
                    type="button" 
                    onClick={handleLogout}
                    className="w-full p-4 bg-red-800 text-white font-semibold rounded-2xl cursor-pointer hover:bg-amber-900">
                        logut
                    </button>
                </div>
          
            </div>
            {/* KANAN */}
            <div className="bg-blue-200 p-4 w-full">
                <Outlet/>
            </div>
         
        </div>

    );
}