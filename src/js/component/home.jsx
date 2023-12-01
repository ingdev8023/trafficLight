import React, { useState } from "react";

const Home = () => {
	const generalStyle = "bg-secondary rounded-circle";
	const redStyle = "bg-danger rounded-circle"
	const yellowStyle = "bg-warning rounded-circle"
	const greenStyle = "bg-success rounded-circle"
	const lightSizingStyle = {
		height: "70px", 
		width:"70px"
	}


	const [activatedRed, setActivedRed] = useState(generalStyle)
	const [activatedYellow, setActivedYellow] = useState(generalStyle)
	const [activatedGreen, setActivedGreen] = useState(generalStyle)

    const activeRed = () => {
		setActivedRed(redStyle)
		setActivedYellow(generalStyle)
		setActivedGreen(generalStyle)	
		
	}

	const activeYellow = () => {
		setActivedRed(generalStyle)
		setActivedYellow(yellowStyle)
		setActivedGreen(generalStyle)		
		
	}

	const activeGreen = () => {
		setActivedRed(generalStyle)
		setActivedYellow(generalStyle)
		setActivedGreen(greenStyle)		
		
	}
	
	return (
		<div className="bg-black container m-auto p-3" style={{height: "250px", width:"100px"}}>
			<div  onClick={activeRed} className= {activatedRed} style={lightSizingStyle}></div>
			<div  onClick={activeYellow} className= {activatedYellow} style={lightSizingStyle}></div>
			<div  onClick={activeGreen} className= {activatedGreen} style={lightSizingStyle}></div>
		</div>
	);
};

export default Home;
