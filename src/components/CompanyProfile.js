import React from "react";
import {
  makeStyles,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
} from "@material-ui/core";
import emblem from "../images/emblem.svg";
import ladder from "../images/ladder.svg";


const useStyles = makeStyles((theme) => ({
  "@keyframes rotate": {
    "0%": {
      transform: "rotateY(0deg)",
    },
    "100%": {
      transform: "rotateY(360deg)",
    },
  },

  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    zIndex: -1,
    padding: theme.spacing(2),
  },

  card: {
    maxWidth: 600,
    width: "100%",
    position: "absolute",
    right: 410,
    top: 250,
    backgroundColor: "#f5f5f5",
    boxShadow: "10px 10px 0px 0px rgba(0, 0, 0, 0.2)",
  },
  card2: {
    maxWidth: 1000,
    width: "100%",
    position: "absolute",
    top: 600,
    left: 430,
    backgroundColor: "#f5f5f5",
    boxShadow: "10px 10px 0px 0px rgba(0, 0, 0, 0.2)",
  },
  card2000: {
    maxWidth: 250,
    width: "100%",
    position: "absolute",
    left: 180,
    top: 1260,
    backgroundColor: "#f5f5f5",
    boxShadow: "10px 10px 0px 0px rgba(0, 0, 0, 0.2)",
  },

  card2006: {
    maxWidth: 250,
    width: "100%",
    position: "absolute",
    left: 500,
    top: 1262,
    backgroundColor: "#f5f5f5",
    boxShadow: "10px 10px 0px 0px rgba(0, 0, 0, 0.2)",
  },
  card2011: {
    maxWidth: 250,
    width: "100%",
    position: "absolute",
    left: 830,
    top: 1110,
    backgroundColor: "#f5f5f5",
    boxShadow: "10px 10px 0px 0px rgba(0, 0, 0, 0.2)",
  },
  card2022: {
    maxWidth: 250,
    width: "100%",
    position: "absolute",
    left: 1160,
    top: 1120,
    backgroundColor: "#f5f5f5",
    boxShadow: "10px 10px 0px 0px rgba(0, 0, 0, 0.2)",
  },
  card2023: {
    maxWidth: 250,
    width: "100%",
    position: "absolute",
    left: 1470,
    top: 1105,
    backgroundColor: "#f5f5f5",
    boxShadow: "10px 10px 0px 0px rgba(0, 0, 0, 0.2)",
  },
  avatarCont: {
    width: "20rem",
    height: "20rem",
    left: 400,
    top: 230,
    position: "absolute",
    zIndex: "10",
  },
  Avatar: {
    width: "100%",
    height: "100%",
    right: 200,
    transformStyle: "preserve-3d",
    animation: "$rotate 5s linear infinite",
  },

  ladder: {
    position: "absolute",
    top: 1000,
    left: 200,
    width: "80%",
    zIndex: -1,
  },
}));

const CompanyProfile = () => {
  const classes = useStyles();

  return (
    <div>
      <Box
        fontFamily={"poppins"}
        fontWeight={800}
        fontSize={50}
        marginTop={10}
        marginLeft={10}
        style={{ color: "#000000" }}
      >
        COMPANY PROFILE
      </Box>
      <div className={classes.root}>
        <div className={classes.avatarCont}>
          <Avatar alt="Company Logo" src={emblem} className={classes.Avatar} />
        </div>
        <Card className={classes.card}>
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="h3"
                component="h1"
                fontFamily={"poppins"}
                gutterBottom
              >
                <Box fontWeight={800} style={{ color: "#ff7704" }}>
                  RADZTECH BUSINESS SOLUTION
                </Box>
              </Typography>
              <Box style={{ color: "#000000" }}>
                <Typography
                  style={{ position: "right" }}
                  variant="body1"
                  align="justify"
                  paragraph
                >
                  A software company geared towards providing quality software
                  to its clients thru dedication, integrity and continued
                  customer support. We create a customized system built around
                  the client’s needs and based on their requirements to ensure
                  that the software meets their specific standards. We provide a
                  product and a service with a decade of software research and
                  development with the supervision and guidance of Certified
                  Public Accountants and Accounting experts.
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </div>
      <Card className={classes.card2}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="h3"
              component="h1"
              fontFamily={"poppins"}
              gutterBottom
            >
              <Box fontWeight={800} style={{ color: "#ff7704" }}>
                ABOUT RADZTECH
              </Box>
            </Typography>
            <Box fontFamily="poppins">
              <ul></ul>
              <Typography align="justify">
                Radztech was conceived when software providers were still scarce
                and development of computer software by developers from Metro
                Manila were costly.
              </Typography>
              <ul></ul>
              <Typography align="justify">
                It started when its founder, Rado D. Racimo, was still in
                college - creating a system for his thesis entitled Computerized
                Enrollment System of Our Lady of the Pillar College – Cauayan,
                his alma mater. From the thesis proposal in Year 2000 which
                later turned out to be the first large scale project delivered
                successfully, it is now one of the main products provided by
                Radztech.
              </Typography>
              <ul></ul>
              <Typography align="justify">
                Just after his graduation in 2001, he then started marketing his
                software and services as a computer programmer. In year 2004, he
                passed the 2004 ICT Proficiency Examination in Programming
                administered by the National Computer Center and the Civil
                Service Commission. He was one of the only six passers among 80
                examinees nationwide, ranked 2nd and the lone passer in Region
                II. Operating for at least a decade now, Radztech has already
                helped more than 20 companies under different industries in
                Region I, II and IV.
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <img alt="ladder" src={ladder} className={classes.ladder}></img>
    </div>
  );
};

export default CompanyProfile;
