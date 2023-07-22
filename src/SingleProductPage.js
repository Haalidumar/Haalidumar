import axios from "axios"
import { useState } from "react"    
import { useEffect } from "react"
import Header from "./Header"
import { useParams } from "react-router-dom"
import Addtocart from "./Addtocart"



function Singleproduct(){

    const {link} = useParams();
    const {id} = useParams();

    const [data, setdata] = useState([])

    useEffect(() => {


        axios.get(`http://localhost:3004/${link}/${id}`)
            .then(
                (res) => {
                    setdata(res.data)

                }
            )
            .catch(() => {
                setdata([]);
                
            })

    }, [])


    return(<>

    <Header/>

    <div className="Homepage2">

        {

            <div className="singelproduct">
              
            <img className="singleimg" src ={data.image}/>
            <div className="singleproductcontent">
                <h1>{data.Model}</h1>
            <h2>{data.Rate}</h2>
            <p className="des">{data.Description}</p>
            <div className="spbuttons">
            <button className=" button">Buy</button>
            <Addtocart product={data.Model} img={data.image}  />
            </div></div>
            </div>
            
        }
    </div>

    
    </>)
}

export default Singleproduct;