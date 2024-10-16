import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../convex/_generated/api";
import "./index.css";
import Lottie from "react-lottie";
import animationData from "../public/multiplayer.json";

function ImpossibleQuiz() {
    const [sessionId, setSessionId] = useState(null);
    const [inviteLink, setInviteLink] = useState("");
    const createSession = useMutation(api.quiz.createSession);
    const players = useQuery(api.quiz.getPlayersInSession, { sessionId }) || [];

    const handleCreateSession = async () => {
        // Create a new session
        const newSession = await createSession({ name: "Impossible Quiz Session" });
        setSessionId(newSession._id); // Assuming newSession contains the _id

        // Generate the invite link
        const link = `${window.location.origin}/quiz/join/${newSession._id}`;
        setInviteLink(link);
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="app-container flex flex-wrap text-slate-800 w-full border-t border-gray-800">
            {/* Left Section */}
            <div className="relative flex h-screen select-none flex-col justify-center text-center md:w-3/5">
                <div className="mx-auto w-full max-w-lg rounded-lg object-cover">
                    <Lottie options={defaultOptions} />
                </div>
                <div className="mx-auto px-8 text-white">
                    <p
                        className="my-6 text-4xl font-bold leading-10"
                        style={{ fontFamily: "Pixeloid" }}
                    >
                        We&apos;ll do the{" "}
                        <span className="truncate border-b-8 border-yellow-400 font-bold text-gray-800">
                            heavy lifting
                        </span>
                    </p>
                    <p
                        className="mb-4 text-lg font-medium"
                        style={{ fontFamily: "Pixeloid" }}
                    >
                        Crafting the impossible, one journey at a time.
                    </p>
                    {/* Create Session Button */}
                    <button
                        onClick={handleCreateSession}
                        className="mt-6 rounded-full text-yellow-400 bg-gray-800 px-4 py-2 text-center text-sm font-semibold shadow-md outline-none ring-yellow-500 ring-offset-2 transition hover:bg-green-600 focus:ring-2 md:w-40"
                        style={{ fontFamily: "Pixeloid" }}
                    >
                        Create Session
                    </button>

                    {/* Display Invite Link */}
                    {inviteLink && (
                        <div className="mt-4">
                            <p className="text-lg">Invite Link:</p>
                            <div className="bg-gray-100 p-2 rounded">
                                <span className="text-sm">{inviteLink}</span>
                            </div>
                        </div>
                    )}

                    {/* Display Players */}
                    <ul className="mt-6 text-left">
                        {players.map(player => (
                            <li key={player._id} className="text-lg text-yellow-400">
                                {player.user_name} - Score: {player.score}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Right Section */}
            <div className="flex w-full h-screen flex-col md:w-2/5 bg-gray-800">
                <div
                    className="text-2xl font-bold pl-14 pt-8"
                    style={{ fontFamily: "Pixeloid" }}
                >
                    The Impossible Quiz Playground
                </div>
                <div className="my-auto flex max-w-screen-md flex-col justify-center px-6 md:pl-12 pt-8 sm:pt-0 md:justify-start">
                    <p
                        className="text-center text-2xl font-bold md:text-left"
                        style={{ fontFamily: "Pixeloid" }}
                    >
                        Are you ready to solve the impossible?
                    </p>
                    <div className="flex flex-col items-stretch pt-6 pb-8 md:pt-8">
                        <div className="grid grid-col-2 gap-x-4 gap-y-3 sm:grid-cols-2">
                            <div className="block">
                                <p
                                    className="mb-1 mt-2 text-xl text-gray-600"
                                    style={{ fontFamily: "Pixeloid" }}
                                >
                                    Interactive Playground
                                </p>
                                <p className="text-base text-gray-700">
                                    Use the CheerpX-powered bash terminal below to complete the challenges and solve the quiz tasks. Type your commands and see the output live!
                                </p>
                                <div className="mt-6 bg-gray-900 p-4 rounded-lg h-64 text-white">
                                    {/* Placeholder for CheerpX-powered terminal */}
                                    <p className="font-mono">$ bash terminal (CheerpX)</p>
                                    <p className="font-mono">_</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImpossibleQuiz;