import { type PropsWithChildren } from "react"
import { useAppDispatch } from "../app/hooks"
import { deleteGoal } from "../features/goals/goalsSlice"

type CourseGoalProps = PropsWithChildren<{
  id: number
  title: string
}>

export default function CourseGoal({ id, title, children }: CourseGoalProps) {
  const dispatch = useAppDispatch()

  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => dispatch(deleteGoal(id))}>Delete</button>
    </article>
  )
}
