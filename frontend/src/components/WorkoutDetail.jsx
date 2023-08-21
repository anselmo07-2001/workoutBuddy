import { useDeleteWorkoutsMutation } from "../store"


const WorkoutDetail = ({workout}) => {
	const [deleteWorkout, result] = useDeleteWorkoutsMutation()
	
	const handleDelete = async () => {
		deleteWorkout(workout)
	}

	return (
		<div className="workout-details">
			<h4>{workout.title}</h4>
			<p><strong>Load (kg): </strong>{workout.load}</p>
			<p><strong>Reps: </strong>{workout.reps}</p>
			<p>{workout.createdAt}</p>
			<span onClick={handleDelete}>delete</span>
		</div>
	)
}

export default WorkoutDetail