
import Chart from './component/Chart';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
	
	constructor() {
		super();
		this.state={}
	}
	componentWillMount(){
		this.getChartData();
	}
	
	getChartData(){	
		//ajax call
		this.setState({
			chartData:{
				labels:['C12','C2','C3','C4','C5','C6'],
				datasets: [
					{
						label:'population',
						data: [
							98755,
							88657,
							45565,
							55556,
							55564,
							87676
						],
						backgroundColor:[
							'rgba(255, 99, 132, 0.6)',
							'rgba(54, 162, 235, 0.6)',
							'rgba(255, 206, 86, 0.6)',
							'rgba(75, 192, 192, 0.6)',
							'rgba(153, 102, 255, 0.6)',
							'rgba(255, 159, 64, 0.6)',
							'rgba(255, 99, 132, 0.6)'
						]
					}
				]
			
			}
		});
	}
	
	render() {
		return (
		  <div className="App">
			  <Chart chartData={this.state.chartData} location="abc" legendPosition="right"/>
		  </div>
		);		
	}
}

export default App;

