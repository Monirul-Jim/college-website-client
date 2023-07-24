// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";

const College = () => {
    const [colleges, setColleges] = useState([])
    const [searchText, setSearchText] = useState('')
    useEffect(() => {
        fetch('http://localhost:5000/college-details')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    const handleSearch = () => {
        fetch(`http://localhost:5000/college-search/${searchText}`)


            .then(res => res.json())
            .then(data => {
                setColleges(data)
            })
    }
    return (
        <div>
            <h1 className="text-2xl text-center mt-8 font-bold mb-8">Explore Top Colleges: Your Path to Higher Education</h1>
           <div className="flex justify-center">
           <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search College Name" className="input input-bordered input-primary w-full max-w-xs" />{' '}
            <button onClick={handleSearch} className="btn btn-primary">Search</button>
           </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-6">
                {
                    colleges.map(college => <CollegeCard key={college._id} college={college}></CollegeCard>)
                }
            </div>
        </div>
    );
};

export default College;