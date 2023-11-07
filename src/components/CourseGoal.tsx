import { ReactNode } from "react";


export default function CourseGoal({ title , children}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      
      </div>
      <button>Begin</button>
    </article>
  );
}

type CourseGoalProps = {
  title: string;
  children: ReactNode
};
