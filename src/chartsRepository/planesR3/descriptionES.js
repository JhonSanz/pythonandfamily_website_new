import FormulaTable from '@/utils/formulaTable';
import ListConsiderations from '@/utils/listConsiderations';
import Latex from 'react-latex-next'

const description = <div>
  <p>
    <b>Definición</b>: Dados <Latex>{"$P$ y $A, B$ en $R_n$"}</Latex>. El conjunto de todos los puntos en <Latex>{"$P + sA + tB$, $s, t \\in \\reals$"}</Latex> es un plano que atraviesa <Latex>{"$P$"}</Latex> y es paralelo a <Latex>{"$sA + tB$"}</Latex>.
  </p>
  <ListConsiderations data={[
    <>
      Dos planos <Latex>{"$M_1 = \\{P + sA + tB \\}$"}</Latex> y <Latex>{"$M_2 = \\{P + sC + tD \\}$"}</Latex> que atraviesan el mismo punto <Latex>{"$P$"}</Latex> son iguales si la envolvente lineal de <Latex>{"$A$ y $B$"}</Latex> coincide con la envolvente lineal de <Latex>{"$C$ y $D$"}</Latex>. Se puede entender como la "inclinación" del plano definido por la combinación lineal de esos vectores directores.
    </>,
    <>
      Dos planos <Latex>{"$M_1 = \\{P + sA + tB \\}$"}</Latex> y <Latex>{"$M_2 = \\{Q + sA + tB \\}$"}</Latex> generados por los mismos vectores <Latex>{"$A$ y $B$"}</Latex> son iguales si <Latex>{"$Q$"}</Latex> está en <Latex>{"$M_1$"}</Latex>. Tiene sentido debido al hecho de que si <Latex>{"$Q$"}</Latex> no está en <Latex>{"$M_1$"}</Latex>, ambos planos serían paralelos pero no iguales.
    </>,
    <>
      Tres puntos diferentes generan dos líneas. Dos líneas generan un plano <Latex>{"$M = \\{P + s(Q - P) + t(R - P) \\}$"}</Latex>. De manera similar a como lo hicimos con las líneas, primero generamos las líneas que pueden definir la inclinación del plano, y luego generamos el plano. <Latex>{"$C$ y $D$"}</Latex> deben ser linealmente independientes, por lo que los puntos <Latex>{"$P$, $Q$ y $R$"}</Latex> no deben estar en la misma línea.
    </>
  ]} />
  <p>De nuevo, podemos extender este concepto a una versión cartesiana. Hagamos el mismo proceso que hicimos con las líneas.</p>
  <FormulaTable enableScroll data={[
    "$M = \\{P + sA + tB \\}$",
    "$P = (p_1, p_2, p_3) $, $A = (a_1, a_2, a_3) $, $B = (b_1, b_2, b_3)$",
    "$x = p_1 + sa_1 + tb_1$",
    "$y = p_2 + sa_2 + tb_2$",
    "$z = p_3 + sa_3 + tb_3$",
  ]} />
  <p>Los parámetros <Latex>{"$s$ y $t$"}</Latex> siempre se pueden eliminar de estas ecuaciones, obteniendo una ecuación cartesiana con la forma <Latex>{"$ax +by + cz = d$"}</Latex>. Veámoslo con un ejemplo:</p>
  <FormulaTable enableScroll data={[
    "$P = (1, 2, 3) $, $A = (1, 2, 1) $, $B = (1, 4, -1)$",
    "$M = (1,2,3) + s(1,2,1) + t(1,4,-1)$",
    "$   $",
    "1. $x = 1 + s + t$ → $x - 1 = s + t$",
    "2. $z = 3 + s - t$ → $z - 3 = s - t$",
    "3. $y = 2 + 2s - 4t$",
    "$  $",
    "1. $+$ 2. $: x + z - 4 = 2s$",
    "1. $-$ 2. $: x - z + 2 = 2t$",
    "Reemplazar en 3.",
    "$ $",
    "$y = 2 + (x + z -4) - (2x - 2z + 4)$",
    "$y = -x +3z - 6$",
    "$x + y -3z = -6$ ¡genial! :)",
  ]} />
  <hr />
  <p>Siguiendo las ideas desarrolladas en la sección de líneas, podemos imaginar una implementación similar para generar un plano con un <b>vector normal</b>. El problema aquí es que necesitaremos dos vectores, como hemos visto, y la dificultad radica en que necesitamos un vector normal que sea <b>ortogonal a ambos</b>. Para hacerlo, debemos introducir un nuevo concepto llamado <b>producto cruz</b>:</p>
  <p><b>Definición</b>: Dados los vectores <Latex>{"$A = (a_1, a_2, a_3)$ y $B = (b_1, b_2, b_3)$"}</Latex> en <Latex>{"$\\reals^3$"}</Latex></p>
  <FormulaTable enableScroll data={[
    "$A \\times B = (a_2b_3 - a_3b_2, a_3b_1 - a_1b_3, a_1b_2 - a_2b_1)$",
  ]} />
  <p><b>¿Qué demonios es esto?</b> No puedo entender cómo estos magos crearon estas ecuaciones. De todos modos, es muy útil porque satisface nuestras necesidades. Veámoslo de nuevo con un ejemplo. Como pudimos ver anteriormente, dos vectores son ortogonales si su producto interno <Latex>{"$= 0$"}</Latex>, entonces:</p>
  <FormulaTable enableScroll data={[
    "$A \\cdot (A \\times B) = (a_1, a_2, a_3) \\cdot (a_2b_3 - a_3b_2, a_3b_1 - a_1b_3, a_1b_2 - a_2b_1) $",
    "$= a_1(a_2b_3 - a_3b_2) + a_2(a_3b_1 - a_1b_3) + a_3(a_1b_2 - a_2b_1)$",
    "$= a_1a_2b_3 - a_1a_3b_2 + a_2a_3b_1 - a_2a_1b_3 + a_3a_1b_2 - a_3a_2b_1$",
    "$= 0$ ♥",
  ]} />
  <p>También funciona para <Latex>{"$B \\cdot (A \\times B)$"}</Latex>. Es exactamente lo que estábamos buscando porque <Latex>{"$A \\times B$"}</Latex> es ortogonal tanto a <Latex>{"$A$"}</Latex> como a <Latex>{"$B$"}</Latex>. <Latex>{"$A \\times B$"}</Latex> será nuestro vector normal. Pero antes de seguir, notemos las propiedades del producto cruz:</p>
  <ListConsiderations data={[
    <><Latex>{"$A \\times B = -(B \\times A)$"}</Latex></>,
    <><Latex>{"$A \\times (B + C) = (A \\times B) + (A \\times C)$"}</Latex></>,
    <><Latex>{"$c(A \\times B) = (cA) \\times B$"}</Latex></>,
    <><Latex>{"$A \\cdot (A \\times B) = 0$"}</Latex></>,
    <><Latex>{"$B \\cdot (A \\times B) = 0$"}</Latex></>,
    <><Latex>{"$(A \\times B) \\times C$ ≠ $A \\times (B \\times C)$"}</Latex></>,
    <><Latex>{"$\\rVert A \\times B \\lVert^2 = \\rVert A \\lVert^2 \\rVert B \\lVert^2 - (A \\cdot B)^2 $"}</Latex></>,
  ]} />
  <p>La última se llama <a href="https://pythonandfamilywebsites-storage.s3.us-east-2.amazonaws.com/InkedIMG_20230515_112558-min.jpg" target='__blank'><b>Identidad de Lagrange</b></a> y es importante tener en cuenta otra propiedad <Latex>{"$A \\times B = 0$"}</Latex> si <Latex>{"$A, B$"}</Latex> son <b>linealmente dependientes</b>. Si recordamos la desigualdad de Cauchy-Schwarz, el signo igual es válido si <Latex>{"$B = cA$"}</Latex>, por lo que en ese escenario podemos reemplazar:</p>
  <FormulaTable enableScroll data={[
    "$\\lvert A \\cdot B \\lvert = \\lVert A \\lVert \\lVert B \\lVert$ en",
    "$\\rVert A \\times B \\lVert^2 = \\rVert A \\lVert^2 \\rVert B \\lVert^2 - (A \\cdot B)^2 $",
    "$\\rVert A \\times B \\lVert^2 = \\rVert A \\lVert^2 \\rVert B \\lVert^2 - (\\rVert A \\lVert \\rVert B \\lVert)^2 $",
    "$\\rVert A \\times B \\lVert^2 = 0$ si",
    "$A \\times B = 0$",
  ]} />
  <p>Esto significa que si ambos vectores son múltiplos escalares el uno del otro, <Latex>{"$A \\times B = 0$"}</Latex> nos está diciendo que son linealmente dependientes. Además, si recordamos las proyecciones y los ángulos, encontramos que <Latex>{"$A \\cdot B = \\lVert A \\lVert \\lVert B \\lVert cos\\theta$"}</Latex>, por lo que si reemplazamos aquí:</p>
  <FormulaTable enableScroll data={[
    "$\\rVert A \\times B \\lVert^2 = \\lVert A \\lVert^2 \\lVert B \\lVert^2 - (\\lVert A \\lVert \\lVert B \\lVert cos\\theta)^2$",
    "$\\rVert A \\times B \\lVert^2 = \\lVert A \\lVert^2 \\lVert B \\lVert^2 (1 - cos^2\\theta)$",
    "$\\rVert A \\times B \\lVert^2 = \\lVert A \\lVert^2 \\lVert B \\lVert^2 sen^2\\theta$",
    "$\\rVert A \\times B \\lVert = \\lVert A \\lVert \\lVert B \\lVert sen\\theta$",
  ]} />
  <hr />
  <div>
    <p>
      ¡Excelente! (esto nos está tomando bastante tiempo 😂). Aprendimos sobre el producto cruz, y ahora sabemos que funciona como nuestro vector normal. Veamos cómo podemos definir un plano usando esto. De manera similar a las líneas, <Latex>{"$(X - P) \\cdot N = 0$"}</Latex> definirá un plano en <Latex>{"$\\Reals^3$"}</Latex> porque seguimos la misma idea, si <Latex>{"$X$ y $P$"}</Latex> están en el mismo plano, entonces <Latex>{"$(X - P)$"}</Latex> también lo estará, y generará un vector desde el origen que es ortogonal a <Latex>{"$N$"}</Latex>. En otras palabras, todos los puntos que satisfacen la ecuación estarán en el plano. Entonces, supongamos lo siguiente:
    </p>
    <FormulaTable enableScroll data={[
      "$N=(a,b,c)$, $X=(x,y,z)$, $P=(x_1,y_1,z_1)$",
      "$(X - P) \\cdot N = 0$",
      "$((x,y,z)-(x_1,y_1,z_1)) \\cdot (a,b,c) = 0$",
      "$(x-x_1, y-y_1, z-z_1) \\cdot (a,b,c) = 0$",
      "$a(x-x_1) + b(y-y_1) + c(z-z_1) = 0$",
    ]} />
    <p>Pero, también es cierto que</p>
    <FormulaTable enableScroll data={[
      "$(X - P) \\cdot N = 0$",
      "$X \\cdot N = P \\cdot N$",
      "$ax + by + cz = d1$;  $d1 = ax_1 + by_1 + cz_1$",
    ]} />
    <p>Como pudimos concluir en la sección de Líneas en <Latex>{"$\\Reals^3$"}</Latex>, obtuvimos una ecuación para calcular la distancia desde el origen a un plano <Latex>{"$d = \\frac {\\lvert P \\cdot N \\rvert}{\\lVert N \\rVert}$"}</Latex>. Como pudimos ver, <Latex>{"$d1 = P \\cdot N$"}</Latex>, entonces <Latex>{"$d1 = d \\lVert N \\rVert$"}</Latex>. <Latex>{"$d1 = d$"}</Latex> si <Latex>{"$N = 1$"}</Latex>. El plano cruza a través del origen si <Latex>{"$d1 = 0$"}</Latex></p>
    <p><b>Ejemplo</b>: La ecuación cartesiana <Latex>{"$2x + 6y + 3z = 6$"}</Latex> representa un plano con vector normal <Latex>{"$N = 2i + 6j + 3k$"}</Latex>.</p>
    <p>Analicemos esta afirmación. Como aprendimos anteriormente, <Latex>{"$X \\cdot N = P \\cdot N$"}</Latex>.</p>
    <ul>
      <li>
        La primera parte coincide con <Latex>{"$2x + 6y + 3z$"}</Latex>. Por eso la afirmación dice que el vector normal es <Latex>{"$2i + 6j + 3k$"}</Latex>.
      </li>
      <li>
        Significa que la segunda parte es <Latex>{"$P \\cdot N = 6$"}</Latex>
      </li>
    </ul>
    <p>Con esa información, podemos usar nuestra ecuación para calcular la distancia desde el origen hasta el plano</p>
    <FormulaTable enableScroll data={[
      "$d = \\frac {\\lvert P \\cdot N \\rvert}{\\lVert N \\rVert}$",
      "$d = \\frac{6}{\\lVert 2i + 6j + 3k \\rVert}$",
      "$d = \\frac{6}{7}$",
    ]} />
    <p>Finalmente, podemos obtener las intersecciones del plano con los ejes dividiendo la ecuación por <Latex>{"$P \\cdot N$"}</Latex>. En nuestro ejemplo, esto resultará en <Latex>{"$x/3 + y/1 + z/2 = 1$"}</Latex>, donde <Latex>{"$(3,0,0)$, $(0,1,0)$ ,$(0,0,2)$"}</Latex> son las intersecciones con los ejes.</p>
  </div>
