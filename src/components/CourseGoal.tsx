// type CourseGoalProps = {
// 	title: string;
// 	children: React.ReactNode;
// };

import { type PropsWithChildren } from "react"

type CourseGoalProps = PropsWithChildren<{
  id: number
  title: string
  onDelete: (id: number) => void
}>

export default function CourseGoal({
  id,
  title,
  onDelete,
  children,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  )
}

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
// 	return (
// 		<article>
// 			<div>
// 				<h2>{title}</h2>
// 				{children}
// 			</div>
// 			<button>Delete</button>
// 		</article>
// 	);
// };

// export default CourseGoal;
