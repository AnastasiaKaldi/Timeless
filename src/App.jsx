import HomePage from "../src/HomePage.jsx";
import ImpossibleQuiz from "./ImpossibleQuiz.jsx";
import "./index.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";

// Initialize the Convex client
const convex = new ConvexReactClient(
  "https://judicious-jackal-978.convex.cloud"
);

function App() {
  return (
    <ConvexProvider client={convex}>
      <section>
        <HomePage />
        <ImpossibleQuiz />
      </section>
    </ConvexProvider>
  );
}

export default App;
