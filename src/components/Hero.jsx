import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4"

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-10 lg:mt-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide">
            Spectra Reality build tools
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                {" "}
                for developers
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Unlock your creativity and build your VR app ideas with our easy-to-use development tools. Start now and transform your imagination into immersive experiences!
      </p>
        <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Hero