import profile from "../assets/images/pp.jpeg";

export default function CardProfile() {
  return (
    <div className="h-fit w-fit max-sm:w-fit p-3 rounded-3xl max-sm:mx-auto inset-shadow-md-cus">
      <img src={profile} alt="profile-picture" className="w-xs rounded-2xl" />
      <div className="px-5 pb-1">
        <h2 className="text-xl mt-5 font-medium">Spesialization</h2>
        <h3 className="text-lg mb-5 ">Front-end Developer</h3>
        <h2 className="text-xl font-medium">Address</h2>
        <h3 className="text-lg ">Bogor, Jawa barat, Indonesia</h3>
        <a
          href="#contact"
          className="mt-5 w-full py-2 px-3 mx-auto inline-block bg-linear-to-r animate-rotates2 rounded-2xl text-black font-semibold"
        >
          Let's Talk
        </a>
      </div>
    </div>
  );
}
