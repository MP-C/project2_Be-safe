import React from 'react';

export default Data (param) {
    const props = props.match.param;
    const countyName ={
        [Belgique :
            {countryLat: "50.848196" }
            {countryLon: "4.351850" }
        ]        
    }


    return(
        <>
        <h3>{param.countyId}</h3>
        <h4>{param.countyId.countryLat}</h4>
        <h4>{param.countyId.countryLon}</h4>
        </>

    )
};