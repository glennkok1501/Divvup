import { useState } from "react";
import { StyleSheet  } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({data, setFiltered}: {data: any, setFiltered: any}) => {

    const [text, setText] = useState('')

    const handleSearchChange = (text: string) => {
        setText(text);
        setFiltered(data.filter((item: any) => 
            item.name.toLowerCase().includes(text.toLowerCase())
          ))
        
    };
    
    return ( 
    <TextInput 
        style={styles.bar}
        placeholder={"Search"} 
        selectionColor="black"
        underlineColorAndroid="transparent"
        value={text}
        onChange={(e) => handleSearchChange(e.nativeEvent.text)}
    />
        
     );
}

const styles = StyleSheet.create({
    bar: {
        padding: 10,
        marginTop: 5,
        marginStart: 5,
        marginEnd: 5,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 50,
    }
})
 
export default SearchBar;