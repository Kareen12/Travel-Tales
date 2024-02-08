import backgroundImage from '../assets/aboutimg66.jpg'

const AboutPage = () => {
  return (
    <div className=" pt-16" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="container mx-auto py-8 pt-16">
        <h1 className="text-4xl lg:text-7xl font-bold mb-8  text-center text-shadow-lg text-gray-50 max-[640px]:text-wrap
        ">Welcome To Travel Tales</h1>
        <div className="max-w-3xl mx-auto text-lg lg:text-xl italic text-center text-gray-50 leading-7">
            Travel Tales is a platform where travelers from all around the world can
            come together to share their travel experiences. Whether you're an
            avid globetrotter or someone planning your first trip, Travel Tales
            has something for everyone.
<br/>  <br/>  
            On Travel Tales, you can read experiences of travelers'
            adventures, discover hidden gems, and get insider tips on destinations
            from people who have been there.
            <br/><br/>  
            Whether you're seeking inspiration for your next adventure or want to
            share your own travel wisdom, Travel Tales is the perfect place to
            make destination choice from.
            <br/><br/>
            Explore the posts below!!
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
