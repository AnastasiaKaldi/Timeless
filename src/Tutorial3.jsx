import "./index.css";
import TheGif from "../dist/assets/test.gif";
import { useState } from "react";
import SecondTutorialPage from "./Congratulations";

function ThirdTutorial() {
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
          This is another another tutorial
        </div>

        <div className="my-auto flex max-w-screen-md flex-col justify-center px-6 md:pl-12 pt-8 pt-5 sm:pt-0 md:justify-start">
          <div className="flex flex-col items-stretch pt-6 pb-8 md:pt-8">
            <div className="">
              <div className="block">
                <p
                  className="mb-1 mt-2 text-xl  text-gray-600"
                  style={{ fontFamily: "Pixeloid" }}
                >
                  Tutorial Section
                </p>
                <p
                  className="text-base text-gray-700"
                  style={{ fontFamily: "Pixeloid" }}
                >
                  In a small coastal village nestled between towering cliffs and
                  the sea, the days passed slowly, with the rhythm of the waves
                  dictating the flow of life. Fishermen set sail at dawn, their
                  boats slicing through the morning mist as the scent of salt
                  and fish mingled in the air. The village itself was a mosaic
                  of colorful cottages, their roofs adorned with patches of
                  moss, while narrow cobbled streets wound between them like
                  veins. At the heart of the village was an ancient oak tree,
                  its sprawling branches providing shade for the central square.
                  Beneath it, villagers would gather, sharing stories passed
                  down through generations. There was a legend, whispered by
                  elders, of a treasure buried deep within the cliffs, said to
                  be guarded by the spirits of sailors lost at sea. Though many
                  had searched for it, none had ever returned with more than a
                  handful of sea-polished stones.
                </p>
                <div className="flex justify-center py-6">
                  <img
                    src={TheGif} // Use the correct path to your GIF (this assumes it's in the public folder)
                    alt="Tutorial GIF"
                    className="max-w-full h-auto" // Adjust styling as needed
                  />
                </div>
                <button
                  type="button"
                  className="mt-6 rounded-full text-yellow-400 bg-gray-800 px-4 py-2 text-center text-sm font-semibold shadow-md outline-none ring-yellow-500 ring-offset-2 transition hover:bg-purple-600 focus:ring-2 md:w-40"
                  style={{ fontFamily: "Pixeloid" }}
                  onClick={() => setShowTutorial(true)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdTutorial;
