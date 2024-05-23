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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testimonial from "./Testimonial"; // Adjust the import path as needed

const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  borderRadius: "30%",
  backgroundColor: "white",
  overflow: "hidden",
}));

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyles = makeStyles((theme) => ({
  root: {},
  PaperCont: {
    padding: "30px",
    position: "relative",
    overflow: "hidden",
    width: 800,
    left: 300,
    height: 300,
    boxShadow: 24,
    borderRadius: "50px",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      height: "100%",
    },
  },
}));

const ModalExp = ({ children = {}, Team = [] }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleOpen = (index) => () => setOpenModalIndex(index);
  const handleClose = () => setOpenModalIndex(null);

  return (
    <div className={classes.root}>
      <Carousel responsive={responsive} infinite autoPlaySpeed={2000} autoPlay>
        {Team.map((item, index) => (
          <div key={index}>
            <Paper
              component={StyledButtonBase}
              className={classes.PaperCont}
              elevation={10}
              onClick={handleOpen(index)}
              style={{ cursor: "pointer" }}
            >
              <Grid container spacing={2}>
                <Grid item xs>
                  <Avatar
                    src={item.src}
                    style={{
                      height: 200,
                      width: 200,
                      top: isMobile ? "0" : "0%",
                      right: isMobile ? "15%" : null,
                      left: isMobile ? null : "0%",
                    }}
                  />
                </Grid>
                <Grid item xs={isMobile ? 0 : 8}>
                  <Box>
                    <Typography variant={isMobile ? "h4" : "h3"} align="center">
                      {item.CardTitle}
                    </Typography>
                    <Typography variant="h4" paragraph={true}>
                      {item.CardContent}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
            <Modal open={openModalIndex === index} onClose={handleClose}>
              <Box
                style={{
                  position: "absolute",
                  top: "2%",
                  left: "3%",
                  width: isMobile ? "90%" : 1400,
                  boxShadow: 24,
                  padding: "20px",
                }}
              >
                <Testimonial Team={[item]} />
              </Box>
            </Modal>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ModalExp;
