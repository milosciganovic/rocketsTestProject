import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';

interface TabProps {
    focused: boolean;
    fontSize: number;
    text: string;
    tabName: 'rockets' | "crew";
};

const Tab = ({ focused, fontSize, text, tabName }: TabProps) => {
    let iconName = tabName === 'rockets' ? 'rocket-launch' : 'account-multiple';
    let color = '#fff';

    if (!focused) {
        iconName = iconName + '-outline';
        color = '#F9F9F9';
    };

    const tabInlineStyle = {
        fontSize,
        color
    }

    return (
        <TabContainer>
            <Icon name={iconName} style={tabInlineStyle} />
            <Text style={{ color }}>{text}</Text>
        </TabContainer>
    );
};

export default Tab;

const TabContainer = styled(View)`
    align-items: center;
    flex: 1;
`