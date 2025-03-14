import AddExpense from "components/Add/SplitBill";
import CustomPageNav from "components/customPageNav/customPageNav";
import { globalStyles } from "components/globalStyles";
import ProfileView from "components/ProfileView";
import { ScrollView } from "react-native";

const AddPage = () => {
    return ( 
        <ScrollView
            style={globalStyles.container}
        >
            <CustomPageNav components={[<AddExpense />, <ProfileView />]} headers={["Split Bill", "Trip Expense"]} />
        </ScrollView>
     );
}
 
export default AddPage;