import _ from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = (data) => {
    return (
        _.round(
            _.sum(data) / data.length
        )
    ); 
}

// Chart
export default ({ data, color, units }) => {
    return (
        <div>
            <Sparklines data={data}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(data)} {units}</div>
        </div>
    );
}