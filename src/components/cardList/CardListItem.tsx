import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image'
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import { scale } from 'react-native-size-matters';
import { CompanyLogo } from '../'
import { RootStoreType } from '../../redux/store';
import { useSelector } from 'react-redux';

interface CardListItemProps {
    image: string;
    name: string;
    active: boolean;
    company: "SpaceX" | "NASA" | "ESA" | "JAXA";
}

const { width } = Dimensions.get('screen');
const cardWidth = width - scale(80);

const CardListItem = ({ image, name, company, active }: CardListItemProps) => {

    const { activeTheme } = useSelector((state: RootStoreType) => state.app);

    const status = active ? "Active" : "Inactive";
    const color = active ? activeTheme?.colorPrimary : activeTheme?.colorError;

    const cardStatusInlineStyle = {
        color
    }

    return (
        <Card>
            <CardOverlay>
                <CardImage source={{ uri: image }} />
                <CardDetailsHeader>
                    <CardDetailsLeft>
                        <View>
                            <CardName>{name}</CardName>
                        </View>
                        <View>
                            <CardStatus style={cardStatusInlineStyle}>{status}</CardStatus>
                        </View>
                    </CardDetailsLeft>
                    <CardDetailsRight>
                        <CompanyLogo company={company} size={scale(40)} />
                    </CardDetailsRight>
                </CardDetailsHeader>
            </CardOverlay>
        </Card>
    );
};

export default CardListItem;

const Card = styled(View)`
    height: ${props => props.theme.cardHeight};
    margin: ${props => props.theme.spacingMedium} auto;
    borderRadius: ${props => props.theme.borderRadiusMedium};
    backgroundColor: ${props => props.theme.backgroundSecondary};
    shadowColor: #000;
    shadowOffset: {
        width: 0px,
        height: 0px,
    };
    shadowOpacity: 0.1;
    shadowRadius: 2px;
    elevation: 1;
    width: ${cardWidth}px;
`;

const CardOverlay = styled(View)`
    height: ${props => props.theme.cardHeight};
    backgroundColor: ${props => props.theme.backgroundSecondary};
    borderRadius: ${props => props.theme.borderRadiusMedium};
    position: absolute;
    zIndex: 100;
    width: ${cardWidth}px;
`

const CardImage = styled(FastImage)`
    width: 100%;
    height: ${props => props.theme.cardImageHeight};
    borderTopLeftRadius: ${props => props.theme.borderRadiusMedium};
    borderTopRightRadius: ${props => props.theme.borderRadiusMedium};
`
const CardDetailsHeader = styled(View)`
    flex: 1;
    width: 100%;
    height: ${props => props.theme.cardDetailsHeight};
    padding: ${props => props.theme.spacingMedium};
    borderRadius: ${props => props.theme.borderRadiusMedium};
    backgroundColor: ${props => props.theme.backgroundSecondary};
    position: absolute;
    bottom: 0px;
    flex-direction: row;
    shadowColor: #000;
    justify-content: center;
    shadowOffset: {
        width: 0,
        height: 1,
    };
    shadowOpacity: 0.22;
    shadowRadius: 2.22px;
    elevation: 3;
`
const CardDetailsRight = styled(View)`
    align-items: flex-end;
    justify-content: flex-start;
    margin-top: -10px;
    margin-right: -15px;
`
const CardDetailsLeft = styled(View)`
    flex: 1;
`
const CardName = styled(Text)`
    font-size: ${props => props.theme.textMedium};
    font-weight: 700;
    color: ${props => props.theme.textColorSecondary};
`
const CardStatus = styled(Text)`
    font-size: ${props => props.theme.textSmall};
    font-weight: 700;
`