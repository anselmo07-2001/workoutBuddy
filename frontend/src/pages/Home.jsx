import { useState, useEffect } from "react"
import axios from "axios"
import WorkoutDetail from "../components/WorkoutDetail"
import WorkoutForm from "../components/WorkoutForm"

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
	    <div className="home">
		   <div className="workouts">
				{workouts && workouts.map(workout => <WorkoutDetail workout={workout}/>)}	
			</div>
			<WorkoutForm/>
		</div>
	)
}

export default Home