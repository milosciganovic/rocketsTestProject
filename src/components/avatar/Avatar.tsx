import React from 'react';
import styled from 'styled-components';
import FastImage, { Source } from 'react-native-fast-image';

export interface AvatarProps {
    url: string | number | Source
    size: number;
    width?: number;
}

const Avatar = ({ url, size, width }: AvatarProps) => {

    const AVATAR_SIZE = size;
    const avatarWidth = width ? width : AVATAR_SIZE;

    const ImageInlineStyle = {
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE,
        width: avatarWidth,
    }

    return (
        <Image
            source={typeof url === "string" ? { uri: url } : url}
            style={ImageInlineStyle}
        />
    );
};

export default Avatar;

const Image = styled(FastImage)`
    margin-right: ${props => props.theme.spacingMedium};
`