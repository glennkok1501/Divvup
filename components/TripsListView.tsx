/* eslint-disable prettier/prettier */
import { Pressable } from "react-native";
import { H3, Paragraph, ScrollView, SizableText, View, XStack, YStack } from "tamagui";
import TripCard from "./TripCard";
import { useEffect, useState } from "react";

const TripsListView = () => {
    const [isLoading, setIsLoading] = useState(true)
    //   const [trips, setTrips] = useState<any[]>([])

    const [trips, setTrips] = useState([
        { "id": 1, "name": "Japan Trip", "membersCount": 6, "image": "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg" },
        { "id": 2, "name": "Bangkok with friends", "membersCount": 4, "image": "https://static.independent.co.uk/2025/01/03/14/newFile-12.jpg" },
        { "id": 3, "name": "School programme", "membersCount": 100, "image": "https://www.sembawangpri.moe.edu.sg/images/pic2.jpg" },
        { "id": 4, "name": "Zoo", "membersCount": 3, "image": "https://kids.earth.org/wp-content/uploads/2024/05/Untitled-1024-%C3%97-683px-45-900x600.jpg" }
    ])

    //   useEffect(() => {
    //     let data = [{"id": 1, "name": "Japan Trip"}, {"id": 2, "name": "Bangkok with friends"}, {"id": 3, "name": "School programme"}, {"id": 4, "name": "Zoo"}]
    //     setTrips([...trips, ...data])
    //     setIsLoading(false)
    //   }, [])

    return (

        <YStack gap="$2">
            <XStack alignItems="center" justifyContent="space-between">
                <H3 fontWeight="500">Trips</H3>
                {/* <Pressable>
                    <SizableText size="$4" theme="alt1" >View All</SizableText>
                </Pressable> */}
            </XStack>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                {
                    trips.map((trip) => (
                        <TripCard key={trip.id} name={trip.name} membersCount={trip.membersCount} image={trip.image} />
                    ))
                }
            </ScrollView>
        </YStack>

    );
}

export default TripsListView;