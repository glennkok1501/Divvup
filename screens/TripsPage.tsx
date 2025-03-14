import SearchBar from "components/SearchBar";
import TripAddBtn from "components/TripAddBtn";
import TripsList from "components/TripsList";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const TripsPage = () => {
    let tripsData = [
        {
          id: 1,
          name: 'Japan Trip',
          membersCount: 6,
          image:
            'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg',
        },
        {
          id: 2,
          name: 'Bangkok with friends',
          membersCount: 4,
          image: 'https://static.independent.co.uk/2025/01/03/14/newFile-12.jpg',
        },
        {
          id: 3,
          name: 'School programmeeeeeeeeeeeee',
          membersCount: 100,
          image: 'https://www.sembawangpri.moe.edu.sg/images/pic2.jpg',
        },
        {
          id: 4,
          name: 'Zoo',
          membersCount: 3,
          image:
            'https://kids.earth.org/wp-content/uploads/2024/05/Untitled-1024-%C3%97-683px-45-900x600.jpg',
        },
      ];
    const [filtered, setFiltered] = useState(tripsData)
    return ( 
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.search}>
                <SearchBar data={tripsData} setFiltered={setFiltered} />

                </View>
                <TripAddBtn />
            </View>
            
            <TripsList data={filtered} />
        </View>
     );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50,
  },
  top: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  search: {
    flexGrow: 1,
    marginEnd: 3
  }
});
export default TripsPage;