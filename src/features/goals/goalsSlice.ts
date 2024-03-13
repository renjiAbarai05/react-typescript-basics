import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { CourseGoal } from "../../App"

const initialState: CourseGoal[] = []

export const goalsSlice = createSlice({
  name: "goals",
  initialState: initialState,
  reducers: {
    addGoal: (state, action: PayloadAction<CourseGoal>) => {
      return [...state, action.payload]
    },
    deleteGoal: (state, action: PayloadAction<number>) => {
      return state.filter((goal) => goal.id !== action.payload)
    },
  },
})

export const { addGoal, deleteGoal } = goalsSlice.actions

export const selectGoals = (state: { goals: CourseGoal[] }) => state.goals

export default goalsSlice.reducer
