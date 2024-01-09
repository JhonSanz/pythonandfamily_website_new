"use client"
import { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import COLORS from '@/utils/colors';
import CustomChip from '@/styled/chip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ES, EN } from '@/utils/const';
import { ThemeProvider } from '@/utils/providers';

const EnglishVersion = ({ subject, setOpen }) => (
  <Grid container p={5}>
    <Grid item xs={12}>
      <h1>Welcome</h1><hr />
    </Grid>
    <Grid item xs={12} sm={12} md={6} p={1} >
      <Card sx={{ minHeight: "310px" }}>
        <CardContent>
          <h3>What is this web about?</h3>
          <p>You will find a lot of things here, nothing that is not in the books. But, that is not certainly the most important. I wanted to expose some math concepts which are sometimes difficult to understand (like it was for me).</p>
          <p>I will try to cover topics that are great to study with a visual reference. Also, I know that all has to have mathematical strictness, so I will quote references from the book I used to create this website because I'm am not either a mathematician nor a "nerd". I am just a normal human being who wants to learn by myself, things that I couldn't learn in the university.</p>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={12} md={6} p={1} >
      <Card sx={{ minHeight: "310px" }}>
        <CardContent>
          <h3>Why is this important?</h3>
          <p>Nowadays, artificial intelligence is growing up quickly. Even a lot of people (like me) are getting worry because we are near to lose our jobs because it is so posible that we can be replaced by an algorithm. I know that some artificial intelligence can compute 1000X faster than me. Even IA can understand better all math topics than any human.</p>
          <p>It sounds bad. We can assume that it is not important to learn something new, and it makes kind of sense. But, with the time I realized that learning math goes beyond computing something in your head or approving your test. For me, learning math is a <b>rebellion</b> tool because it forces you to question yourself all the time.</p>
          <p></p>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} textAlign={"center"} sx={{ backgroundColor: COLORS.lightGray, padding: "20px" }}>
      <b><cite>"Nullius in verba"</cite></b>
      <p>The Royal Society website says that the motto is "an expression of the determination of Fellows to withstand the domination of authority and to verify all statements by an appeal to facts determined by experiment".</p>
    </Grid>
    <Grid item xs={12} textAlign={"center"} mt={5}>
      <CustomChip
        label="Click to start!"
        sx={{ fontSize: "15pt", cursor: "pointer" }}
        color="primary"
        onClick={() => setOpen(true)}
        subject={subject}
      />
    </Grid>
  </Grid>
)

const SpanishVersion = ({ subject, setOpen }) => (
  <Grid container p={5}>
    <Grid item xs={12}>
      <h1>Bienvenido</h1><hr />
    </Grid>
    <Grid item xs={12} sm={12} md={6} p={1} >
      <Card sx={{ minHeight: "310px" }}>
        <CardContent>
          <h3>¿De qué se trata esta página web?</h3>
          <p>Encontrarás muchas cosas aquí, nada que no esté en los libros. Pero eso ciertamente no es lo más importante. Quería exponer algunos conceptos matemáticos que a veces son difíciles de entender (como lo fue para mí).</p>
          <p>Intentaré cubrir temas que son excelentes para estudiar con una referencia visual. Además, sé que todo debe tener rigor matemático, así que citaré referencias del libro que utilicé para crear este sitio web porque no soy ni matemático ni "friki". Solo soy un ser humano normal que quiere aprender por sí mismo cosas que no pude aprender en la universidad.</p>

        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={12} md={6} p={1} >
      <Card sx={{ minHeight: "310px" }}>
        <CardContent>
          <h3>¿Por qué esto es importante?</h3>
          <p>Hoy en día, la inteligencia artificial está creciendo rápidamente. Incluso muchas personas (como yo) están preocupadas porque estamos cerca de perder nuestros trabajos, ya que es muy posible que podamos ser reemplazados por un algoritmo. Sé que algunas inteligencias artificiales pueden calcular 1000 veces más rápido que yo. Incluso la IA puede comprender mejor todos los temas matemáticos que cualquier ser humano.</p>
          <p>Suena mal. Podríamos asumir que no es importante aprender algo nuevo, y eso tiene sentido de alguna manera. Pero con el tiempo, me di cuenta de que aprender matemáticas va más allá de calcular algo en tu cabeza o aprobar tus exámenes. Para mí, aprender matemáticas es una herramienta de <b>rebelión</b>, porque te obliga a cuestionarte constantemente a ti mismo.</p>
          <p></p>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} textAlign={"center"} sx={{ backgroundColor: COLORS.lightGray, padding: "20px" }}>
      <b><cite>"Nullius in verba"</cite></b>
      <p>El sitio web de la Royal Society dice que el lema es "una expresión de la determinación de los Miembros de resistir la dominación de la autoridad y verificar todas las afirmaciones mediante una apelación a los hechos determinados por experimentos".</p>
    </Grid>
    <Grid item xs={12} textAlign={"center"} mt={5}>
      <CustomChip
        label="Haz click para empezar!"
        sx={{ fontSize: "15pt", cursor: "pointer" }}
        color="primary"
        onClick={() => setOpen(true)}
        subject={subject}
      />
    </Grid>
  </Grid>
)

const Home = () => {
  const { setOpen, subject, language } = useContext(ThemeProvider);

  return (
    <div style={{
      height: '90vh', justifyContent: 'space-between',
      flexDirection: 'column', display: 'flex'
    }}>
      {language === ES && <SpanishVersion subject={subject} setOpen={setOpen} />}
      {language === EN && <EnglishVersion subject={subject} setOpen={setOpen} />}
      <div style={{ textAlign: "center" }}>
        <IconButton aria-label="delete" onClick={() => window.open('https://www.linkedin.com/in/jhon-sanz-147593166/')}>
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => window.open('https://github.com/JhonSanz')}>
          <GitHubIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Home;