import React from 'react';
import { Alert } from 'react-native'
import { scale as sizeScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { Animated, Text, View, TouchableOpacity } from 'react-native';
import CrewMemberEntity from '../../entities/CrewMemberEntity';
import AppPermissions from '../../functions/core/appPermissions';
import { Avatar } from '../';
import styled from 'styled-components';

export interface PeopleListItemProps {
    item: CrewMemberEntity;
    index: number;
    scrollY: any;
}

const PeopleListItem = ({ item, index, scrollY }: PeopleListItemProps) => {

    const { image, name, status, agency } = item;
    const navigation = useNavigation();

    let NOT_ALLOWED_PERMISSIONS_TEXT = 'You must allow next permissions to access this screen: '

    const AVATAR_SIZE = sizeScale(50);
    const SPACING = sizeScale(20);
    const ITEM_SIZE = AVATAR_SIZE + SPACING * 2;

    const onItemPress = async (item: CrewMemberEntity) => {

        const result = await AppPermissions.checkPermissions();

        const notAllowedPermissions = [];

        for (let key in result) {
            if (result[key as keyof typeof result] !== 'granted') {
                notAllowedPermissions.push(key);
            }
        };

        if (notAllowedPermissions.length === 0) {
            navigation.navigate('CrewMemberScreen', { item: item })
        } else {

            const alertText = NOT_ALLOWED_PERMISSIONS_TEXT + notAllowedPermissions.join(', ')

            Alert.alert(
                'Permissions denied',
                alertText,
            );
        };
    };

    const inputRange = [
        -1,
        0,
        ITEM_SIZE * index,
        ITEM_SIZE * (index + 3)
    ];

    const scale = scrollY.interpolate({
        inputRange,
        outputRange: [1, 1, 1, 0]
    });

    const animationContainerStyle = {
        transform: [{ scale }],
        backgroundColor: 'transparent'
    }

    return (
        <Animated.View style={animationContainerStyle}>
            <TouchableOpacity onPress={() => onItemPress(item)}>
                <Item>
                    <Avatar size={AVATAR_SIZE} url={image} />
                    <View>
                        <ItemText>{name}</ItemText>
                        <StatusText>status: {status}</StatusText>
                    </View>
                </Item>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default PeopleListItem;

const Item = styled(View)`
    flex-direction: row;
    padding: ${props => props.theme.spacingMedium};
    margin-bottom: ${props => props.theme.spacingMedium};
    border-radius: ${props => props.theme.borderRadiusSmall};
    background-color: ${props => props.theme.backgroundPrimary};
    shadow-color: #000;
    shadow-offset:{
        width: 0,
        height: 10px,
    };
    elevation: 3;
    shadow-opacity: .3;
    shadow-radius: 3px
`
const ItemText = styled(Text)`
    font-size: ${props => props.theme.textMedium};
    color: ${props => props.theme.textColorBold}
    font-weight: bold;
    width: 100%;
`

const StatusText = styled(Text)`
    color: ${props => props.theme.colorSecondary}
`