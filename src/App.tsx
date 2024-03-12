import CourseGoal from "./components/CourseGoal"
import goalsImg from "./assets/goals.jpg"
import Header from "./components/Header"
import { useState } from "react"
import CourseGoalList from "./components/CourseGoalList"
import NewGoaL from "./components/NewGoaL"

export type CourseGoal = {
  title: string
  description: string
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: goal,
        description: summary,
        id: Math.random() * 1000,
      }
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoaL onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  )
}
