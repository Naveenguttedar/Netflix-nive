import Footer from "../components/Footer";
import { auth } from "../../firebase";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
export default function Home() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    console.log(email);
    fetchSignInMethodsForEmail(auth, email).then((signInMethods) => {
      if (signInMethods.length > 0) {
        navigate("/hero");
      } else {
        navigate("/signUp");
      }
    });
  };
  return (
    <>
      <div className="w-full font-Bebas Neue flex items-center justify-center h-screen bg-cover bg-center py-3 px-[8%] relative bg-gradient_1">
        <div className=" text-center">
          <h1 className=" font-bold   text-[3rem] leading-[3rem] md:min-w-[650px]  ">
            Unlimited movies, TV shows and more
          </h1>
          <h3 className="mb-5 text-[1.5rem] m-4  ">
            Watch anywhere. Cancel anytime.
          </h3>
          <p className="text-[1.25rem] leading-[1.5] font-[400] ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form onSubmit={handleOnSubmit} className="    mt-7 ">
            <input
              className="flex-1 bg-black mr-2 bg-opacity-30 py-4 px-8  border-gray-100 border-2  rounded-sm  text-white outline-none ml-5 "
              type="email"
              placeholder="Email address"
              required
            />
            <button
              className="bg-[#db0001] border-2 rounded-sm relative  border-[#db0001] font-bold  outline-none text-white cursor-pointer py-4 px-8  "
              type="submit"
            >
              Get Started <span>{">"} </span>
            </button>
          </form>
        </div>
      </div>
      <div className="py-12 px-[12%] ">
        <div className={row}>
          <div className="basis-1/2 mt-5 ">
            <h2 className="text-5xl mb-5 font-[600] ">Enjoy on your TV.</h2>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="basis-1/2 mt-5 ">
            <img
              className="w-[90%] block m-auto"
              src="/images/feature-1.png"
              alt="feature-1"
            />
          </div>
        </div>
        <div className={row}>
          <div className="basis-1/2 mt-5 ">
            <img
              className="w-[90%] block m-auto"
              src="/images/feature-2.png"
              alt="feature-2"
            />
          </div>
          <div className="basis-1/2 mt-5">
            <h2 className="text-5xl mb-5 font-[600] ">
              Download your shows to watch offline.
            </h2>
            <p>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
        <div className={row}>
          <div className="basis-1/2 mt-5">
            <h2 className="text-5xl mb-5 font-[600] ">Watch everywhere.</h2>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="basis-1/2 mt-5">
            <img
              className="w-[90%] block m-auto"
              src="/images/feature-3.png"
              alt="feature-3"
            />
          </div>
        </div>
        <div className={row}>
          <div className="basis-1/2 mt-5">
            <img
              className="w-[90%]  block m-auto"
              src="/images/feature-4.png"
              alt="feature-4"
            />
          </div>
          <div className="  basis-1/2 mt-5">
            <h2 className="text-5xl mb-5 font-[600] ">
              Create profiles for children.
            </h2>
            <p>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
const row = "flex md:flex-row flex-col items-center w-full flex-wrap py-12 ";
