import React, { useState } from "react";
import {
  Modal,
  Box,
  ButtonBase,
  Avatar,
  Paper,
  Container,
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

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: theme.spacing(2),
  },
  PaperCont: {
    padding: "30px",
    position: "relative",
    overflow: "hidden",
    width: "80vh",
    height: "100%",
    boxShadow: 24,
    borderRadius: "50px",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      height: "100%",
    },
  },
  carouselItem: {
    marginRight: "10vh", // Adjust the margin as needed
  },
  blurWrapper: {
    position: "relative",
    overflow: "hidden",
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "50px",
      zIndex: 1,
    },
    "&::before": {
      left: 0,
      background:
        "linear-gradient(to right, rgba(1, 28, 37, 1), rgba(1, 28, 37, 0))",
      filter: "blur(0px)",
      zIndex: 1,
    },
    "&::after": {
      right: 0,
      background:
        "linear-gradient(to left, rgba(1, 28, 37, 1), rgba(1, 28, 37, 0))",
      filter: "blur(0px)",
      zIndex: 1,
    },
  },
}));

const ModalExp = ({ children = {}, Team = [] }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleOpen = (index) => () => setOpenModalIndex(index);
  const handleClose = () => setOpenModalIndex(null);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={classes.root}>
      <div className={classes.blurWrapper}>
        <Carousel
          responsive={responsive}
          infinite
          autoPlaySpeed={2000}
          autoPlay
          centerMode
        >
          {Team.map((item, index) => (
            <div key={index} className={classes.carouselItem}>
              <Paper
                component={StyledButtonBase}
                className={classes.PaperCont}
                elevation={10}
                onClick={handleOpen(index)}
                style={{ cursor: "pointer" }}
              >
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={4}>
                    <Avatar
                      src={item.src}
                      style={{
                        height: "25vh",
                        width: "25vh",
                        top: isMobile ? "0" : "0%",
                        right: isMobile ? "15%" : null,
                        left: isMobile ? null : "0%",
                      }}
                    />
                  </Grid>
                  <Grid item xs>
                    <Box>
                      <Typography variant={isMobile ? "h1" : "h1"}>
                        {item.NickName}
                      </Typography>
                      <Typography variant="h4">{item.CardTitle}</Typography>
                      <Typography variant="h4"> {item.CardContent}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
              <Modal open={openModalIndex === index} onClose={handleClose}>
                <Grid
                  container
                  style={{
<<<<<<< HEAD
                    left: "3vw",
=======
                    left: "4vw",
>>>>>>> eb34f83a89d59f9bc9e8685ceb9bd6ff1f58c06d
                    width: "100vh",
                    borderRadius: "50px",
                    position: "absolute",
                    top: "5vh",
                  }}
                >
                  <Testimonial Team={[item]} />
                </Grid>
              </Modal>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ModalExp;
