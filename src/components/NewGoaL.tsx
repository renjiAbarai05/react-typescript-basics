import { FormEvent, useRef } from "react"
import { useGoals } from "../hooks/useGoals"

function NewGoaL() {
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)
  const { dispatch } = useGoals()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value

    if (enteredGoal.trim().length === 0 || enteredSummary.trim().length === 0) {
      return
    }

    e.currentTarget.reset()

    // onAddGoal(enteredGoal, enteredSummary)
    dispatch({
      type: "ADD",
      payload: {
        title: enteredGoal,
        description: enteredSummary,
        id: Math.random() * 1000,
      },
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}

export default NewGoaL
