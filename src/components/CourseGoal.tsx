// type CourseGoalProps = {
// 	title: string;
// 	children: React.ReactNode;
// };

import { type PropsWithChildren } from "react"
import { useGoals } from "../hooks/useGoals"

type CourseGoalProps = PropsWithChildren<{
  id: number
  title: string
}>

export default function CourseGoal({ id, title, children }: CourseGoalProps) {
  const { dispatch } = useGoals()

  function handleDeleteGoal(id: number) {
    dispatch({ type: "DELETE", payload: id })
  }

  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => handleDeleteGoal(id)}>Delete</button>
    </article>
  )
}
