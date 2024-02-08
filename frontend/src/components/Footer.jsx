

const Footer = () => {
    return (
      <>
  <div className="mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between
   text-sm md:text-md py-8 max-[640px]:items-center max-[640px]:space-x-0 max-[820px]:space-x-4">
         <div className="flex flex-col text-white max-[640px]:items-center">
           <a href="#">Popular Posts</a>
           <a href="#">Most viewed</a>
           <a href="#">Readers Choice</a>
         </div>
  
         <div className="flex flex-col text-white max-[640px]:items-center">
           <a href="#">Forum</a>
           <a href="#">Support</a>
           <a href="#">Recent Posts</a>
         </div>
  
         <div className="flex flex-col text-white max-[640px]:items-center">
           <a href="#">Privacy Policy</a>
           <a href="#">About Us</a>
           <a href="#">Terms & Conditions</a>
           <a href="#">Terms of Service</a>
         </div>
      </div>
      <p className="py-2 pb-6 text-center text-white bg-black text-sm">All rights reserved @Travel Tales 2024</p>
      </>
      
    )
  }
  
  export default Footer