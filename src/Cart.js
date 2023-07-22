import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


function Cart() {

    const [data, setdata] = useState([])
    
    



    useEffect(() => {
        axios.get('http://localhost:3005/cart')
            .then(
                (res) => {

                   setdata( res.data)

                }
            )
            .catch(() => {
                setdata([]);

            })


    })

    function handledelete(id) {
        axios.delete(`http://localhost:3005/cart/${id}`)
            .then(res => {
                console.log(res)
                
            })


    }


    const data2 = data.filter((obj, index) => {
        return index === data.findIndex(o => obj.model === o.model)});


    return (

        <div className="cartpage">

            {

data2.map((e) => {

                    

                    return(

                    <div className="cartitem">

                        <img className="cartimg" src={e.image} />
                        <h1>{e.model}</h1>
                        <div className="cartbuton">
                            <button>+</button>
                            <p>{0}</p>
                            <button>-</button>
                        </div>
                        <button className="button">BUY</button>
                        <button className="button" onClick={() => handledelete(e.id)}>Remove Item</button>
                    </div>
                )})
            }

        </div>
    )


}

export default Cart;