import React from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {sectionMap} from "./sectionMap";
import {useSectionList} from "./useSectionList";
import {SelectedSection} from "./SelectedSection";
import {styles} from "./styles";
import {blue, white} from "@/constants/Colors";

export const SectionList: React.FC = () => {
  const {selection, setSelection} = useSectionList()
  return (
    <View>
      <ScrollView horizontal style={styles.scrollContainer}>
        {
          sectionMap.map((section, index) => {
            return <TouchableOpacity onPress={() => {
              setSelection(index)
            }}>
              <Text style={{
                ...styles.text,
                color: index === selection ? white : blue,
                backgroundColor: index === selection ? blue : 'rgba(0,0,0,0)'
              }}> {section.title}</Text>
            </TouchableOpacity>
          })
        }
      </ScrollView>
      <View>
        <SelectedSection selection={sectionMap[selection].id} />
      </View>
    </View>
  )
}
