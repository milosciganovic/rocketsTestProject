import { checkMultiple, requestMultiple, PERMISSIONS, } from 'react-native-permissions';
import { Platform } from 'react-native';

const PLATFORM_PERMISSIONS = {
    ios: [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY],
    android: [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]
};

const AppPermissions = {
    checkPermissions: () => {

        let permissions;

        if (Platform.OS === 'android') {
            permissions = PLATFORM_PERMISSIONS.android
        } else {
            permissions = PLATFORM_PERMISSIONS.ios
        }

        return checkMultiple(permissions).then((statuses) => {
            return statuses;
        });
    },

    requestPermissions: () => {
        let permissions;

        if (Platform.OS === 'android') {
            permissions = PLATFORM_PERMISSIONS.android
        } else {
            permissions = PLATFORM_PERMISSIONS.ios
        }

        return requestMultiple(permissions).then((statuses) => {
            return statuses;
        });
    },
}

export default AppPermissions;