import React, {Component} from 'react';

import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
	
	constructor(props) {
		super(props);
		this.state= {
				chartData: props.chartData
		}
	}
	
	static defaultProps = {
		displayTitle:true,
		displayLegend: true,
		legendPosition: 'right',
		location:'city'
	}
	render(){
		return(
			<div className="chart">
			<Bar
				data={this.state.chartData}
				width={'6'}
				height={'3'}
				options={{
					title:{
						display:this.props.displayTitle,
						text:'Largest Cities In '+this.props.location,
						fontSize:25
					},
					legend:{
						display: this.props.displayLegend,
						position:this.props.legendPosition
					}
				}}
			/>
			<Line
				data={this.state.chartData}
			width={'6'}
			height={'3'}
				options={{
					title:{
						display:this.props.displayTitle,
						text:'Largest Cities In '+this.props.location,
						fontSize:25
					},
					legend:{
						display: this.props.displayLegend,
						position:this.props.legendPosition
					}
				}}
			/>
			<Pie
				data={this.state.chartData}
				width={5}
			height={2}
				options={{
					title:{
						display:this.props.displayTitle,
						text:'Largest Cities In '+this.props.location,
						fontSize:25
					},
					legend:{
						display: this.props.displayLegend,
						position:this.props.legendPosition
					}
				}}
			/>
			</div>
		)
	}
}

export default Chart;
