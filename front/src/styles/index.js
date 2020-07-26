import { Tooltip } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

/**
 * TopicListStyles
 */
export const useTopicListStyles = makeStyles((theme) => ({
	root: {
		width: "70px",
		height: "100vh",
		background: "#212529",
		color: "white",
	},
}));

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
 * GridStyles
 */
export const useGridStyles = makeStyles((theme) => ({
	item: {
		width: `calc(100% - 70px)`,
	},
}));

/**
 * AppBarStyles
 */
export const useAppBarStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#495057",
	},
	toolbar: {
		justifyContent: "space-between",
	},
	button: {
		color: "#adb5bd",
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
