import CourseGoal from "./components/CourseGoal"
import goalsImg from "./assets/goals.jpg"
import Header from "./components/Header"
import CourseGoalList from "./components/CourseGoalList"
import NewGoaL from "./components/NewGoaL"

export type CourseGoal = {
  title: string
  description: string
  id: number
}

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoaL />
      <CourseGoalList />
    </main>
  )
}
