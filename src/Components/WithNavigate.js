import { useNavigate } from "react-router-dom";

function withNavigate(Component) {
	return function (props) {
		const nagivate = useNavigate();
		return <Component navigate={nagivate} {...props} />;
	};
}
export default withNavigate;
