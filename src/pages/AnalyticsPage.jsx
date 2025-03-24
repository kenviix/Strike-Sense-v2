import Header from "../components/common/Header";

import Table from "../components/Table/Table"

const AnalyticsPage = (props) => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title={"Analytics Dashboard"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<Table punchData={props.punchData}></Table>
			</main>
		</div>
	);
};
export default AnalyticsPage;
