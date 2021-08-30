import React, { useState } from "react";
import "./style.css";

//create your first component
const Home = () => {
	const [bombillaACtiva, setBombillasActivas] = useState();
	const bottonA = () => {
		setBombillasActivas("a");
	};
	const bottonB = () => {
		setBombillasActivas("b");
	};
	const bottonC = () => {
		setBombillasActivas("c");
	};

	return (
		<div className="container">
			<div className="bg-dark d-inline-flex flex-column p-2 rounded">
				<div
					onClick={bottonA}
					className={`bg-danger rounded-circle p-3 ${
						bombillaACtiva == "a" ? "active" : " "
					}`}></div>
				<div
					onClick={bottonB}
					className={`bg-warning rounded-circle p-3 ${
						bombillaACtiva == "b" ? "active" : " "
					}`}></div>
				<div
					onClick={bottonC}
					className={`bg-success rounded-circle p-3 ${
						bombillaACtiva == "c" ? "active" : " "
					}`}></div>
			</div>
		</div>
	);
};

export default Home;
