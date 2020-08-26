import { Tooltip, Paper } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

/**
 * useTopicsStyles
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
		backgroundColor: "#343a40",
	},
	toolbar: {
		justifyContent: "space-between",
	},
	button: {
		color: "#adb5bd",
	},
}));

/**
 * ContainerStyles
 */
export const useContainerStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#343a40",
		height: "calc(100vh - 64px)",
		overflow: "hidden",
	},
}));

/**
 * CardStyles
 */
export const useCardStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#495057",
		maxHeight: "calc(100vh - 176px)",
		overflow: "scroll",
		"&::-webkit-scrollbar": {
			width: "0px",
		},
	},
}));

/**
 * Popup(modal) Styles
 */
export const useModalStyles = makeStyles((theme) => ({
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

/**
 * Table-Button Styles
 */
export const useTableButtonStyles = makeStyles((theme) => ({
	root: {
		minWidth: "0px",
	},
}));

/**
 * Task Styles
 */
export const useTaskStyles = makeStyles((theme) => ({
	finished: {
		opacity: ".3",
	},
	notFinished: {
		opacity: "1",
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

/**
 * CustomPaper
 * Paper component 필요
 */
export const CustomPaper = withStyles((theme) => ({
	root: {
		backgroundColor: "#495057",
		transition: "all .3s",
		"&:not(:first-child)": {
			marginTop: theme.spacing(2),
		},
	},
}))(Paper);
