import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import DangerZone from "../components/settings/DangerZone";
import Notifications from "../components/settings/Notifications";
import Profile from "../components/settings/Profile";
import Security from "../components/settings/Security";
import { BarChart2, Menu, TrendingUp, User, Users } from "lucide-react";


const StakeholderProfilePage = () => {
	return (
		<>
			<Sidebar items={[
				{
					name: "Clients",
					icon: Users,
					color: "#EC4899",
					href: "/stakeholder",
				},
				// { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
				// { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
				// { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
				// { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },

				{ name: "Profile", icon: User, color: "#10B981", href: "/StakeholderProfilePage" },
			]}></Sidebar>
			<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
				<Header title='Profile' />
				<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
					<Profile name={"Ishaq Malam"} profileImg={"empty.png"} email={"ishaq.malam@gmail.com"} />
					<Notifications />
					<Security />
					<ConnectedAccounts />
					<DangerZone />
				</main>
			</div></>
	);
};
export default StakeholderProfilePage;
