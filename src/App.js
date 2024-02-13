import { RouterProvider,createBrowserRouter } from "react-router-dom";
import './App.css';
import MasterLayout from "./Component/Masterlayout/Masterlayout";
import Home from "./Component/Home/Home";
import Notfoundpage from "./Component/Notfound/Notfoundpage";
import About from "./Component/About/About";
import Portfilio from "./Component/Portfilio/Portfilio";
import Contact from "./Component/Contact/Contact";


const router=createBrowserRouter([
  {path:'',element:<MasterLayout/>,
 children:[
    {path:'',element:<Home/>},
    {path:'*',element:<Notfoundpage/>},
    {path:'About',element:<About/>},
    {path:'Portfilio',element:<Portfilio/>},
    {path:'Contact',element:<Contact/>},
  ]
}])
function App() {
  
  return (<>
  
    <div className='container'>
    <div className="row justify-content-center align-items-center g-2">
    </div>
    
    
    </div>
    <RouterProvider router={router}/>
    </>
  
  );
}

export default App;
