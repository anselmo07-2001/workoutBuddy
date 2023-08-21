import { useDeleteWorkoutsMutation } from "../store"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

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
			<p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true})}</p>
			<span onClick={handleDelete}>delete</span>
		</div>
	)
}

export default WorkoutDetail