/* eslint-disable no-undef */
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
const AdmissionForm = () => {
    const { user } = useContext(AuthContext)
    const data=useLoaderData()
    const {college_name}=data
    const [collegeNameInput, setCollegeNameInput] = useState(college_name);
    const [useDefaultValue, setUseDefaultValue] = useState(true);
    const handleCollegeNameChange = (event) => {
        setCollegeNameInput(event.target.value);
        setUseDefaultValue(false);
    };
    const handleAddInfo = (event) => {
        event.preventDefault()
        const form = event.target
        const userName = user ? user.displayName : form.userName.value
        const email = user ? user.email : form.email.value;
        const subject = form.subject.value
        const number = form.number.value
        const address = form.address.value
        const date = form.date.value
        const photo=form.photo.value
        const collegeName=form.collegeName.value
        const review = { userName, email, subject,collegeName, number, address, date,photo}
        fetch('http://localhost:5000/student-admissions', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset()
                    Swal.fire({
                        title: 'Congratulation!',
                        text: 'You have added a product',
                        icon: 'success',
                        confirmButtonText: 'Go Back'
                    })
                }
            })


    }

    return (
        <div>
            <div>
                <div className='bg-cyan-600 p-4 mt-12'>
                    <h1 className="text-2xl font-bold text-center">Rating Your College</h1>
                    <form onSubmit={handleAddInfo} >
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='userName' defaultValue={user?.displayName} placeholder="seller-name" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Select Subject</span>
                                </label>
                                <select name="subject" className="select select-bordered w-full max-w-xs" required>
                                    <option value="" disabled>Choose Subject</option>
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Biology">Biology</option>
                                    <option value="Psychology">Psychology</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Business Administration">Business Administration</option>
                                    <option value="English Literature">English Literature</option>
                                    <option value="History">History</option>
                                    <option value="Mathematics">Mathematics</option>
                                    <option value="Physics">Physics</option>
                                    <option value="Chemistry">Chemistry</option>
                                    <option value="Sociology">Sociology</option>
                                    <option value="Economics">Economics</option>
                                    <option value="Political Science">Political Science</option>
                                    <option value="Environmental Science">Environmental Science</option>
                                    <option value="Education">Education</option>
                                    <option value="Fine Arts">Fine Arts</option>
                                    <option value="Music">Music</option>
                                    <option value="Philosophy">Philosophy</option>
                                    <option value="Communications">Communications</option>
                                </select>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name='address' placeholder="provide your address" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" name='number' placeholder="Enter Your Phone Number" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Select You Birth Date</span>
                                </label>
                                <input type="date" name='date' placeholder="description" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Enter A Image Link </span>
                                </label>
                                <input type="url" name='photo' placeholder="description" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">College Name</span>
                                </label>
                                <input  type="text"   name='collegeName' value={useDefaultValue ? college_name : collegeNameInput} placeholder="college-name"  className="input input-bordered w-full max-w-xs"onChange={handleCollegeNameChange} required/>
                            </div>
                        </div>
                        <input type="submit" className='btn btn-block mt-4' value="Submit Now" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AdmissionForm;