import * as React from "react";
import { Button } from "@material-ui/core";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
// Collapse
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import { LocationDisabled } from "@material-ui/icons";
// Search Bar

// Jungian Concepts

let concepts = {
  anima: {
    definition:
      "Anima/Animus (lat.: breath of air, breath) are terms used in analytical psychology for the inner female and male parts in man. The anima denotes the specific totality of all conscious and unconscious aspects of the female principle in man, the animus the specific totality of all conscious and unconscious aspects of the male principle in woman.",
    information:
      "The terms anima and animus were philosophically understood to mean 'soul' in general. Anima designates more the driving, living, natural, 'animal' aspect, which stands e.g. also in the foreground of the cosmic Anima-mundi conceptions and images. Animus as Spiritus (lat.: breath, moving air, wind, breath of life, breath) emphasizes the spirit-directing aspect, as it is expressed for example in the terms 'Spiritus sanctus' (the holy spirit) or 'Spiritus Rector' (guiding, driving, animating spirit). The images of Anima/Animus are distinguished from the archetype of the Great Mother or the Great Father and the mother and father images that every human being carries within himself. Anima/Animus develop and differentiate from Mother and Father archetypes in the course of psychic development. This psychic development from dependence and attachment to the parents to the development of independence and ability to relate to partners of the same age object-stage, to the gaining of one's own independent femininity and masculinity and contact with the opposite-sex inner parts for the development of psychic wholeness subject-stage, is what E. Neumann calls liberation from captivity. Widespread is this motif of liberation from captivity in male heroic stories, in which the captive embodies access to the treasure, sometimes the treasure itself. The path to the opposite sex, however, differs, as the heroic stories of women show, depending on whether a more masculine or feminine-oriented personality with its respective specific skills and knowledge is on the quest.",
    interpretation:
      "The psychic impact, the great fascination, the object-level and subject-level significance of anima/animus figures and designs is evident in the great couples and heroic and love stories of humanity, such as: Cupid and Psyche, Tristan and Isolde, Caesar and Cleopatra, Romeo and Juliet, Scarlett O'Hara/Vivien Leigh and Rhett Butler/Clark Gable (Gone with the Wind), Rick Blaine/Humphrey Bogart and Ilsa Lund/Ingrid Bergman (Casablanca), Leonardo di Caprio and Kate Winslet (Titanic). Female or male figures and symbols in dreams, fantasies, imagination can carry mother/father, shadow, anima/animus or self aspects, depending on the initial situation and development of the ego consciousness. In general, opposite-sex same-aged and younger figures can be interpreted as anima/animus facets; if they are same-sex, they usually embody shadow aspects, according to the traditional understanding of C. G. Jung. If figures are older, rich in experience and wisdom, or contain aspects of the eternal and infinite and unchanging, they probably refer more to parent or self aspects. The action of the anima opens the male ego to the unconscious and feminine, the action of the animus leads the female ego into activity and autonomy. Anima/Animus symbols can appear fertilizing, enlivening and liberating as well as cold, dangerous, imprisoning, killing. Like all archetypal energies, they can only be understood in polar terms. C. G. Jung Jung distinguishes four stages in the culture of Eros and thus also of the anima image (cf. Jung, GW 16, §361). The first level (in the form of the primordial mother, Eve) forms the purely biological, earthy aspect, predominantly serving reproduction (cf. bios principle), the second level concerns a predominantly sexual Eros on an aesthetic and romantic level (e.g. in the form of Helen), the third level raises Eros to the highest esteem and spiritualizes it (e.g. in the form of Mary, spiritual motherhood) and on the fourth level wisdom is found (e.g. in the form of Sophia). Anima symbols often have a mixture of these stages: Elements of young, virginal, spring, blossoming nature, the body and landscapes. They are associated with beauty, adornment, eroticism, sexuality and animalism, with attachment, closeness, relationship, harmony, empathy and sensitivity, delicacy and tenderness, joy, pleasure, ecstasy, mysterious-seductive, witch-like-nix-like also knowing-sacred fascination and with creative-creative attributes. Associations and designs of personal anima symbols can be enriched with the collective images of anima/animus in almost infinite variety, e.g. as Eve with the apple in paradise, as Saint Mary and whore Mary Magdalene, as Venus in Botticelli's painting, as an auspiciously indeterminate Mona Lisa, as a dangerous Loreley, mermaid, and mermaid in popular poetry; as a blue angel, dancer, actress, and seductive whore in novels, as a companion, friend, sister, and companion such as. Pamina in The Magic Flute, for example; as a chaste, naive, childlike, innocent, and ambiguous girl-lover and Lolita; and as countless other female figures from past and present. E. Jung (cf. Jung, E., 1967) distinguished four aspects or stages of the animus: force (e.g., 'nature boy,' adventurer), deed (e.g., courageous heroes, athletes, tenors), word (e.g., artists, actors, managers, politicians), and spirit (pastors, therapists, gurus). Often the animus also appears in fantasies and dreams in the plural, as an expression of a polygamous tendency compensating, as C. G. Jung suspects, the conscious, rather monogamously oriented attitude of the woman. Animus symbols often bring phallic elements to the fore, be they of a physical-sensual or spiritual nature: Courage, determination, energy, endurance, willpower, steadfastness, determination, penetration, decision-making and judgment, sincerity, autonomy and stubbornness, athletic-muscular, athletic body, animal-ecstatic vitality and potency, possibility of struggle and aggression, sovereignty, competence and knowledge, devil-magical seduction, success, power and money, adventurousness, future orientation. Worldwide and across time, they appear both in the Great Hero, Liberator, Lightbringer, and in the heroes of everyday life. A tremendous variety of positive and negative animus figures are depicted in myths, legends, fairy tales, visual arts: Adventurers, knights, Western heroes, magicians, gods, fighters and saviors such as Siegfried, Tarzan and Rambo, generals and politicians such as Caesar, Napoleon and John F. Kennedy; philosophers, scientists, business leaders, legendary athletes, pop idols, actors and many more. Anima/Animus symbols have a particularly high fascination when they appear in dreams, fantasies and imaginations. Real relationships are often overlaid by the anima/animus facets and can lead to strong projections that make it very difficult to relate to the real partner.",
  },
  umfrage1: {
    title: "",
    kategories: [
      {
        categoryName: "",
        statements: [
          { statement: "", value: "" },
          { statement: "", value: "" },
          { statement: "", value: "" },
          { statement: "", value: "" },
          { statement: "", value: "" },
          { statement: "", value: "" },
        ],
      },
      {
        categoryName: "",
        statements: [
          { statement: "", value: "" },
          { statement: "", value: "" },
          { statement: "", value: "" },
          { statement: "", value: "" },
          { statement: "", value: "" },
          { statement: "", value: "" },
        ],
      },
    ],
  },
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function JungTheory() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  // Collapse own
  const [on, setOn] = React.useState(false);

  const handleOn = () => {
    setOn((prev) => !prev);
  };
  const [on2, setOn2] = React.useState(false);

  const handleOn2 = () => {
    setOn2((prev) => !prev);
  };

  const [on3, setOn3] = React.useState(false);

  const handleOn3 = () => {
    setOn3((prev) => !prev);
  };

  const [on4, setOn4] = React.useState(false);

  const handleOn4 = () => {
    setOn4((prev) => !prev);
  };

  const [on5, setOn5] = React.useState(false);

  const handleOn5 = () => {
    setOn5((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Box sx={{ margin: "auto", width: "80%", bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleOn}>
                <ListItemIcon>
                  <Avatar src="./images/jung_concepts/anima.jpg"></Avatar>
                </ListItemIcon>
                <ListItemText primary="Anima" />
              </ListItemButton>
            </ListItem>
            <Collapse in={on}>
              <b>Definition: </b>
              {concepts.anima.definition} <br /> <br />
              <b>Information: </b> {concepts.anima.information} <br /> <br />
              <b>Interpretation: </b> {concepts.anima.interpretation}
            </Collapse>

            <ListItem disablePadding>
              <ListItemButton onClick={handleOn2}>
                <ListItemIcon>
                  <Avatar src="./images/jung_concepts/animus.jpg"></Avatar>
                </ListItemIcon>
                <ListItemText primary="Animus" />
              </ListItemButton>
            </ListItem>
            <Collapse in={on2}>
              <b>Definition: </b>
              {concepts.anima.definition} <br /> <br />
              <b>Information: </b> {concepts.anima.information} <br /> <br />
              <b>Interpretation: </b> {concepts.anima.interpretation}
            </Collapse>
          </List>
        </nav>
        <Divider />
      </Box>
    </React.Fragment>
  );
}

export default JungTheory;
