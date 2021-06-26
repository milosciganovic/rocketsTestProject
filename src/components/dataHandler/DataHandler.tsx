import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { Loader, NoItems, Error } from '../'
import { RootStoreType } from '../../redux/store';

export type DataHandlerProps = {
    error: string,
    loading: boolean,
    isDataExist: boolean,
    dataLength: number | undefined;
};

const DataHandler: React.FC<DataHandlerProps> = props => {
    const { loading, error, isDataExist, dataLength } = props;
    const { activeTheme } = useSelector((state: RootStoreType) => state.app);

    if (loading) return <Loader />
    if (error) return <Error errorText={error} />;
    if (isDataExist && dataLength !== undefined && dataLength === 0) return <NoItems />;


    return <View>
        {props.children}
    </View>
};

export default DataHandler;