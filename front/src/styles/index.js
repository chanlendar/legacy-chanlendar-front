import { Tooltip } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

/**
 * TopicListStyles
 */
export const useTopicListStyles = makeStyles((theme) => ({
	root: {
		width: "70px",
		height: "100%",
		background: "#212529",
		color: "white",
		overflowY: "scroll",
		maxHeight: "100vh",
		'&::-webkit-scrollbar': {
			width: "0px"
		}
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
		marginTop: "64px",
	},
}));

/**
 * Popup(modal) Styles
 */
export const usePopupStyles = makeStyles((theme) => ({
	popup: {
		width: "600px",
		height: "337.5px",
		backgroundColor: "#343a40",
		color: "#f1f3f5",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	},
	form: {
		width: "90%",
		marginTop: "55px",
		margin: "auto",
	},
	buttons: {
		width: "90%",
		marginTop: "90px",
		margin: "auto",
		display: "flex",
		justifyContent: "space-between",
	}
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
