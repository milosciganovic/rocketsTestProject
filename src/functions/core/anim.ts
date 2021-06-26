import {Platform, UIManager} from 'react-native';

const initLayoutAnimation = () => {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
};

export default initLayoutAnimation;
