import { FormEvent, useRef } from 'react';

type NewGoaLProps = {
	onAddGoal: (goal: string, summary: string) => void;
};
function NewGoaL({ onAddGoal }: NewGoaLProps) {
	const goal = useRef<HTMLInputElement>(null);
	const summary = useRef<HTMLInputElement>(null);

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const enteredGoal = goal.current!.value;
		const enteredSummary = summary.current!.value;

		if (enteredGoal.trim().length === 0 || enteredSummary.trim().length === 0) {
			return;
		}

		e.currentTarget.reset();

		onAddGoal(enteredGoal, enteredSummary);
	}

	return (
		<form onSubmit={handleSubmit}>
			<p>
				<label htmlFor='goal'>Your goal</label>
				<input id='goal' type='text' ref={goal} />
			</p>
			<p>
				<label htmlFor='summary'>Short summary</label>
				<input id='summary' type='text' ref={summary} />
			</p>
			<p>
				<button>Add Goal</button>
			</p>
		</form>
	);
}

export default NewGoaL;
