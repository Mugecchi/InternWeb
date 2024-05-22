import React, { useState } from "react";
import {
  Modal,
  Box,
  ButtonBase,
  Avatar,
  Paper,
  makeStyles,
  styled,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  borderRadius: "50%",
  overflow: "hidden",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    maxHeight: 1200,
  },
  PaperCont: {
    position: "absolute",
    padding: "30px",
    overflow: "HIDDEN",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 300,
    boxShadow: 24,
    borderRadius: "50px",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      height: "100%",
    },
  },
}));
const ModalExp = ({ children = {}, Team = {} }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <Paper className={classes.PaperCont} elevation={10}>
        <Grid container spacing={2}>
          <Grid item xs>
            <StyledButtonBase
              onClick={handleOpen}
              style={{
                height: 200,
                width: 200,
                top: isMobile ? "0" : "15%",
                right: isMobile ? "15%" : null,
                left: isMobile ? null : "10%",
              }}
            >
              <Avatar
                src={Team.BBase}
                style={{
                  height: isMobile ? "50%" : "100%",
                  width: isMobile ? "50%" : "100%",
                }}
              />
            </StyledButtonBase>
          </Grid>
          <Grid item xs={isMobile ? 0 : 8}>
            <Box>
              <Typography variant={isMobile ? "h4" : "h3"} align="center">
                {Team.CardTitle}
              </Typography>
              <Typography variant="h4" paragraph={true}>
                {Team.CardContent}
              </Typography>
              <Modal open={open} onClose={handleClose}>
                <Box
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: isMobile ? "50%" : 1400,
                    boxShadow: 24,
                  }}
                >
                  {children}
                </Box>
              </Modal>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ModalExp;
