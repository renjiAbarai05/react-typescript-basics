import goalsImg from "./assets/goals.jpg"
import Header from "./components/Header"
import CourseGoalList from "./components/CourseGoalList"
import NewGoaL from "./components/NewGoaL"
import { GoalsProvider } from "./contexts/GoalsContext"

export default function App() {
  return (
    <GoalsProvider>
      <main>
        <Header image={{ src: goalsImg, alt: "A list of goals" }}>
          <h1>Your Course Goals</h1>
        </Header>
        <NewGoaL />
        <CourseGoalList />
      </main>
    </GoalsProvider>
  )
}
