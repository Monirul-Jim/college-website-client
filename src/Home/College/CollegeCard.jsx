import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {
    const { image, name, admission_date,_id} = college

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Admission: {admission_date}</p>
                <div>
                  <Link to={`/college-details/${_id}`}><button className="btn btn-outline w-full bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">See More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;