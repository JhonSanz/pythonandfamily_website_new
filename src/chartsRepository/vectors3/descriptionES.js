import FormulaTable from 'utils/formulaTable';
import projection from "img/projections.png";
var Latex = require('react-latex');

const description = <div>
  <p>La desigualdad triangular dice que si sumas dos lados de un triángulo, el resultado será mayor o igual que el lado restante. Puede ser bastante obvio visualmente en nuestro contexto de vectores, pero en matemáticas todo debe demostrarse. Como podemos ver en nuestro gráfico, dados dos vectores <Latex>{"$A, B$"}</Latex>, la suma es <Latex>{"$A + B$"}</Latex>, usando la regla del paralelogramo. Para obtener la magnitud de cada uno, usamos <Latex>{"$\\lVert A \\rVert, \\lVert B \\rVert, $ y $\\lVert A + B\\rVert$"}</Latex>. Entonces, para presentarlo:</p>
  <p><b>Teorema</b>: Dados <Latex>{"$A, B$ en $V_{n}$"}</Latex></p>
  <FormulaTable data={[
    "$\\lVert A + B \\rVert \\leq \\lVert A \\rVert + \\lVert B \\rVert$"
  ]} />
  <p>Similar a la desigualdad de Cauchy-Schwarz, el signo igual es válido para vectores que son múltiplos escalares del otro. Para esta demostración, solo puedo decir que en algún momento un genio hizo lo siguiente:
  </p>
  <FormulaTable enableScroll data={[
    "$\\lVert A + B \\rVert^2 \\leq (\\lVert A \\rVert + \\lVert B \\rVert)^2$",
    "$(A+B)\\cdot(A+B) \\leq \\lVert A \\rVert^2 + 2 \\lVert A \\rVert \\lVert B \\rVert + \\lVert B \\rVert^2$",
    "$A \\cdot A + 2A \\cdot B + B \\cdot B \\leq \\lVert A \\rVert^2 + 2 \\lVert A \\rVert \\lVert B \\rVert + \\lVert B \\rVert^2$",
    "$\\lVert A \\rVert^2 + 2A \\cdot B + \\lVert B \\rVert^2 \\leq \\lVert A \\rVert^2 + 2 \\lVert A \\rVert \\lVert B \\rVert + \\lVert B \\rVert^2$",
    "$A \\cdot B \\leq \\lVert A \\rVert \\lVert B \\rVert$"
  ]} />
  <p>¡Sí!, obtuvimos la desigualdad de Cauchy-Schwarz, y como sabes, eso es un hecho. No necesitamos demostrarlo de nuevo. Mantengámoslo en mente porque vamos a analizar nuestro segundo gráfico. ¿Qué sucedería si nuestros vectores fueran ortogonales? Bueno, retomemos esto:</p>
  <FormulaTable data={[
    "$\\lVert A + B \\rVert^2 = \\lVert A \\rVert^2 + 2 A \\cdot B + \\lVert B \\rVert^2$"
  ]} />
  <p>Si <Latex>{"$A \\cdot B = 0$"}</Latex>, nuestra ecuación sería</p>
  <FormulaTable data={[
    "$\\lVert A + B \\rVert^2 = \\lVert A \\rVert^2 + \\lVert B \\rVert^2$"
  ]} />
  <p>Esto es bastante similar al <b>Teorema de Pitágoras</b>. De hecho, es lo mismo, pero en <Latex>{"$V_n$"}</Latex>. Lo más importante es que para el Teorema de Pitágoras, los vectores forman un ángulo de 90°. En otras palabras, <b>son ortogonales</b>. Entonces, si comparamos nuestras ecuaciones anteriores, la diferencia es que <Latex>{"$A \\cdot B = 0$"}</Latex>, lo que significa que cuando los vectores son ortogonales, su producto interno es <Latex>{"$0$"}</Latex>.</p>
  <p><b>Definición</b>: Dados <Latex>{"$A, B$ en $V_{n}$"}</Latex>. Son ortogonales si <Latex>{"$A \\cdot B = 0$"}</Latex></p>
  <hr />
  <p>Ahora, imaginemos este escenario. Esto es una parada de autobús, y como puedes ver, hay un techo para proteger a los peatones de la luz solar. Esto <b>genera una sombra en el suelo</b>. Esto es exactamente lo mismo que nuestro segundo gráfico, solo que debemos tener en cuenta que el vector <Latex>{"$A$"}</Latex> genera una "sombra" en <Latex>{"$B$"}</Latex>. Es importante tener en cuenta que este enfoque visual puede ser engañoso porque la posición del sol puede afectar la posición de la sombra. En este escenario ideal, el sol genera una <b>sombra que forma un ángulo de 90° con el suelo</b>.</p><br />
  <p style={{ textAlign: "center" }}>
    <img src={projection} alt="" style={{ width: "100%", maxWidth: "700px", height: "auto" }} />
  </p>
  <p>Si observamos nuestro segundo gráfico, podemos ver los vectores <Latex>{"$A, B$"}</Latex>, pero hay otro vector <Latex>{"$C$"}</Latex>, que es ortogonal a <Latex>{"$B$"}</Latex>. Pero, echemos un vistazo. En nuestro gráfico, <Latex>{"$B + C$ ≠ $A$"}</Latex> debido a la Ley del Paralelogramo. Entonces, si pensamos, tenemos que escalar <Latex>{"$B$"}</Latex> para sumar <Latex>{"$B$ y $C$"}</Latex>. Entonces, si multiplicamos <Latex>{"$tB$"}</Latex>, como podemos ver en nuestro gráfico, obtendremos <Latex>{"$A = tB + C$"}</Latex> siguiendo la idea de la "sombra". Ahora, eliminemos <Latex>{"$C$"}</Latex> de esta ecuación.</p>
  <FormulaTable data={[
    "$A = tB + C$ multiplicando por $B$",
    "$A \\cdot B = tB \\cdot B + C \\cdot B$",
    "$C \\cdot B = 0$ ya que son ortogonales",
    "$A \\cdot B = tB \\cdot B$",
    "$t = \\frac{A \\cdot B}{B \\cdot B}  = \\frac{A \\cdot B}{\\ \\lVert B \\rVert^2}$",
  ]} />
  <p>Esto significa que si multiplicas <Latex>{"$tB$"}</Latex>, obtendrás la proyección de <Latex>{"$A$ sobre $B$"}</Latex>.</p>
  <hr />
  <p>Finalmente, como podemos ver, hay un ángulo <Latex>{"$\\theta$"}</Latex> entre <Latex>{"$A$ y $tB$"}</Latex>. Entonces, como de costumbre (lado adyacente sobre hipotenusa): </p>
  <FormulaTable data={[
    "$cos(\\theta) = \\frac {t\\lVert B \\rVert}{\\lVert A \\rVert}$ reemplazando $t$",
    "$cos(\\theta) = \\frac {A \\cdot B}{\\lVert A \\rVert \\lVert B \\rVert}$",
    "$A \\cdot B = \\lVert A \\rVert \\lVert B \\rVert cos(\\theta)$",
  ]} />
  <p>Esta es una forma alternativa de calcular el producto interno de vectores. Pero, aún mejor, puedes calcular el ángulo entre dos vectores:</p>
  <FormulaTable data={[
    "$\\theta = cos^{-1} (\\frac {A \\cdot B}{\\lVert A \\rVert \\lVert B \\rvert} )$",
  ]} />
</div>;


const miniDescription = <div>
  <p>
    En este episodio vamos a encontrar una de las propiedades más importantes de los vectores. Anteriormente, aprendimos cuál es la regla del paralelogramo y la desigualdad de Cauchy-Schwartz. Utilizando eso, vamos a encontrar esta <b>propiedad del producto interno</b>.
  </p>
  <FormulaTable data={[
    "$A \\cdot B = 0 \\ $ si son ortogonales"
  ]} />
  <p>Lo cual es útil para comprender las proyecciones en vectores.</p>
  <FormulaTable data={[
    "$C = \\frac {A \\cdot B}{ \\ \\lVert B \\rVert^2}B $"
  ]} />
  <p>Finalmente, aprenderemos cómo calcular el <b>ángulo entre dos vectores</b>. Todas estas cosas son posibles después de analizar la desigualdad triangular.</p>
  <FormulaTable data={[
    "$A \\cdot B = \\lVert A \\rVert \\lVert B \\rVert cos\\theta $",
    "$\\theta = cos^{-1} (\\frac {A \\cdot B}{\\lVert A \\rVert \\lVert B \\rVert} )$",
  ]} />
</div>;


export { description, miniDescription };
