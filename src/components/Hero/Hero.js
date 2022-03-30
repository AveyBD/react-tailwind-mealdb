import React from "react";
import video from "../../assets/Videos/video-1.mp4";

const Hero = () => {
  return (
    <div>
      <div>
        <video className="-z-10 fixed" src={video} autoPlay loop muted></video>
        <div className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-white text-center text-6xl font-bold">
            Enjoy Your Moment
          </h1>
          <p className="text-gray-200 text-center font-medium mt-2">
            Live the moment with your favorite person!
          </p>
          <div>
            <button className="px-4 py-2 mx-auto bg-white hover:bg-green-200 border-gray-500 border rounded mt-6">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
