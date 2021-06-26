import React from "react"
import { ScrollView, Text, View, Switch } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { RouteProp } from "@react-navigation/native";
import { RootStackNavScreens } from ".";
import { themeSwitcher } from "../functions/core/theme";
import { switchTheme } from "../redux/actions/appActions/AppActionTypes";
import { RootStoreType } from "../redux/store";
import styled from 'styled-components';
import { appConfig } from "../configs/AppConfig";

type SettingsScreenRouteProp = RouteProp<RootStackNavScreens, 'SettingsScreen'>;

interface SettingsScreenProps {
    route?: SettingsScreenRouteProp;
};

const SettingsScreen = (props: SettingsScreenProps) => {

    const dispatch = useDispatch()
    const { activeThemeId, activeTheme } = useSelector((state: RootStoreType) => state.app);

    const changeTheme = async () => {
        const theme = await themeSwitcher();
        dispatch(switchTheme(theme.activeTheme, theme.themeId));
    };

    const activeThemeName = activeThemeId === appConfig.defaultTheme.lightThemeId ? 'light' : 'dark'
    const labelText = activeThemeName === 'light' ? "Turn on dark mode: " : "Turn off dark mode: "

    return (
        <Container>
            <SwitchThemeContainer>
                <Label>{labelText}</Label>
                <Switch
                    value={activeThemeName === "dark" ? true : false}
                    onChange={changeTheme}
                    trackColor={{ true: activeTheme?.colorPrimary }}
                />
            </SwitchThemeContainer>
        </Container>
    )
};

export default SettingsScreen;

const Container = styled(ScrollView)`
    background-color: ${props => props.theme.backgroundPrimary}
`

const SwitchThemeContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: ${props => props.theme.spacingBig}
`
const Label = styled(Text)`
    color: ${props => props.theme.colorSecondary}
    margin-right: ${props => props.theme.spacingBig}
`