
import './Donation.css'
import { FaArrowRight } from "react-icons/fa";
import image1 from '../assets/7.jpg'
import image2 from '../assets/8.jpg'
import image3 from '../assets/9.jpg'


const NewSection = () => {
    return (

        <section className=' mb-10'>
            <div className='backgroundImage h-96 mt-8 mb-8'>
                <div className='flex flex-wrap bg-gradient-to-r from-[#213d9bb2] to-[#2b1e1e71] h-full lg:flex lg:justify-around lg:items-center md:flex md:justify-around md:items-center text-2xl   justify-center items-center  '>
                    <div className='p-5'>
                        <h4 className='text-[#ffd000] text-sm'>JOIN PROGRAM</h4>
                        <h1 className='lg:text-4xl text-2xl text-center text-white font-bold'>See & Apply Our Available <br /> Join Programs</h1>

                    </div>
                    <div className='text-center'>
                        <button className='btn  btn-info text-white lg:btn md:btn '>Discover <FaArrowRight /></button>

                    </div>

                </div>
            </div>
            {/* lg:grid lg:grid-cols-3   md:grid md:grid-cols-2 grid grid-cols-1  */}

            <div className=''>
            <div className='flex flex-1 flex-wrap lg:mt-[-90px] md:mt-[-90px] lg:flex md:flex  gap-4 justify-center  items-center'>
            <div className="card card-compact border-8 border-white w-96 bg-base-100 shadow-xl">
                    <figure><img src={image1} alt="Shoes" /></figure>
                    <div className=" p-10">
                       <div className=' p-5 hover:bg-[#261749] hover:text-white'>
                       <h2 className="card-title font-bold">Non Profit Funding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, illum!</p>
    
                        <h5 className='text-[#3668d6] mt-2 hover:text-[#e5f559]' >Learn More  <span className='inline-flex my-auto'><FaArrowRight/></span></h5>
                       </div>
                       
                    </div>
                </div>
                <div className="card card-compact border-8 border-white w-96 bg-base-100 shadow-xl">
                    <figure><img src={image2} alt="Shoes" /></figure>
                    <div className=" p-10">
                       <div className=' p-5 hover:bg-[#261749] hover:text-white'>
                       <h2 className="card-title font-bold">Child Hope Funding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, illum!</p>
    
                           <h5 className='text-[#3668d6] mt-2 hover:text-[#e5f559]' >Learn More  <span className='inline-flex my-auto'><FaArrowRight/></span></h5>
                       </div>
                       
                    </div>
                </div>
                <div className="card card-compact border-8 border-white w-96 bg-base-100 shadow-xl">
                    <figure><img src={image3} alt="Shoes" /></figure>
                    <div className=" p-10">
                       <div className=' p-5 hover:bg-[#261749] hover:text-white'>
                       <h2 className="card-title font-bold">Fundraising Gain</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, illum!</p>
    
                        <h5 className='text-[#3668d6] mt-2 hover:text-[#e5f559]' >Learn More  <span className='inline-flex my-auto'><FaArrowRight/></span></h5>
                       </div>
                       
                    </div>
                </div>
            </div>
            </div>

            
        </section>
    );
};

export default NewSection;