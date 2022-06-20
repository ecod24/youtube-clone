import { useParams } from "react-router-dom";

function withParams(Component) {
	return function (props) {
		const params = useParams();
		return <Component params={params} {...props} />;
	};
}
export default withParams;
