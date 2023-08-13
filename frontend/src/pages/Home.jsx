import { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {		
		axios({
			method: "GET",
			url: "http://localhost:3000/api/workouts"
		})
		.then((res) => {
				if (res.status === 200) {
					setWorkouts(res.data)
				}
		})
    },[])


    return (
	    <>
		   {workouts && workouts.map(workout => <p key={workout._id}>{workout.title}</p>)}
		</>
	)
}

export default Home