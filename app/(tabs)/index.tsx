import { ImageSourcePropType, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef, useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';

import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';
import EmojiPicker from '@/components/EmojiPicker';
import EmojiList from '@/components/EmojiList';
import EmojiSticker from '@/components/EmojiSticker';

const PlaceholderImage = require('@/assets/images/tdm10.jpg');

export default function Index() {
  const imageRef = useRef<View>(null);

  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] =
    useState<ImageSourcePropType | undefined>();

  const [status, requestPermission] = MediaLibrary.usePermissions();

  useEffect(() => {
    if (!status?.granted) {
      requestPermission();
    }
  }, [status]);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('Você não selecionou nenhuma imagem.');
    }
  };

  const onSaveImageAsync = async () => {
    try {
      if (!imageRef.current) return;

      const localUri = await captureRef(imageRef.current, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);

      alert('Imagem salva com sucesso!');
    } catch (error) {
      console.log(error);
      alert('Erro ao salvar a imagem.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
    setPickedEmoji(undefined);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View ref={imageRef} collapsable={false}>
            <ImageViewer
              imgSource={PlaceholderImage}
              selectedImage={selectedImage}
            />

            {pickedEmoji && (
              <EmojiSticker
                imageSize={40}
                stickerSource={pickedEmoji}
              />
            )}
          </View>
        </View>

        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton
                icon="refresh"
                label="Reset"
                onPress={onReset}
              />

              <CircleButton onPress={onAddSticker} />

              <IconButton
                icon="save-alt"
                label="Save"
                onPress={onSaveImageAsync}
              />
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button
              theme="primary"
              label="Escolha uma foto"
              onPress={pickImageAsync}
            />

            <Button
              label="Use esta foto"
              onPress={() => setShowAppOptions(true)}
            />
          </View>
        )}

        <EmojiPicker
          isVisible={isModalVisible}
          onClose={onModalClose}
        >
          <EmojiList
            onSelect={setPickedEmoji}
            onCloseModal={onModalClose}
          />
        </EmojiPicker>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});