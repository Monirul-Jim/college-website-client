import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
    const [colleges,setColleges]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/admission-college')
        .then(res=>res.json())
        .then(data=>setColleges(data))
    },[])
    return (
        <div>
            <h1 className="text-xl font-bold text-center mt-4">All The Renowned College You Find Here</h1>
            <div className="gap-32">
                {
                    colleges.map(college=>(
                            <li className="space-x-11" key={college._id} >{college.college_name} <Link to={`/add-college/${college._id}`}>----<button  className="hover:bg-blue-400  px-2">Select College</button></Link> </li>

                    ))
                }
            </div>
            
        </div>
    );
};

export default Admission;