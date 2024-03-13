import { ReactNode } from "react"
import CourseGoal from "./CourseGoal"
import InfoBox from "./InfoBox"
import { useGoals } from "../hooks/useGoals"

function CourseGoalList() {
  const { goals } = useGoals()

  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no course goals yet</InfoBox>
  }

  let warningBox: ReactNode

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    )
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseGoalList
