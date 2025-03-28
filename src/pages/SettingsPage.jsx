import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import DangerZone from "../components/settings/DangerZone";
import Notifications from "../components/settings/Notifications";
import Profile from "../components/settings/Profile";
import Security from "../components/settings/Security";
import { BarChart2, Menu, TrendingUp, User } from "lucide-react";


const SettingsPage = () => {
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
				<Header title='Profile' />
				<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
					<Profile name={"Kinal Patel"} profileImg={"empty.png"} email={"kinal.patel@gmail.com"} />
					<Notifications />
					<Security />
					<ConnectedAccounts />
					<DangerZone />
				</main>
			</div></>
	);
};
export default SettingsPage;
