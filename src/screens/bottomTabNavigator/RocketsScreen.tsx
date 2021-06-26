import React, { useEffect } from "react"
import { View } from 'react-native';
import { CardList, Title, DataHandler } from "../../components"
import { useDispatch, useSelector } from "react-redux";
import { RootStoreType } from "../../redux/store";
import { getRocketData } from "../../redux/actions/dataActions/DataActionTypes";
import styled from 'styled-components';
import { RouteProp } from "@react-navigation/native";

const RocketsScreen = () => {

    const dispatch = useDispatch();
    const { rockets, rocketsDataLoading, rocketsDataError } = useSelector((state: RootStoreType) => state.data);

    useEffect(() => {
        if (!rockets) {
            dispatch(getRocketData())
        }
    }, [dispatch, rockets]);

    const isDataExist = !rockets ? false : true;

    return (
        <DataHandler error={rocketsDataError} loading={rocketsDataLoading} isDataExist={isDataExist} dataLength={rockets?.length}>
            <Container>
                <Title text="Rockets list" />
                {rockets && <CardList list={rockets} />}
            </Container>
        </DataHandler>
    );
};

export default RocketsScreen;

const Container = styled(View)`
    padding: ${props => props.theme.spacingBig}
    backgroundColor: ${props => props.theme.backgroundPrimary};
`

