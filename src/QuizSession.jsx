// QuizSession.jsx

import { useQuery } from "convex/react";
import { useParams } from "react-router-dom";
import { api } from "../convex/_generated/api";
import Lottie from "react-lottie";
import animationData from "../public/multiplayer.json";

function QuizSession() {
    const { sessionId } = useParams();
    const players = useQuery(api.quiz.getPlayersInSession, { sessionId }) || [];

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
            {/* Display the quiz session and players */}
            <div className="relative flex h-screen flex-col justify-center text-center w-full">
                <div className="mx-auto w-full max-w-lg rounded-lg object-cover">
                    <Lottie options={defaultOptions} />
                </div>
                <div className="mx-auto px-8 text-white">
                    <h1 className="text-2xl font-bold mb-4">Quiz Session</h1>
                    <h2 className="text-xl font-semibold mb-2">Players:</h2>
                    <ul className="mt-6 text-left">
                        {players.map((player) => (
                            <li key={player._id} className="text-lg text-yellow-400">
                                {player.user_name} - Score: {player.score}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default QuizSession;
