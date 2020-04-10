import React, { useEffect } from "react";
import useNetworkRequest from "../CustomHooks/useNetworkRequest";

const withRequest = (WrappedComponent, url) => props => {
    console.log(props);
    const {status, loading, error, data} = useNetworkRequest(url);

    useEffect(() => {
        console.log("with Request loaded...");
    }, [])

    return <WrappedComponent {...props} status={status} loading={loading} error={error} data={data}/>
}

export default withRequest;