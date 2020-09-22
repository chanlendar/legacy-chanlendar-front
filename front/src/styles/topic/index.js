import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";

/**
 * TopicStyles
 */
export const useTopicStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(2),
	},
	circle: {
		width: "50px",
		height: "50px",
		background: "#495057",
		transition: "all .3s",
	},
}));

/**
 * TopicButtonStyles
 */
export const useTopicButtonStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100%",
		color: "#adb5bd",
		fontSize: "20px",
	},
}));

/**
 * useTopics Styles
 */
export const useTopicsStyles = makeStyles((theme) => ({
	root: {
		width: "70px",
		height: "100%",
		background: "#212529",
		color: "white",
		overflowY: "scroll",
		maxHeight: "100vh",
		"&::-webkit-scrollbar": {
			width: "0px",
		},
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
