import { createContext, useReducer } from "react"

const initialGoals: CourseGoal[] = [
  {
    title: "Learn React",
    description: "Learn React!",
    id: 1,
  },
  {
    title: "Learn Typescript",
    description: "Learn Typescript!",
    id: 2,
  },
  {
    title: "Learn React and Typescript",
    description: "Learn React and Typescript!",
    id: 3,
  },
]

export const GoalsContext = createContext<GoalsContextType>({
  goals: [],
  dispatch: () => {},
})

type CourseGoal = {
  title: string
  description: string
  id: number
}

export type GoalsContextType = {
  goals: CourseGoal[]
  dispatch: React.Dispatch<GoalsAction>
}

type GoalsAction =
  | {
      type: "ADD"
      payload: CourseGoal
    }
  | {
      type: "DELETE"
      payload: number
    }

export function GoalsProvider({ children }: { children: React.ReactNode }) {
  function goalsReducer(
    goals: CourseGoal[],
    action: GoalsAction
  ): CourseGoal[] {
    switch (action.type) {
      case "ADD":
        return [...goals, action.payload]
      case "DELETE":
        return goals.filter((goal) => goal.id !== action.payload)
      default:
        return goals
    }
  }
  const [goals, dispatch] = useReducer(goalsReducer, initialGoals)

  return (
    <GoalsContext.Provider value={{ goals, dispatch }}>
      {children}
    </GoalsContext.Provider>
  )
}
