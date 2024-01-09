import ListConsiderations from 'utils/listConsiderations';
import FormulaTable from 'utils/formulaTable';
import { generate2dVectors } from 'utils/generateVector';
import { layout_subchart, config_subchart } from 'utils/chartProps';
import ModalChart from 'components/detailedChart/modalChart';
import Plot from 'react-plotly.js';

var Latex = require('react-latex');

const layout_props = {
  ...layout_subchart, showlegend: false,
  title: {
    text: "Normal vector",
    ...layout_subchart.title
  },
}

const data_subchart = [
  generate2dVectors([0, 1, 2], [0, 1, 2], "1", false, ['', 'N', '']),
  generate2dVectors([0, 2], [0, 0.5], "1", false, ['', 'Q']),
  generate2dVectors([0, 1.75], [0, 1], "1", false, ['', 'P']),
  generate2dVectors([0, -0.125, -0.25], [0, 0.25, 0.5], "1", false, ['', 'A', '']),
  generate2dVectors([2.25, 1.875, 1.25], [0, 0.75, 2], "1", false, ['', 'L', '']),
]

const description = <div>
  <p>
    <b>Definición</b>: Dados <Latex>{"$P$ y $A$ en $R_n$"}</Latex>. El conjunto de todos los puntos en <Latex>{"$P + tA$, $t \\in \\reals$"}</Latex> es una línea que pasa a través de <Latex>{"$P$"}</Latex> y es paralela a <Latex>{"$A$"}</Latex>. Lo designamos con <Latex>{"$L(P;A)$"}</Latex>.
  </p>
  <FormulaTable data={[
    "$L(P;A) = \\{P + tA | t \\in \\reals \\}$"
  ]}
  />
  <p>Analicemos algunas consideraciones importantes:</p>
  <ListConsiderations data={[
    <>
      Podemos reemplazar el vector dirección con algún vector <Latex>{"$B$"}</Latex>, donde <Latex>{"$B = cA$"}</Latex>. Porque mantiene la misma dirección de <Latex>{"$A$"}</Latex> debido a que son paralelos.
    </>,
    <>
      Dos líneas <Latex>{"$L(P;A)$"}</Latex> y <Latex>{"$L(P;B)$"}</Latex> que pasan por el mismo punto <Latex>{"$P$"}</Latex> son iguales si los vectores dirección <Latex>{"$A, B$"}</Latex> son paralelos. Si no fueran paralelos, obtendríamos dos líneas diferentes que pasan por el mismo punto pero con <b>pendientes diferentes</b>.
    </>,
    <>
      Dos líneas <Latex>{"$L(P;A)$"}</Latex> y <Latex>{"$L(Q;A)$"}</Latex> con el mismo vector dirección <Latex>{"$A$"}</Latex> son iguales si <Latex>{"$Q \\in L(P;A)$"}</Latex>. Significa que <Latex>{"$Q$"}</Latex> mantendría la misma posición. Podemos comprobar si <Latex>{"$Q \\in L(P;A)$"}</Latex> verificando <Latex>{"$Q - P = cA$"}</Latex>, donde <Latex>{"$c$"}</Latex> es alguna constante que significa que <Latex>{"$Q - P$"}</Latex> es paralelo a <Latex>{"$A$"}</Latex>.
    </>,
    <>
      Dos puntos diferentes generan una línea. La línea definida por <Latex>{"$\\{P + t(Q - P) \\}$"}</Latex> contendrá tanto a <Latex>{"$P, Q$"}</Latex>.
    </>
  ]} />
  <p>Es genial saber que estos razonamientos están respaldados por el hecho de que <Latex>{"$A, B$"}</Latex> son <b>linealmente dependientes</b> si <Latex>{"$B = cA$"}</Latex>. Ahora veamos un ejemplo en <Latex>{"$\\reals^2$"}</Latex>. Obtendremos las ecuaciones habituales que aprendimos en la escuela, pero también veremos algunas consideraciones importantes. Dados <Latex>{"$P, A$ en $\\reals^3$"}</Latex> y una línea definida por <Latex>{"$L(P;A) = \\{P + tA \\}$"}</Latex>:</p>
  <FormulaTable enableScroll data={[
    "$P = (p, q, r) \\ $ $ \\ A = (a, b, c)$",
    "$L(P;A) = (p, q, r) + t(a, b, c)$",
    "$(x, y, z) = (p, q, r) + t(a, b, c)$",
    "$(x, y, z) = (p + ta, q + tb, r + tc)$, entonces",
    "$x = p + ta$, $y = q + tb$, $z = r + tc$",
  ]}
  />
  <p>Si usamos estas ecuaciones <Latex>{"$x = p + ta$; $\\ y = q + tb$"}</Latex> en <Latex>{"$\\reals^2$"}</Latex>, podemos resolver para <Latex>{"$t$"}</Latex> en ambas:</p>
  <FormulaTable data={[
    "$\\frac{(x-p)}{a} = \\frac{(y-q)}{b}$",
    "$b(x-p) = a(y-q)$",
    "$(y-q) = \\frac{b}{a}(x-p)$",
  ]}
  />
  <p>Luego, recuerda que <Latex>{"$a, b$"}</Latex> son componentes de <Latex>{"$A$"}</Latex>, pero ¿qué sucedería si no conociéramos <Latex>{"$A$"}</Latex>? Podemos generar nuestra línea con dos puntos <Latex>{"$P, Q$"}</Latex>, como vimos anteriormente. Así que, <Latex>{"$\\frac{b}{a}$"}</Latex> cambiará y si tenemos <Latex>{"$a = x_2 - x_1$"}</Latex> y <Latex>{"$b = y_2 - y_1$"}</Latex>, asumiendo que <Latex>{"$x_2, y_2$"}</Latex> pertenecen a <Latex>{"$Q$"}</Latex>, obtendremos:</p>
  <FormulaTable data={[
    "$(y-q) = \\frac{(y_2 - y_1)}{(x_2 - x_1)}(x-p)$",
    "$m = \\frac{(y_2 - y_1)}{(x_2 - x_1)}$",
  ]}
  />
  <p>Lo cual es la ecuación que todos conocemos. Pero, tiene algo especial <Latex>{"$x_2 - x_1 $ ≠ $ 0$"}</Latex>. Sin embargo, si lo analizamos como vectores, no tenemos que enfrentar esa restricción, lo cual es interesante porque aparece cuando usamos la representación cartesiana.</p>
  <hr />
  <p>Finalmente, introduzcamos otro concepto importante. Aprendimos que dos vectores que son ortogonales tienen su producto interno <Latex>{"$= 0$"}</Latex>. Dado algún vector <Latex>{"$A = (a, b)$"}</Latex>, podemos crear un vector <Latex>{"$N = (b, -a)$"}</Latex>, lo que puede hacer</p>
  <FormulaTable data={[
    "$A \\cdot N = (a, b) \\cdot (b, -a)$",
    "$= ab + (-ab) = 0$",
  ]}
  />
  <p><b>Esto es válido para este contexto</b>, pero lo importante aquí es saber que <Latex>{"$N$"}</Latex> es el <b>vector normal</b> y es ortogonal a <Latex>{"$A$"}</Latex>. Ahora, retomemos nuestra ecuación cartesiana anterior <Latex>{"$b(x-p) - a(y-q) = 0$"}</Latex>. Obtenemos la conclusión de que esa ecuación representa una línea. Bueno, veamos el siguiente enfoque:</p>
  <FormulaTable data={[
    "$(X - P) \\cdot N = 0$",
  ]}
  />
  <p>Esto es <b>elegante</b>. Como pudimos ver, <Latex>{"$X - P$"}</Latex> define el vector dirección. El nuevo elemento es que <Latex>{"$N$"}</Latex> es ortogonal a ese vector dirección. Si lo analizamos, todos los valores que satisfacen la ecuación son los que pertenecen a la línea porque deben ser ortogonales a <Latex>{"$X - P$"}</Latex>. Pero si eso no es suficiente, podemos resolver esto de la siguiente manera:</p>
  <FormulaTable enableScroll data={[
    "$(X - P) \\cdot N = 0$",
    "$((x, y) - (p, q)) \\cdot (b, -a) = 0$",
    "$(x - p, y - q) \\cdot (b, -a) = 0$",
    "$b(x - p) - a(y - q) = 0$",
  ]}
  />
  <p>¿Hermoso, verdad? ¡Sí! obtuvimos la ecuación cartesiana. Este es un buen esquema de nuestro ejemplo.</p>
  <ModalChart chart={
    <Plot
      data={data_subchart}
      layout={layout_props}
      config={config_subchart}
      style={{ width: '100%', height: '80%', marginTop: "0px" }}
    />
  } />
  <br />
  <p>Finalmente, el vector con la longitud mínima hasta la recta es el vector que es la proyección de <Latex>{"$P$ sobre $N$"}</Latex>. Esto es genial porque podríamos usar todas las cosas que aprendimos anteriormente. Genera una ecuación útil llamada distancia desde el origen hasta la línea</p>
  <FormulaTable enableScroll data={[
    "$Proy_AB = \\frac {A \\cdot B}{ B \\cdot B}B $",
    "$\\lVert Proy_AB \\rVert = \\lVert \\frac {A \\cdot B}{ B \\cdot B}B \\rVert$",
    "$d = \\lvert \\frac {A \\cdot B}{ B \\cdot B} \\rvert \\lVert B \\rVert$",
    "$d = \\frac {\\lvert A \\cdot B \\rvert}{ B \\cdot B}  \\lVert B \\rVert$",
    "$d = \\frac {\\lvert A \\cdot B \\rvert}{\\lVert B \\rVert^2}  \\lVert B \\rVert$",
    "$d = \\frac {\\lvert A \\cdot B \\rvert}{\\lVert B \\rVert}$",
  ]}
  />
</div>;

const miniDescription = <div>
  <p>Las líneas son una interesante combinación de propiedades de vectores. Una línea está definida por un punto <Latex>{"$P$"}</Latex> y un vector <Latex>{"$A$"}</Latex>, ambos en <Latex>{"$R_n$"}</Latex>. Donde <Latex>{"$A$"}</Latex> se denomina <b>vector dirección</b> y <Latex>{"$P$"}</Latex> es el punto inicial de la línea. Con estos elementos, puedes generar una línea con <Latex>{"$L(P;A) = \\{P + tA | t \\in \\reals \\}$"}</Latex>. En otras palabras, si sumas <Latex>{"$P$"}</Latex> con la <b>envolvente lineal</b> de <Latex>{"$A$"}</Latex>, puedes generar una línea.</p>
  <p>Nuestra gráfica es bastante explícita con el hecho de que <b>una línea es un conjunto infinito de puntos</b> en <Latex>{"$R_n$"}</Latex>, que siguen la misma dirección. Esto significa que si cambias la dirección de <Latex>{"$A$"}</Latex>, la línea cambiará su <b>pendiente</b>. Y si cambias <Latex>{"$P$"}</Latex>, la línea cambiará su <b>posición</b>.</p>
</div>;


export { description, miniDescription };
