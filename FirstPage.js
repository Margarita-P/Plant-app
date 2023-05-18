import React from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';

const FirstPage = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleImagePress = () => {
    setModalVisible(!modalVisible);
  };

  const styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    lipstickPlantContainer: {
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 1,
    },
    lipstickPlant: {
      width: 150,
      height: 150,
    },
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePress} style={styles.lipstickPlantContainer}>
        <Image  source={require('./assets/lipstickplant.jpg')} style={styles.lipstickPlant} />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text>This is the pop-up page!</Text>
          {/* Add more content here */}
        </View>
      </Modal>
    </View>
  );
};

export default FirstPage;
