import React from 'react';
import { FlatList } from 'react-native';
import CardListItem from './CardListItem';
import RocketEntity from '../../entities/RocketEntity';
import { scale } from 'react-native-size-matters';

interface CardListProps {
    list: RocketEntity[];
};

const CardList = ({ list }: CardListProps) => {

    const keyExtractor = (item: RocketEntity) => item.id;
    const renderItem = ({ item }: any) => {
        const { image, name, company, active } = item;

        return (
            <CardListItem
                name={name}
                image={image}
                active={active}
                company={company}
            />
        );
    };

    return (
        <FlatList
            contentContainerStyle={contentContainerStyle}
            data={list}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );
};

export default CardList;

const contentContainerStyle = {
    paddingBottom: scale(120)
}