import image1 from '../../assets/profesorone.avif'
import image2 from '../../assets/profesortwo.avif'
import image3 from '../../assets/profesorthree.avif'

const Administration = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-28'>
            {/* 1st */}
            <div className=' sm:flex-1 lg:flex'>
                <img className='h-64' src={image1} alt="" />
                <div>
                    <h1 className='text-2xl font-bold underline underline-offset-2'>Professor Dr. Khondoker Bazlul Hoque</h1>
                    <p className='text-slate-400'>Honorary Professor  Dept. of International Business,University of Texas& Chairman Governing Body,Virginia</p>
                </div>
            </div>
            {/* 2nd */}
            <div className='sm:flex-1 lg:flex gap-8'>
                <img className='h-64' src={image2} alt="" />
                <div>
                    <h1 className='text-2xl font-bold underline underline-offset-2'>Professor Dr. Harun-Or-Rashid</h1>
                    <p className='text-slate-400'>Principal - Texas College</p>
                </div>
            </div>
            {/* 3nd */}
         <div className=''>
         <div>
                <img className='h-64' src={image3} alt="" />
                <div>
                    <h1 className='text-2xl font-bold underline underline-offset-2'>Professor Anjuman Ara</h1>
                    <p className='text-slate-400'>Vice Principal (Admin & Academic) Texas College </p>
                </div>
            </div>
         </div>
        </div>
    );
};

export default Administration;