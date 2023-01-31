import { memo } from "react";
import styled from "styled-components"

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.65);
	z-index: 10;
`
const OverlayComponent = memo(() => (
	<Overlay />
))
export default OverlayComponent;
