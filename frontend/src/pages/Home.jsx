import { useFetchWorkoutsQuery } from "../store"
import WorkoutDetail from "../components/WorkoutDetail"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
	const {data, isError, isFetching}  = useFetchWorkoutsQuery()

    return (
	    <div className="home">
		   <div className="workouts">
				{data && data.map(workout => <WorkoutDetail workout={workout} key={workout._id}/>)}	
			</div>
			<WorkoutForm/>
		</div>
	)
}

export default Home