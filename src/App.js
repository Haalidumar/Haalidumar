import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import SeemorePage from "./SeemorePage";
import Singleproduct from "./SingleProductPage";
import Cart from "./Cart";
import Store from "./Redux/Store";
import { Provider } from "react-redux";

function  App() {
  return (
    <>


    

<Provider store={Store}>
        <Router>
            <Routes>
            
            <Route exact path="/" element={<RegisterPage/>} />
            
            <Route path="/Login" element={<LoginPage/>} />

            <Route path="/Login/HomePage" element={<HomePage/>} />

            <Route path="/Login/HomePage/:link" element={<SeemorePage />}/>  

            <Route path="/Login/HomePage/cart" element={<Cart />}/>

            <Route path={`/Login/HomePage/:link/:id`} element={<Singleproduct />}/>

            

            </Routes>
        </Router>
        </Provider>

    </> 
    
  )
};




export default App;



