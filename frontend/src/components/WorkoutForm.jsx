import { useState } from "react"
import { useAddWorkoutsMutation } from "../store"

const WorkoutForm = () => {
	const [title, setTitle] = useState("")
	const [load, setLoad] = useState("")
	const [reps, setReps] = useState("")
	const [errMsg, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const [addWorkouts, result] = useAddWorkoutsMutation()
	
	const handleSubmit = async(e) => {
		e.preventDefault()
		setIsLoading(true)
		
		const workout = {title, load, reps}
		const res = await addWorkouts(workout)

		if (res.error) {
			setIsLoading(false)
			return setError(res.error.data.error)
		}

		setError(null)
		setTitle("")
		setLoad("")
		setReps("")
		setIsLoading(false)
	}
	
	return (
		<form className="create" onSubmit={handleSubmit}>
			<h3>Add a new workout:</h3>
			<label>Exercise Title</label>
			<input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Exercise Name"/>
					
			<label>Loads:</label>			
			<input type="number" onChange={(e) => setLoad(e.target.value)} value={load} placeholder="Loads"/>
		
			<label>Repetitions:</label>
			<input type="number" onChange={(e) => setReps(e.target.value)} value={reps} placeholder="Repetitions"/>
			
			<button disabled={isLoading}>
				{ isLoading ? "Loading" : "Add a workout" }
			</button>
			{errMsg ? <div className="error">{errMsg}</div> : ""}
		</form>
	)
}

export default WorkoutForm