import { ScrollView } from "react-native";
import TripsView from "./TripsView";

const TripsList = ({data}: {data: any}) => {
    return ( 
        <ScrollView showsVerticalScrollIndicator={false}>
            {data.map((trip: any) => (
                <TripsView key={trip.id} trip={trip} />
            ))}
        </ScrollView>
     );
}
 
export default TripsList;