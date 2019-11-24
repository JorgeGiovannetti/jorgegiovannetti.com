import styled from "styled-components";
import Row from "react-bootstrap/row";
import Button from "react-bootstrap/button";

const Container = styled.div`
	padding: 10px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background: #f0f0f0;
`;

const GioRow = styled(Row)`
	margin: 5px;
	border-radius: 5px;
	padding: 5px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const GioButton = styled(Button)`
	margin: 5px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white !important;
`;
const BodyText = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 65%;
	margin: 0 auto;
	padding: 5px;
	text-align: center;
`;

export { Container, GioRow, GioButton, BodyText };
