import { BarChart2, Menu, TrendingUp, User, Users } from "lucide-react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ClientPage = (props) => {
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

                { name: "Profile", icon: User, color: "#10B981", href: "/stakeholderProfile" },
            ]}></Sidebar>
            <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
                <Header title={"Clients"} />

                <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                    <Link key="/client" to="/StakeholderDashboard" >
                        <motion.div
                            className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 px-10 py-5 max-w-3/6'
                            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                        >
                            <div className='flex flex-col sm:flex-row items-center mb-6'>
                                <img
                                    // src='https://randomuser.me/api/portraits/men/3.jpg'
                                    src='empty.png'
                                    alt='Profile'
                                    className='rounded-full w-20 h-20 object-cover mr-4'
                                />

                                <div>
                                    <h3 className='text-lg font-semibold text-gray-100'>Kinal Patel</h3>
                                    <p className='text-gray-400'>Kinal.Patel@gmail.com</p>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </main>
            </div></>
    );
};
export default ClientPage;
