import AddExpense from "components/Add/SplitBill";
import CustomPageNav from "components/customPageNav/customPageNav";
import { globalStyles } from "components/globalStyles";
import ProfileView from "components/ProfileView";
import { ScrollView, Text } from "react-native";
import { View } from "tamagui";

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