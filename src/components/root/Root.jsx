import { Outlet } from "react-router";
import Header from "../header/Header";



const Root = () => {
    return (
        <div>
            <Header></Header>
           <Outlet></Outlet> 
        </div>
    );
};

export default Root;