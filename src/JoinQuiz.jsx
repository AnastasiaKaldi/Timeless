// JoinQuiz.jsx

import { useMutation } from "convex/react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../convex/_generated/api";

function JoinQuiz() {
    const { sessionId } = useParams(); // Get sessionId from the URL
    const [userName, setUserName] = useState("");
    const addPlayer = useMutation(api.quiz.addPlayerToSession);
    const navigate = useNavigate();

    const handleJoinSession = async () => {
        if (sessionId && userName) {
            await addPlayer({ sessionId, userName });
            // Redirect to the quiz session page
            navigate(`/quiz/session/${sessionId}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
            <h1 className="text-2xl font-bold mb-4">Join Quiz Session</h1>
            <input
                type="text"
                placeholder="Enter your username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="mb-4 p-2 rounded text-gray-800"
            />
            <button
                onClick={handleJoinSession}
                className="bg-blue-500 text-white py-2 px-4 rounded"
                disabled={!userName}
            >
                Join Session
            </button>
        </div>
    );
}

export default JoinQuiz;
