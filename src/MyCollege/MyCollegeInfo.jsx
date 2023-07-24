

const MyCollegeInfo = ({ category }) => {
    const { userName, email, subject, collegeName, number, address, date, photo } = category
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Your Name: {userName} </h2>
                    <p>Email: {email}</p>
                    <p>Subject: {subject}</p>
                   <h3>College Name: {collegeName}</h3>
                   <h4>Mobile Number: {number}</h4>
                  <div className="flex gap-8 sm:flex-1">
                    <h1>Address; {address}</h1>
                    <h1>Date: {date}</h1>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default MyCollegeInfo;