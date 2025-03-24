import { User, Users } from "lucide-react";
import { motion } from "framer-motion";
import StatCard from "./StatCard";
import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className='flex w-screen justify-center items-center'>


            <main className='flex flex-col justify-center max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <img class="flex w-80 h-80 rounded-full mx-50  my-10" src="logo.jpg" alt="user photo" />
                <motion.div
                    className='flex justify-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Link key="/user" to="/user">
                        {/* <StatCard name='Punch Power (N)' icon={Zap} value="Users" color='#6366F1' /> */}
                        <motion.div
                            className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 px-10 mx-5'
                            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                        >
                            <div className='px-4 py-5 sm:p-6'>

                                <span className='flex items-center text-3xl font-bold '>
                                    <User size={50} className='mr-2' style={{ color: "#6366F1" }} />
                                    Users
                                </span>
                            </div>
                        </motion.div>
                    </Link>

                    <Link key="/stakeholder" to="/stakeholder">

                        <motion.div
                            className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700'
                            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                        >
                            <div className='px-4 py-5 sm:p-6'>

                                <span className='flex items-center text-3xl font-bold '>
                                    <Users size={50} className='mr-2' style={{ color: "#10B981" }} />
                                    Stakeholders
                                </span>
                            </div>
                        </motion.div>
                    </Link>

                    {/* <Link key="/stakeholder" to="/user"><StatCard name='Reflex Time (ms)' icon={ShoppingBag} value="Stakeholder" color='#EC4899' /></Link> */}


                </motion.div>


            </main>
        </div>
    );
};
export default Hero;