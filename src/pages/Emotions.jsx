import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFB6C1", // Lighter pink color for the cells
    height: "100vh", // Full height of the viewport
    padding: theme.spacing(2), // Some padding around the grid
  },
  cell: {
    backgroundColor: "#FFC0CB", // Pink color for the background
    height: "100%", // Full height of the parent container (the Grid item)
    padding: theme.spacing(2), // Some padding inside the cells
    borderRadius: "15px", // Rounded corners
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)", // Box shadow
  },
  bulletPoint: {
    "&::before": {
      content: '"• "',
      color: "#000",
    },
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%", // This will make it take up all the available height in the cell
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const Emotions = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} sm={6}>
        <div className={classes.cell}>DECISION MAKING PROCESS</div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={classes.cell}>
          DIMENSIONS
          <Box className={classes.imageContainer}>
            <img
              src="./images/Emotions_Dimensions.png"
              alt="Your alt text"
              className={classes.image}
            />
          </Box>
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <div className={classes.cell}>
          FUNCTION
          <List>
            <ListItem className={classes.bulletPoint}>
              <ListItemText
                primary={
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    Informing players about the state of their character
                  </Typography>
                }
              />
            </ListItem>
            <ListItem className={classes.bulletPoint}>
              <ListItemText
                primary={
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    Advice and suggest possible solutions to the player
                  </Typography>
                }
              />
            </ListItem>
            {/* more list items */}
          </List>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={classes.cell}>
          COMMON MISCONCEPTIONS
          <List>
            <ListItem className={classes.bulletPoint}>
              <ListItemText
                primary={
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    Emotion itself is the problem and needs to be coped with
                  </Typography>
                }
              />
            </ListItem>
            <ListItem className={classes.bulletPoint}>
              <ListItemText
                primary={
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    Emotion itself is the problem and needs to be coped with
                  </Typography>
                }
              />
            </ListItem>
            {/* more list items */}
          </List>
        </div>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <div className={classes.cell}>PERKS</div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div className={classes.cell}>CHARACTERISTICS</div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div className={classes.cell}>BUGS</div>
      </Grid>
    </Grid>
  );
};

export default Emotions;
