import React from 'react';
import CandleChart from './candle_chart';
import { TypeChooser } from "react-stockcharts/lib/helper";


export default (props) => {
	if (props.data == null) {
		return <div>Loading...</div>
	}

	return (
			<CandleChart type={"svg"} data={props.data} />
	)
}
