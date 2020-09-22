import { makeStyles } from "@material-ui/core/styles";

/**
 * Popup(modal) Styles
 */
export default makeStyles((theme) => ({
	modal: {
		width: "60%",
		padding: "30px",
		backgroundColor: "#212529",
		color: "#e9ecef",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	},
	buttons: {
		marginTop: "10px",
	},
}));