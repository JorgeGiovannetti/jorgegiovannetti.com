import styled from "styled-components";
import { SocialIcon as SocIc } from "react-social-icons";

const SocialIcon = styled(SocIc)`
	height: 40px !important;
	width: 40px !important;
	margin-right: 15px;
	margin-bottom: 15px;
	margin-top: 15px;

	padding: 10px;

	&:hover {
		background-color: #e5e5e5;
		border-radius: 50%;
		box-shadow: 0 0 0 4px #e5e5e5;
		height: 45px !important;
		width: 45px !important;
		margin-bottom: 10px;
		margin-right: 10px;
	}
`;

export { SocialIcon };
