import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Footer from './../Footer/Footer';


export default function Layout() {
  return (
   <>
   <div className="md:grid md:grid-cols-5 md:grid-rows-1 md:gap-4  min-h-screen">
    <div className="row-span-5 h-full"> <Sidebar></Sidebar></div>
    <div className="col-span-4 row-span-4 col-start-2 row-start-1"><Outlet></Outlet></div>
    <div className="col-span-4 col-start-2 row-start-5"><Footer></Footer></div>
</div>
    
    
   </>
  )
}
