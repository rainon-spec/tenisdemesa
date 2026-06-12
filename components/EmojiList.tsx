import { useState } from "react"
import { ImageSourcePropType, StyleSheet, FlatList, Platform, Pressable } from "react-native"
import { Image } from 'expo-image';

type Props = {
   onSelect: (image: ImageSourcePropType) => void;
   onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
    const [emoji] = useState<ImageSourcePropType[]>([
      require("../assets/images/emoj1.png"),
      require("../assets/images/emoj2.png"),
      require("../assets/images/emoj3.png"),
      require("../assets/images/emoj4.png"),
      require("../assets/images/emoj5.png"),
      require("../assets/images/emoj6.png"),
    ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyte={styles.listContainer}
      renderItem={({ item, index }) => {
        <Pressable
         onPress={()  => }
           onSelect(item);
           onCloseModal();
        }}>

  );
}