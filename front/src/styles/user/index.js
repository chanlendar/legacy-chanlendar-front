import { makeStyles } from "@material-ui/core/styles";

/**
 * Unselect Styles
 */
export default makeStyles((theme) => ({
	unselectable: {
		MozUserSelect: "none",
		WebkitUserSelect: "none",
		msUserSelect: "none",
		userSelect: "none",
		pointerEvents: "none",
	},
}));

/**
 * Authorization Styles
 */
export const useAuthStyles = makeStyles((theme) => ({
	container: {
		width: "50%",
		margin: "0 auto",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
	},
	table: {
		backgroundColor: "#495057",
	},
}));