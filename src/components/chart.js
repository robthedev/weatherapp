import React, { Component } from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average (data) {
  const sum = data.reduce((a, b) => a + b, 0);
  const total = data.length;
  const avg = sum / total;

  return Math.round(avg);
}

export default (props) => {
      return (
        <div>
          <Sparklines height={120} width={180} data={props.data}>
            <SparklinesLine color={props.color}/>
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <div>{average(props.data)}</div>
        </div>
      );
};