import { useContext } from "react"
import { GoalsContext, GoalsContextType } from "../contexts/GoalsContext"

export function useGoals(): GoalsContextType {
  return useContext(GoalsContext)
}
