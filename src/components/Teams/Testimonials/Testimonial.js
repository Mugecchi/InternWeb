import Joan from "../../../images/joan.jpg";
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
      </Grid>
    </Container>
  );
}
