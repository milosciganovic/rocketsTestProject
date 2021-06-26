import { DevSettings } from "react-native";
import { navigationRef } from "./navigation";
import { getPathFromState } from '@react-navigation/native';

const initDevMenu = () => {
  // DevSettings doesn't exist in release builds
  if (!__DEV__) return;

  DevSettings.addMenuItem('Current screen', () => {
    const rootState = navigationRef.current?.getRootState();

    if (rootState) {
      const navPath = getPathFromState(rootState);
      console.warn(navPath);
    }
  });
};

export default initDevMenu;
