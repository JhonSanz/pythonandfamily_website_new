import FormulaTable from '@/utils/formulaTable';
var Latex = require('react-latex');

const description = <div>
  <p>Los vectores se representan como segmentos orientados o flechas. Sus operaciones se expresan en función de sus componentes <Latex>{"$(a_{1}, a_{2}, ... , a_{n})$"}</Latex>.</p>
  <p>El conjunto de vectores n-dimensionales se llama <b>espacio vectorial</b>, designado con <Latex>{"$V_{n}$"}</Latex>.</p>
  <p><b>Definición</b>: Dados <Latex>{"$A, B$"}</Latex> en <Latex>{"$V_{n}$"}</Latex></p>
  <FormulaTable enableScroll data={[
    "$A = B$ si $a_{1} = b_{1}, a_{2} = b_{2}, a_{n} = b_{n}$",
    "$A + B = (a_{1} + b_{1}, a_{2} + b_{2}, a_{n} + b_{n})$",
    "$cA = (ca_{1}, ca_{2}, ... , ca_{n})$ con c como valor escalar.",
  ]} />
  <p>
    Aquí hay una representación de la ley del paralelogramo. Tenemos dos vectores <Latex>{"$A, B$"}</Latex>. Observa que su punto inicial no es el origen de coordenadas <Latex>{"$(0,0,0)$"}</Latex>. En su lugar, tenemos: <br />
  </p>
  <p>
    <FormulaTable data={[
      "$A = (4,4,8)$ $B = (7,7,5)$ $Q = (3,3,3)$"
    ]} />
    Donde <Latex>{"$Q$"}</Latex> es el punto inicial para ambos <Latex>{"$A, B$"}</Latex>.
  </p>
  <p>Si restamos el punto final y el punto inicial, <b>obtendremos el vector trazado desde el origen</b>. Vamos a hacerlo porque queremos verificar <Latex>{'$\\overrightarrow{QA} = \\overrightarrow{BE}$'}</Latex> y <Latex>{'$\\overrightarrow{QB} = \\overrightarrow{AE}$'}</Latex>. Pero, ¿cuál es el valor de <Latex>{"$E$"}</Latex>? Primero, calculemos la diferencia entre:
  </p>
  <FormulaTable enableScroll data={[
    "$\\overrightarrow{QA} = A - Q = (4,4,8) - (3,3,3)$",
    '$\\overrightarrow{QA} = (1,1,5)$',
    '$\\overrightarrow{QB} = B - Q = (7,7,5) - (3,3,3)$',
    '$\\overrightarrow{QB} = (4,4,2)$'
  ]} />

  <p>
    Ahora, <Latex>{"$E = B + \\overrightarrow{QA} = A + \\overrightarrow{QB}$"}</Latex>, como podemos ver en nuestro gráfico. Es importante notar que <Latex>{"$\\overrightarrow{AE}$"}</Latex> y <Latex>{"$\\overrightarrow{QB}$"}</Latex> son paralelos, y si consideramos ambos para realizar este análisis, obtendremos el mismo resultado.
  </p>
</div>;

const miniDescription = <div>
  <p>Los vectores se representan como segmentos orientados o flechas. Sus operaciones se expresan en función de sus componentes <Latex>{"$(a_{1}, a_{2}, ... , a_{n})$"}</Latex>.</p>
  <p>El conjunto de vectores n-dimensionales se llama <b>espacio vectorial</b>, designado con <Latex>{"$V_{n}$"}</Latex></p>
  <p><b>Definición</b>: Dados <Latex>{"$A, B$"}</Latex> en <Latex>{"$V_{n}$"}</Latex></p>
  <FormulaTable data={[
    "$A = B$ si $a_{1} = b_{1}, a_{2} = b_{2}, a_{n} = b_{n}$",
    "$A + B = (a_{1} + b_{1}, a_{2} + b_{2}, a_{n} + b_{n})$",
    "$cA = (ca_{1}, ca_{2}, ... , ca_{n})$ con c como valor escalar.",
  ]} />
  <br />
</div>;


export { description, miniDescription };
