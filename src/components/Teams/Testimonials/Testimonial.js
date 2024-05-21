import Joan from "../images/joan.jpg";
import Adonis from "../images/adonis.jpg";
import migs from "../images/migs.jpg";
import frenalyn from "../images/frenalyn.jpg";
import frenan from "../images/frenan.jpg";
import pat from "../images/patricia.jpg";
import andeng from "../images/andrea.jpg";
import ben from "../images/benedick.jpg";
import jom from "../images/joemar.jpg";
import nov from "../images/novelyn.jpg";
import ryan from "../images/ryan.jpg";
import randy from "../images/randy.jpg";
import angie from "../images/angelina.jpg";
import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
const useStyles = makeStyles({
  teamCard: {
    height: "20rem",
    width: "auto",
  },
});
const person = [
  {
    img: "",
  },
];
export default function Teams() {
  const classes = useStyles();
  return (
    <Container>
      <Grid spacing={4}>
        <Grid item xs={6}>
          <Grid
            className={classes.teamCard}
            elevation={8}
            container
            component={Paper}
          >
            <Grid item xs={5}>
              <img src={Joan} alt="Joan" />
            </Grid>
            <Grid item xs={6}>
              Name: Joan R. Batara <br />
              Position: Operations Team Intern <br />
              School: Isabela State University – Echague Main Campus <br />
              Course: Bachelor of Science in Management Accounting
            </Grid>
            <h3>TESTIMONIAL</h3>
            <br />
            <br />
            <br />
            LAGAY MO KAHIT ANO, KASI SINABI KO -JOAN 2024 MALI KA
          </Grid>
        </Grid>
        {/* <img src={Adonis} alt="Adooooooo" />
        <img src={migs} alt="migs" />
        <img src={frenalyn} alt="migs" />
        <img src={frenan} alt="migs" />
        <img src={pat} alt="migs" />
        <img src={andeng} alt="migs" />
        <img src={ben} alt="migs" />
        <img src={jom} alt="migs" />
        <img src={nov} alt="migs" />
        <img src={ryan} alt="migs" />
        <img src={randy} alt="migs" />
        <img src={angie} alt="migs" /> */}
      </Grid>
    </Container>
  );
}
