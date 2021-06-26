import React, { useCallback, useRef } from 'react';
import { scale, moderateScale } from 'react-native-size-matters';
import { Animated } from 'react-native';
import CrewMemberEntity from '../../entities/CrewMemberEntity';
import PeopleListItem from './PeopleListItem';

export interface PeopleListProps {
    data: CrewMemberEntity[]
}

const PeopleList = ({ data }: PeopleListProps) => {

    const scrollY = useRef(new Animated.Value(0)).current;

    const keyExtractor = useCallback((item) => item.id, []);
    const renderItem = useCallback(({ item, index }) =>
        <PeopleListItem item={item} index={index} scrollY={scrollY} />, [])

    const contentContainerInlineStyle = {
        paddingTop: scale(20),
        paddingBottom: scale(100),
        padding: moderateScale(4)
    }

    return (
        <Animated.FlatList
            scrollEventThrottle={5}
            disableVirtualization={true}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
            )}
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            contentContainerStyle={contentContainerInlineStyle}
        />
    );
};

export default PeopleList;
