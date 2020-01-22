import styled from "styled-components";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SpotifyButton = styled(Button)`
	background: green;
	margin-right: 5px;
	margin-left: 5px;
`;

const SocialIcon = styled(FontAwesomeIcon)`
	margin-right: 3px;
`;

export { SpotifyButton, SocialIcon };
