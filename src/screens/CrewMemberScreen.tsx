import React, { useEffect, useState } from "react"
import { ScrollView, Text, View, Dimensions, Linking, Alert } from "react-native"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackNavScreens } from ".";
import { Loader, Avatar, CompanyLogo, Button } from '../components';
import { CompanyNames } from '../components/companyLogo/CompanyLogo';
import CrewMemberEntity from "../entities/CrewMemberEntity";
import { scale } from "react-native-size-matters";
import styled from 'styled-components';

type CrewMemberScreenRouteProp = RouteProp<RootStackNavScreens, 'CrewMemberScreen'>;

interface CrewMemberScreenProps {
    route?: CrewMemberScreenRouteProp;
};

const { width, height } = Dimensions.get('window');
const AVATAR_SIZE = scale(100);

const CrewMemberScreen = (props: CrewMemberScreenProps) => {

    const [item, setItem] = useState<CrewMemberEntity | null>(null);

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        if (!props.route || !props.route.params.item) {
            navigation.navigate("BottomTabNavigator")
        } else {
            const { item } = props.route.params;

            navigation.setOptions({ title: item.name })
            setItem(item);
        };
    }, []);

    const openWiki = (url: string) => {
        Linking.openURL(url).catch((e) => {
            Alert.alert(
                'Something is wrong!',
                `Web page can't be open`,
            );
        });
    }

    if (!item) return <Loader />;

    const { image, status, agency, name, id, wikipedia } = item;

    const COMPANY_AVATAR_SIZE = scale(40);
    const COMPANY_AVATAR_WIDTH = scale(100);

    return (
        <ScrollView>
            <Container>
                <ContainerHeader>
                    <AvatarContainer>
                        <Avatar size={AVATAR_SIZE} url={image} />
                    </AvatarContainer>
                </ContainerHeader>
                <ContainerBody>
                    <ContainerBodyBackground>
                        <Body>
                            <RowsContainer>
                                <RowWrapper>
                                    <Row>
                                        <RowLabel>Agency</RowLabel>
                                        <CompanyLogoContainer>
                                            <CompanyLogo company={agency as CompanyNames} size={COMPANY_AVATAR_SIZE} width={COMPANY_AVATAR_WIDTH} />
                                        </CompanyLogoContainer>
                                    </Row>
                                    <Row>
                                        <RowLabel>Status</RowLabel>
                                        <RowText>{status}</RowText>
                                    </Row>
                                </RowWrapper>
                                <RowWrapper>
                                    <Row>
                                        <RowLabel>Name</RowLabel>
                                        <RowText>{name}</RowText>
                                    </Row>
                                    <Row>
                                        <RowLabel>ID</RowLabel>
                                        <RowTextSmall>{id}</RowTextSmall>
                                    </Row>
                                </RowWrapper>
                            </RowsContainer>
                        </Body>
                    </ContainerBodyBackground>
                </ContainerBody>
                <ButtonContainer>
                    <Button text="More on wiki" onPress={() => openWiki(wikipedia)} />
                </ButtonContainer>
            </Container >
        </ScrollView >
    )
};

export default CrewMemberScreen;

const Container = styled(View)`
    background: ${props => props.theme.backgroundPrimary}
`
const AvatarContainer = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const ContainerHeader = styled(View)`
    height: ${0.2 * height}px;
    background: ${props => props.theme.colorPrimary}
    border-bottom-right-radius: 55px;
`
const ContainerBody = styled(View)`
    flex: 1;
`
const ContainerBodyBackground = styled(View)`
    background: ${props => props.theme.colorPrimary}
`
const Body = styled(View)`
    flex: 1;
    height: ${0.7 * height}px;
    background:  ${props => props.theme.backgroundPrimary};
    border-top-left-radius: 55px;
    padding-top: ${props => props.theme.spacingBig}
`
const RowsContainer = styled(View)`
    padding: ${props => props.theme.spacingBig};
`
const RowWrapper = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const Row = styled(View)`
    align-items: center;
    justify-content: center;
    flex: 1;
    background: ${props => props.theme.backgroundSecondary};
    margin: ${props => props.theme.spacingSmall};
    padding: ${props => props.theme.spacingMedium};
    border-radius: 5px;
`
const RowLabel = styled(Text)`
    color: ${props => props.theme.colorSecondary}
    font-size: ${props => props.theme.textSmall}
    padding: ${props => props.theme.spacingMedium}
`
const RowTextBase = styled(Text)`
    padding: ${props => props.theme.spacingMedium}
    margin-top: -10px;
    text-align: center;
`
const RowText = styled(RowTextBase)`
    font-size: ${props => props.theme.textSmall}
`
const RowTextSmall = styled(RowTextBase)`
    font-size: 13px;
`
const CompanyLogoContainer = styled(View)`
 
`
const ButtonContainer = styled(View)`
    position: absolute;
    bottom: 70px;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
`