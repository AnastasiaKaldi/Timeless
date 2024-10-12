import "./index.css";
import TheGif from "../public/congratulations.gif";
import { useState } from "react";
import SecondTutorialPage from "./HomePage";

function Congratulations() {
  const [showTutorial, setShowTutorial] = useState(false);
  if (showTutorial) {
    return <SecondTutorialPage />; // Render the tutorial when the button is clicked
  }
  return (
    <div className="app-container flex flex-wrap text-slate-800 w-full">
      {/* Left Section */}
      <div className="relative hidden h-screen select-none flex-col justify-center bg-gray-800 text-center md:flex md:w-1/3">
        <div className="mx-auto w-full max-w-lg rounded-lg object-cover"></div>
        <div className="mx-auto px-8 text-white">
          <p
            className="my-6 text-4xl font-bold leading-10"
            style={{ fontFamily: "Pixeloid" }}
          >
            This is where the the besh whill be
          </p>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex w-full flex-col md:w-2/3">
        <div
          className="text-5xl font-bold  pl-14 pt-10
"
          style={{ fontFamily: "Pixeloid" }}
        >
          Congraduations!!!!!
        </div>

        <div className="my-auto flex max-w-screen-md flex-col justify-center px-6 md:pl-12 pt-8 pt-5 sm:pt-0 md:justify-start">
          <div className="flex flex-col items-stretch pt-6 pb-8 md:pt-8">
            <div className="">
              <div className="block">
                <p
                  className="mb-1 mt-2 text-xl  text-gray-600"
                  style={{ fontFamily: "Pixeloid" }}
                >
                  Congraduations, You completed the tutorial!!!Now are you ready
                  for the ultimate challenge?
                </p>

                <div className="flex justify-center py-6">
                  <img
                    src={TheGif}
                    alt="Tutorial GIF"
                    className="max-w-full h-auto"
                  />
                </div>
                <button
                  type="button"
                  className="mt-6 rounded-full text-yellow-400 bg-gray-800 px-4 py-2 text-center text-sm font-semibold shadow-md outline-none ring-yellow-500 ring-offset-2 transition hover:bg-purple-600 focus:ring-2 md:w-40"
                  style={{ fontFamily: "Pixeloid" }}
                  onClick={() => setShowTutorial(true)}
                >
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Congratulations;
