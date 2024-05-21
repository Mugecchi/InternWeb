import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  // Avatar,
  AppBar,
  Toolbar,
  makeStyles,
  Link,
  Box,
  Container,
  // Collapse,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const pages = [
  "Home",
  "About",
  "Teams",
  "Contibution",
  "Message",
  "Gallery",
  "FAQS",
  "Contact Us",
];

const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: "#fff",
    height: 60,
    justifyContent: "center",
  },
  appBar: {
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  },

  iconContainer: {
    display: "flex",
    gap: ".3em",
    alignItems: "center",
    filter: "grayscale(10%)",
    transition: "all 500ms ease-in-out",
    [theme.breakpoints.down("md")]: {
      flexGrow: 1,
    },
    "&:hover": {
      filter: "grayscale(0)",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();

  // const [open, setOpen] = useState(false);
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <AppBar elevation={2} color="inherit">
      <Container maxWidth="lg">
        <Toolbar disableGutters className={classes.toolbar}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {!isXs &&
              pages.map((page, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  variant="h6"
                  to={
                    page.toLowerCase() === "home"
                      ? "/"
                      : `/${page.toLowerCase().replace(" ", "-")}`
                  }
                  underline="none"
                  color="textPrimary"
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  {page}
                </Link>
              ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
