import { Tooltip } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

/**
 * TopicStyles
 */
export const topicStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(2),
	},
	circle: {
		width: "50px",
		height: "50px",
		background: "#495057",
	},
}));

/**
 * TopicButtonStyles
 */
export const topicButtonStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100%",
		color: "white",
		fontSize: "20px",
	},
}));

/**
 * CustomTooltip
 * Tooltips component 필요
 */
export const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: theme.palette.common.black,
		fontSize: "16px",
		marginLeft: theme.spacing(3),
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	arrow: {
		color: theme.palette.common.black,
	},
}))(Tooltip);
