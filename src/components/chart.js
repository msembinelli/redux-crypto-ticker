import React from 'react';
import { render } from 'react-dom';
import CandleChart from './candle_chart';
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";


class Chart extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		console.log(this.state.data);
		return (
				<CandleChart type={"svg"} data={this.state.data} />
		)
	}
}

export default Chart;
