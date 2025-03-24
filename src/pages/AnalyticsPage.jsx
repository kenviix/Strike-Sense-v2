import { BarChart2, Menu, TrendingUp, User } from "lucide-react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

import Table from "../components/Table/Table"

const AnalyticsPage = (props) => {
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
			<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
				<Header title={"Analytics Dashboard"} />

				<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
					<Table punchData={props.punchData}></Table>
				</main>
			</div></>
	);
};
export default AnalyticsPage;
