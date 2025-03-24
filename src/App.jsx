import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import { useEffect, useState } from "react";
import { addPunchData, getPunchData } from "./Data/Data";
const WS_URL = "wss://aws-production-4ef1.up.railway.app";
import "./loader.css";
import Hero from "./components/common/Hero";
import ClientPage from "./pages/ClientPage";
import StakeholderProfilePage from "./pages/StakeholderProfilePage";
import StakeholderDashboard from "./pages/StakeholderDashboard";

function App() {
	const [message, setMessage] = useState("");
	const [socket, setSocket] = useState(null);
	const [punchData, setPunchData] = useState({});

	useEffect(() => {
		const ws = new WebSocket(WS_URL);
		setSocket(ws);

		ws.onopen = () => console.log("Connected to WebSocket");
		ws.onmessage = (event) => {
			try {
				const newData = JSON.parse(event.data); // Assuming the message is in JSON format
				setMessage(newData);
				const value = [
					newData.data["Punch power (N)"],
					newData.data["Punch Speed (km/h)"],
					newData.data["Reflex time (ms)"],
					newData.data["isblocked"],
					newData.data["timestamp"].substring(11, 19),
				];
				addPunchData(newData.data.timestamp.substring(0, 11), value);
				setPunchData(getPunchData());
			} catch (error) {
				console.error("Error parsing WebSocket message", error);
			}

			ws.onclose = () => {
				console.log("WebSocket Disconnected");
			};

			ws.onerror = (error) => {
				console.error("WebSocket Error:", error);
			};

			// Cleanup function to close WebSocket when component unmounts
			return () => {
				ws.close();
			};
		};

		return () => ws.close();
	}, []);

	console.log(message.data);

	return (
		<>
			{message ? (
				<div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden '>

					<Routes>
						<Route path='/' element={<Hero />} />

						<Route path='/user' element={<OverviewPage punch={[
							message.data["timestamp"].substring(0, 11),
							message.data["timestamp"].substring(11, 19),
							message.data["Punch power (N)"],
							message.data["Punch Speed (km/h)"],
							message.data["Reflex time (ms)"],
							message.data["isblocked"] === 0 ? "No" : "Yes",
						]}
							punchData={punchData} />} />
						<Route path='/analytics' element={<AnalyticsPage punchData={punchData} />} />
						<Route path='/settings' element={<SettingsPage />} />
						<Route path='/stakeholder' element={<ClientPage punchData={punchData} />} />
						<Route path='/stakeholderProfile' element={<StakeholderProfilePage />} />
						<Route path='/StakeholderDashboard' element={<StakeholderDashboard punch={[
							message.data["timestamp"].substring(0, 11),
							message.data["timestamp"].substring(11, 19),
							message.data["Punch power (N)"],
							message.data["Punch Speed (km/h)"],
							message.data["Reflex time (ms)"],
							message.data["isblocked"] === 0 ? "No" : "Yes",
						]}
							punchData={punchData} />} />

					</Routes></div>
			) : (
				<div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden justify-center items-center"><div className=" lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
			)}
		</>
	);
}

export default App;
