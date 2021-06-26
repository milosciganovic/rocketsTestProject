import React, { useEffect, } from "react"
import { View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { getCrewMembersData } from "../../redux/actions/dataActions/DataActionTypes";
import { RootStoreType } from "../../redux/store";
import { DataHandler, PeopleList, Title } from "../../components";
import styled from 'styled-components';

const CrewMembersScreen = () => {

    const dispatch = useDispatch();
    const { crew, crewDataError, crewDataLoading } = useSelector((state: RootStoreType) => state.data);

    useEffect(() => {
        if (!crew) {
            dispatch(getCrewMembersData())
        };
    }, [dispatch, crew]);


    const isDataExist = !crew ? false : true;

    return (
        <DataHandler error={crewDataError} loading={crewDataLoading} isDataExist={isDataExist} dataLength={crew?.length}>
            <Container>
                <Title text="Crew members" />
                {crew && <PeopleList data={crew} />}
            </Container>
        </DataHandler>
    )
};

export default CrewMembersScreen;

const Container = styled(View)`
    padding: ${props => props.theme.spacingBig};
    backgroundColor: ${props => props.theme.backgroundSecondary};
`
