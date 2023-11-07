import { Children } from "react";
import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/header.tsx";
import goalsImg from "./assets/goals.jpg";

export default function App() {
  return (
    <main>
      <Header image={{ src: "/src/assets/goals.jpg", alt: "a list of goals" }}>
        <h1>Goals</h1>
      </Header>
      <button>Add Goal</button>
      <CourseGoal title="React TypScript">
        <p>Learning TypeScript React</p>
      </CourseGoal>
    </main>
  );
}
