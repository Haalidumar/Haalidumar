import { useDispatch, useSelector } from "react-redux";
import { selectCount,inc,dec } from "./Redux/Reducer";

import axios from "axios";


function Addtocart(p){

    const dispatch = useDispatch();

    

    

    return(<>

    



    <button className="button" onClick={()=>dispatch(inc(),axios.post('http://localhost:3005/cart',{model:p.product,image:p.img}))}>Add to cart</button>
    
    </>)
}

export default Addtocart;

