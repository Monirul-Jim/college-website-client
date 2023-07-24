import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
    const college=useLoaderData()
     const {  alumni_events, art, student_events, research, sports, details, position, college_image, admssion } = college
    //  image, name, admission_date,_id,
    return (
        <div>
            <img className="mx-auto" src={college_image} alt="" />
            <h1 className="text-xl font-semibold">{details}</h1>
            <h2>{position}</h2>
        <h1>    <a href={alumni_events}  target="blank" className="link text-blue-600">click here</a> to see alumni events</h1>
           <h1> <a href={art}  target="blank" className="link text-blue-600">click here</a> to see art events</h1>
           <h1> <a href={student_events}  target="blank" className="link text-blue-600">click here</a> to see student events </h1>
           <h1> <a href={research}  target="blank" className="link text-blue-600">click here</a> to see research </h1>
           <h1> <a href={sports}  target="blank" className="link text-blue-600">click here</a> to see sports </h1>
           <h1> <a href={research}  target="blank" className="link text-blue-600">click here</a> to see research </h1>
           <h1> <a href={admssion}  target="blank" className="link text-blue-600">click here</a> to get admission </h1>
        </div>
    );
};

export default CollegeDetails;