</div>

const miniDescription = <div>
  <p>
    Siguiendo la idea expuesta con las Líneas en <Latex>{"$\\Reals^3$"}</Latex>, los planos son la <b>suma</b> de <Latex>{"$P$"}</Latex> y la <b>envolvente lineal</b> de <Latex>{"$A$ y $B$"}</Latex>, por lo que puedes generar los puntos <Latex>{"$M$ en $\\reals^n$"}</Latex> de un plano con <Latex>{"$M = \\{P + sA + tB | s, t \\in \\reals \\}$"}</Latex>. Es importante recordar la ley del paralelogramo porque si te das cuenta, al asignar valores diferentes a <Latex>{"$s$ y $t$"}</Latex>, puedes recorrer todas las posibles direcciones en el plano generando diferentes sumas de <Latex>{"$A$ y $B$"}</Latex>.
  </p>
  <p>
    La idea anterior nos lleva a algunas consideraciones:
  </p>
  <ul>
    <li>
      <Latex>{"$A$ y $B$"}</Latex> deben ser linealmente independientes para poder generar diferentes direcciones después de aplicar la ley del paralelogramo.
    </li>
    <li>
      Si asignamos valores en los que <Latex>{"$s = t$"}</Latex>, generaremos una línea.
    </li>
    <li>
      Ni <Latex>{"$A$ ni $B$"}</Latex> deben ser vectores nulos.
    </li>
    <li>
      Si <Latex>{"$P$"}</Latex> es el origen, el plano es la envolvente lineal de <Latex>{"$A$ y $B$"}</Latex>.
    </li>
  </ul>
  <p>Como podemos ver en nuestro gráfico, los puntos infinitos generados por nuestra ecuación crean el plano.</p>
</div>


export { description, miniDescription };
