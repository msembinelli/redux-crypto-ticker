import React from 'react';
import CandleChart from './candle_chart';


export default (props) => {
	if (props.data == null) {
		return <div>Loading...</div>
	}

	return (
			<CandleChart type={"hybrid"} data={props.data} />
	)
}
