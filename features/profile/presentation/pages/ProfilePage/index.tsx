import {Animated, SafeAreaView, ScrollView, View} from "react-native";
import {styles} from "./styles";
import {useProfilePage} from "@/features/profile/presentation/pages/ProfilePage/useProfilePage";
import {ProfileCarousel} from "@/features/profile/presentation/components/ProfileCarousel";
import {Header} from "@/features/profile/presentation/components/Header";
import {useRef} from "react";
import {StatusBar} from "expo-status-bar";
import {ProfileDescription} from "@/features/profile/presentation/components/ProfileDescription";
import {AppointmentList} from "@/features/profile/presentation/components/AppointmentList";
import {SectionList} from "@/features/profile/presentation/components/SectionList";
import {ProfileContext} from "@/features/profile/presentation/context/ProfileContext";

export const ProfilePage: React.FC = () => {
  const offset = useRef(new Animated.Value(0)).current;
  const {profile} = useProfilePage()
  return (<>
      {profile ?
        <ProfileContext.Provider value={{profile}}>
          <SafeAreaView style={styles.container}>
            <StatusBar style={'dark'}/>
            <Header title={profile.name} animValue={offset} id={profile._id}/>
            <ScrollView onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: offset}}}],
              {useNativeDriver: false}
            )}>
              <ProfileCarousel images={profile.images}/>
              <ProfileDescription title={profile.name} score={profile.feedback?.score} reviews={profile.feedback?.total}
                                  address={profile.location?.address} profileImage={profile.profilePhoto?.small}/>
              <AppointmentList/>
              <SectionList/>
            </ScrollView>
          </SafeAreaView>
        </ProfileContext.Provider>
        : <View/>}
    </>
  )
}
