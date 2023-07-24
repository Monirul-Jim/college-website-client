import { useContext, useEffect, useState } from "react";
import MyCollegeInfo from "./MyCollegeInfo";
import { AuthContext } from "../Provider/AuthProvider";

const MyCollege = () => {
    const [categories,setCategories]=useState([])
    const {user}=useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/get-admission-info?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h1 className="text-2xl font-semibold mt-8 text-center" >All Information You Added To Your College</h1>
            <div>
                {
                    categories.map(category=><MyCollegeInfo key={category._id} category={category}></MyCollegeInfo>)
                }
            </div>
        </div>
    );
};

export default MyCollege;