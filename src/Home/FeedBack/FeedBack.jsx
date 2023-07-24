import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const FeedBack = () => {
    const {user}=useContext(AuthContext)
    const handleAddInfo = (event) => {
        event.preventDefault()
        const form = event.target
        const photo = form.photo.value
        const sellerName =  user ? user.displayName : form.sellerName.value
        const email = user ? user.email : form.email.value;
        const rating =parseFloat(form.rating.value)
        const description = form.description.value
        const selectedOption = form.selectToy.options[form.selectToy.selectedIndex].value;
        const review = { photo, sellerName, email, rating, description, selectedOption }
        fetch('http://localhost:5000/review-collection', {
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
                <div className='bg-cyan-600 p-4 mt-12'>
                    <h1 className="text-2xl font-bold text-center">Rating Your College</h1>
            <form onSubmit={handleAddInfo} >
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Profile Picture Link</span>
                        </label>
                        <input type="url" defaultValue={user?.photoURL} name='photo' placeholder="Photo Url" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='sellerName' defaultValue={user?.displayName} placeholder="seller-name" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Give Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="rating out of five" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Write Something About College</span>
                        </label>
                        <input type="text" name='description' placeholder="description" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="relative mt-4">
                    <span className="label-text">Please Choose Your College</span>
                        <select name='selectToy' className=" w-25 appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500">
                            <option>University of Notre Dame</option>
                            <option>University of Tennessee</option>
                            <option>Ohio State university</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <input type="submit" className='btn btn-block mt-4' value="Give Feedback" />
            </form>

        </div>
        </div>
    );
};

export default FeedBack;