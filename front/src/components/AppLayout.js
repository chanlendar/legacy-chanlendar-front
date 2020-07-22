import React from "react";
import TopicList from "./TopicList";
import MenuBar from "./MenuBar";
import Row from "./Row";
import Col from "./Col";
import Contents from "./Contents";

function AppLayout() {
	return (
		<Row>
			<Col>
				<TopicList />
			</Col>
			<Col>
				<Row>
					<Col>
						<MenuBar />
					</Col>
				</Row>
				<Row>
					<Col>
						<Contents />
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default AppLayout;
