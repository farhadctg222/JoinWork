
import back from '../assets/1.jpg'
import back1 from '../assets/2.jpg'
import back2 from '../assets/3.jpg'



const Carosel = () => {

  const service = [
    {
      name: '568M',
      text: 'Donation Reach'
    },
    {
      name: '168',
      text: 'Compani Donar'
    },
    {
      name: '895',
      text: 'Personal Donar'
    },
    {
      name: '487',
      text: 'Organization Apply'
    }
  ]
    return (
        <div className=''>
            <div className="carousel w-full overflow-x-auto">
  <div id="item1" className="carousel-item w-full relative ">
   
    <img src={back} className="w-full    " />
    <div className='absolute lg:top-32 p-8 w-full   bg-gradient-to-r from-[#1dfff01c] to-[#0de3ff9d] '>
        <span>Join Work</span>
            <h1 className='lg:text-6xl lg:text-wrap md:text-3xl m-5'> Announce<span className='text-[#8832f8]'> The Launch </span>Of <br />Our Join Work Program</h1>
        <p className='lg:m-5 md:m-5 hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum dolorem dolor consequuntur quas quasi sapiente illo nam aut praesentium qui dolorum, nisi, vero, ipsam ab accusamus sunt modi tempore quae ullam cupiditate in? Facere ullam ut earum. Ex incidunt sit libero tempora expedita consequuntur hic eaque </p>
        <button className="btn btn-neutral ">Join Program</button>
        <button className="btn btn-outline btn-primary ml-5">Apply Now</button>
     
    </div>
    <div className='absolute lg:bottom-32 bottom-0 lg:right-20 bg-white rounded lg:p-10 p-2 text-center'>
      <h1>Call Now</h1>
      <h3>+88 01305573617</h3>
     </div>
  </div> 
  <div id="item2" className="carousel-item w-full relative">
  <img src={back1} className="w-full " />
  <div className='absolute lg:top-32 p-8 w-full   bg-gradient-to-r from-[#1dfff01c] to-[#0de3ff9d] '>
        <span>Join Work</span>
            <h1 className='lg:text-6xl lg:text-wrap md:text-3xl m-5'> Announce<span className='text-[#8832f8]'> The Launch </span>Of <br />Our Join Work Program</h1>
        <p className='lg:m-5 md:m-5 hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum dolorem dolor consequuntur quas quasi sapiente illo nam aut praesentium qui dolorum, nisi, vero, ipsam ab accusamus sunt modi tempore quae ullam cupiditate in? Facere ullam ut earum. Ex incidunt sit libero tempora expedita consequuntur hic eaque </p>
        <button className="btn btn-neutral ">Join Program</button>
        <button className="btn btn-outline btn-primary ml-5">Apply Now</button>
     
    </div>
    <div className='absolute lg:bottom-32 bottom-0 lg:right-20 bg-white rounded lg:p-10 p-2 text-center'>
      <h1>Call Now</h1>
      <h3>+88 01305573617</h3>
     </div>
  
    </div> 
  <div id="item3" className="carousel-item w-full relative">
  <img src={back2} className="w-full " /> 
  <div className='absolute lg:top-32 p-8 w-full   bg-gradient-to-r from-[#1dfff01c] to-[#0de3ff9d] '>
        <span>Join Work</span>
            <h1 className='lg:text-6xl lg:text-wrap md:text-3xl m-5'> Announce<span className='text-[#8832f8]'> The Launch </span>Of <br />Our Join Work Program</h1>
        <p className='lg:m-5 md:m-5 hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum dolorem dolor consequuntur quas quasi sapiente illo nam aut praesentium qui dolorum, nisi, vero, ipsam ab accusamus sunt modi tempore quae ullam cupiditate in? Facere ullam ut earum. Ex incidunt sit libero tempora expedita consequuntur hic eaque </p>
        <button className="btn btn-neutral ">Join Program</button>
        <button className="btn btn-outline btn-primary ml-5">Apply Now</button>
     
    </div>
    <div className='absolute lg:bottom-32 bottom-0 lg:right-20 bg-white rounded lg:p-10 p-2 text-center'>
      <h1>Call Now</h1>
      <h3>+88 01305573617</h3>
     </div> </div> 
  
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
<div className='w-full bg-slate-950 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid grid-cols-1  text-white justify-around text-center p-5 '>
  <div  className=' mb-3'>
    <h1 className='tlg:text-5xl md:text-4xl text-3xl mb-2 text-[#f56e00]'>568M</h1>
    <p>Donation Reach</p>
  </div>
  <div className=' mb-3'>
    <h1 className='lg:text-5xl md:text-4xl text-3xl mb-2 text-[#f56e00]'>168</h1>
    <p>Company Donar</p>
  </div>
  <div className='  mb-3'>
    <h1 className='lg:text-5xl md:text-4xl text-3xl mb-2 text-[#f56e00]'>895</h1>
    <p>Personal Donar</p>
  </div>
  <div className=' mb-3'>
    <h1 className='lg:text-5xl md:text-4xl text-3xl mb-2 text-[#f56e00]'>487</h1>
    <p className=''>Organization Apply</p>
  </div>
</div>
            
        </div>   
    );
};

export default Carosel;