import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Paper } from "@material-ui/core";

/**
 * ContainerStyles
 */
export const useContainerStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#343a40",
		height: "calc(100vh - 64px)",
		overflow: "scroll",
		"&::-webkit-scrollbar": {
			width: "0px",
		},
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

/**
 * Table-Button Styles
 */
export const CustomButton = withStyles({
	root: {
		minWidth: "0px",
		padding: "6px 14px",
	},
	outlined: {
		padding: "5px 13px",
	},
})(Button);
