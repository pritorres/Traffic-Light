import React, { useState } from "react";
import "./style.css";

//create your first component
const Home = () => {
	const [bombillaACtiva, setBombillaActiva] = useState();
	const bombillaA = () => {
		setBombillaActiva("A");
	};
	const bombillaB = () => {
		setBombillaActiva("B");
	};
	const bombillaC = () => {
		setBombillaActiva("C");
	};
	return (
		<>
			<div className=" d-flex flex-column justify-content-center align-items-center">
				<div className="soporte" />
				<div className="container d-flex justify-content-center">
					<div className="bg-dark p-2 rounded ">
						<div
							onClick={bombillaA}
							className={`bg-danger p-5 rounded-circle ${
								bombillaACtiva == "A" ? "active" : " "
							}`}
						/>
						<div
							onClick={bombillaB}
							className={`bg-warning p-5 rounded-circle ${
								bombillaACtiva == "B" ? "active" : " "
							}`}
						/>
						<div
							onClick={bombillaC}
							className={`bg-success p-5 rounded-circle ${
								bombillaACtiva == "C" ? "active" : " "
							}`}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
