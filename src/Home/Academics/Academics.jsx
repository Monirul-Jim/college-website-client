import image1 from'../../assets/circle.png'
import image2 from'../../assets/home.png'
import image3 from'../../assets/faculty.png'
import image4 from'../../assets/department.png'
import image5 from'../../assets/staff.png'
import image6 from'../../assets/student.png'


const Academics = () => {
    return (
        <div className='bg-blue-100 grid grid-cols-2 lg:grid-cols-5 mt-8' >
            <div>
                <img className='h-16 mt-8 bg-blue-100  ' src={image2} alt="" />
                <h1 className='text-2xl text-blue-400'>230</h1>
                <p className='text-xl text-slate-500'>FOUNDED</p>
            </div>
            <div>
                <img className='h-16 mt-8 bg-blue-100 ' src={image3} alt="" />
                <h1 className='text-2xl text-blue-400'>1967</h1>
                <p className='text-xl text-slate-500'>FACULTIES</p>
            </div>
            <div>
                <img className='h-16 mt-8 bg-blue-100 ' src={image4} alt="" />
                <h1 className='text-2xl text-blue-400'>28</h1>
                <p className='text-xl text-slate-500'>DEPARTMENT</p>
            </div>
            <div>
                <img className='h-16 mt-8 bg-blue-100 ' src={image5} alt="" />
                <h1 className='text-2xl text-blue-400'>160</h1>
                <p className='text-xl text-slate-500'>ACADEMIC STAFF</p>
            </div>
            <div>
                <img className='h-16 mt-8 bg-blue-100 ' src={image6} alt="" />
                <h1 className='text-2xl text-blue-400'>24,000</h1>
                <p className='text-xl text-slate-500'>STUDENTS</p>
            </div>
        </div>
    );
};

export default Academics;