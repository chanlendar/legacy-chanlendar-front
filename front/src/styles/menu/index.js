import { makeStyles } from "@material-ui/core/styles";

/**
 * AppBarStyles
 */
export const useAppBarStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#343a40",
	},
	toolbar: {
		justifyContent: "space-between",
	},
	button: {
		color: "#adb5bd",
	},
}));
