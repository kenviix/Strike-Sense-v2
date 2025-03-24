import { BarChart2, ShoppingBag, Users, Zap, TrendingUp, User } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import Sidebar from "../components/common/Sidebar";

const OverviewPage = (props) => {
	const power = [];
	const speed = [];
	const accuracy = [];
	// console.log(props.punch[0].substring(0, 19));
	for (const [key, value] of Object.entries(props.punchData)) {

		// console.log(props.punch[0]);

		let totalPunches = 0;
		let blockedPunches = 0;
		value.forEach((element) => {


			power.push({ "date": `${props.punch[0]} ${element[4]}`, "power": element[0] });
			speed.push({ "date": `${props.punch[0]} ${element[4]}`, "speed": element[1] });
			if (element[3] === 0) {
				blockedPunches += 1;
			}
			totalPunches += 1;


		});
		// const accuracyExist = false;
		// accuracy.forEach(element => {
		// 	console.log(element);


		// });
		accuracy.push((100 - (blockedPunches / totalPunches) * 100).toFixed(2));
	}
	// console.log(props);

	return (
		<>
			<Sidebar items={[
				{
					name: "Overview",
					icon: BarChart2,
					color: "#EC4899",
					href: "/user",
				},
				// { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
				// { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
				// { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
				// { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
				{ name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
				{ name: "Profile", icon: User, color: "#10B981", href: "/settings" },
			]}></Sidebar>
			<div className='flex-1 overflow-auto relative z-10'>
				<Header title='Overview' />

				<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
					{/* STATS */}
					<motion.div
						className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
					>
						<StatCard name='Punch Power (N)' icon={Zap} value={props.punch[2]} color='#6366F1' />
						<StatCard name='Punch Speed (km/h)' icon={Users} value={props.punch[3]} color='#8B5CF6' />
						<StatCard name='Reflex Time (ms)' icon={ShoppingBag} value={props.punch[4]} color='#EC4899' />
						<StatCard name='Blocked' icon={BarChart2} value={props.punch[5]} color='#10B981' />
					</motion.div>

					{/* CHARTS */}

					<div className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
						<SalesOverviewChart data={power} heading={"Punch Power (N)"} xkey={"date"} ykey={"power"} stroke={'#8B5CF6'} fill={'#8B5CF6'} />
						<SalesOverviewChart data={speed} heading={"Punch Speed (km/h)"} xkey={"date"} ykey={"speed"} stroke={'#10B981'} fill={'#10B981'} />
						{/* <SalesOverviewChart data={power} heading={"Punch Power"} xkey={"date"} ykey={"power"} /> */}
					</div>
				</main>
			</div></>
	);
};
export default OverviewPage;
