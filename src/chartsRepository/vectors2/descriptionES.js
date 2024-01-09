import FormulaTable from '@/utils/formulaTable';
var Latex = require('react-latex');

const description = <div>
  <p>Veamos dos operaciones importantes que podemos realizar con vectores y uno de los teoremas más utilizados.</p>
  <p><b>Definición</b>: Dados <Latex>{"$A, B$"}</Latex> en <Latex>{"$V_{n}$"}</Latex>, el <b>producto escalar/punto</b> es</p>
  <Latex>{"$A \\cdot B = \\displaystyle\\sum_1^k a_k b_k$"}</Latex>
  <p><b>Definición</b>: Dado <Latex>{"$A$"}</Latex> en <Latex>{"$V_{n}$"}</Latex>, la <b>norma del vector</b> es</p>

  <FormulaTable enableScroll data={[
    "$\\lVert A \\rVert = \\sqrt{a_1^2 + a_2^2 + ... + a_n^2}$ y",
    "$A \\cdot A = \\displaystyle\\sum_1^k a_k a_k = a_1^2 + a_2^2 + ... + a_k^2$, por lo tanto,",
    "$\\lVert A \\rVert = \\sqrt{A \\cdot A}$"
  ]} />

  <p>Pero, ¿de dónde proviene <Latex>{"$\\lVert A \\rVert = \\sqrt{a_1^2 + a_2^2 + ... + a_n^2}$"}</Latex>? Veamos nuestro gráfico. Si asumimos que nuestro vector existe solo en el plano <Latex>{"$XY$"}</Latex>, podemos encontrar su valor con el teorema de Pitágoras.</p>
  <FormulaTable data={[
    "$A_{xy} = \\sqrt{a_1^2 + a_2^2}$"
  ]} />
  <p>Genial, encontramos nuestro valor en el plano XY. Ahora necesitamos obtenerlo con nuestro vector real. Observa que tiene una componente en el eje <Latex>{"$Z$"}</Latex>. Así que tenemos que aplicar nuevamente el teorema de Pitágoras.</p>
  <FormulaTable data={[
    "$A = \\sqrt{A_{xy}^2 + a_3^2}$",
    "$A = \\sqrt{(\\sqrt{a_1^2 + a_2^2})^2 + a_3^2}$",
    "$A = \\sqrt{a_1^2 + a_2^2 + a_3^2}$, que es el resultado esperado."
  ]} />
  <hr />
  <p>Estos resultados son importantes para introducir la <b>desigualdad de Cauchy-Schwarz</b>. Imagina estos dos vectores:</p>
  <FormulaTable data={[
    "$A = (a_{1}, a_{2}, a_{n})$ y $B = (b_{1}, b_{2}, b_{n})$"
  ]} />
  <p>Pensemos un poco. ¿Cómo puedo asegurarme de que ambos vectores están en la <b>misma dirección</b>? Aquí podemos usar una de las propiedades de los vectores. Si los multiplicamos por una constante <Latex>{"$X$"}</Latex>, obtendremos un vector diferente en la misma dirección, como podemos ver en nuestro gráfico. Imaginemos el siguiente ejemplo:</p>
  <Latex>{"$A = (8,8,10)$"}</Latex>, si lo multiplicamos por <Latex>{"$1.5$"}</Latex>, obtendremos <Latex>{"$B = 1.5(A) = (12,12,15)$"}</Latex><br />
  <p>
    Significa que <Latex>{"$X$"}</Latex> es la diferencia entre ambos valores <Latex>{"$a_{n} X + b_{n} = 0$"}</Latex>, si resolvemos esa ecuación, obtendremos <Latex>{"$X = -1.5$"}</Latex> para cada componente en nuestros vectores. <br />
    <Latex>{"$\\displaystyle\\sum_1^k (a_kX + b_k) = 0$"}</Latex> será verdadero en este caso porque <Latex>{"$B = 1.5(A)$"}</Latex> y para cada <Latex>{"$k$"}</Latex> obtendremos <Latex>{"$0$"}</Latex>.
  </p>
  <p>Ahora queremos agregar un signo mayor que, y también relacionaremos <Latex>{"$A, B$"}</Latex> de la siguiente manera:</p>
  <Latex>{"$\\displaystyle\\sum_1^k (a_kX + b_k)^2 \\geq 0^2$"}</Latex> y si distribuimos nuestro signo de suma, obtendremos<br />
  <Latex>{"$\\displaystyle\\sum_1^k (a_k^2X^2 + 2a_kb_k + b_k^2X^2) \\geq 0$"}</Latex><br />
  <p>Reescribamos esto como <Latex>{"$AX^2+2BX+C \\geq 0$"}</Latex>, donde</p>
  <p>
    <Latex>{"$ A = \\displaystyle\\sum_1^k a_k^2$"}</Latex>&nbsp;&nbsp;&nbsp;
    <Latex>{"$ B = \\displaystyle\\sum_1^k a_kb_k$"}</Latex>&nbsp;&nbsp;&nbsp;
    <Latex>{"$ C = \\displaystyle\\sum_1^k b_k^2$"}</Latex>
  </p>
  <p>Nuestro objetivo es demostrar que <Latex>{"$ B^2 \\leq AC$"}</Latex>, por lo que</p>
  <Latex>{"$AX^2 + 2BX + C = A(X + \\frac BA ) + \\frac {AC-B^2}{A}$"}</Latex> que se minimiza con <Latex>{"$ X = \\frac {-B}{A}$"}</Latex>, lo que respalda la idea de que no es negativo según la desigualdad, por lo que <br /><br />
  <Latex>{"$A(\\frac {-B}{A})^2 + 2B(\\frac {-B}{A}) + C \\geq 0 $"}</Latex> resolviendo aquí<br /><br />
  <Latex>{"$B^2 \\leq AC $"}</Latex>, como queríamos demostrar. Y si reemplazamos nuestros valores <Latex>{"$A, B, C $"}</Latex>, obtendremos la <b>desigualdad de Cauchy-Schwarz</b>.<br /><br />
  <Latex>{"$\\lvert A \\cdot B \\lvert \\leq \\lVert A \\rVert \\lVert B \\rVert$"}</Latex>

</div>

const miniDescription = <div>
  <p>Veamos dos operaciones importantes que podemos realizar con vectores y uno de los teoremas más utilizados.</p>
  <p><b>Definición</b>: Dados <Latex>{"$A, B$"}</Latex> en <Latex>{"$V_{n}$"}</Latex>, el <b>producto escalar/punto</b> es</p>
  <Latex>{"$A \\cdot B = \\displaystyle\\sum_1^k a_k b_k$"}</Latex>
  <p><b>Definición</b>: Dado <Latex>{"$A$"}</Latex> en <Latex>{"$V_{n}$"}</Latex>, la <b>norma del vector</b> es</p>
  <FormulaTable data={[
    "$\\lVert A \\rVert = \\sqrt{a_1^2 + a_2^2 + ... + a_n^2}$ y",
    "$A \\cdot A = \\displaystyle\\sum_1^k a_k a_k = a_1^2 + a_2^2 + ... + a_k^2$, por lo tanto,",
    "$\\lVert A \\rVert = \\sqrt{A \\cdot A}$"
  ]} />
  <p><b>Teorema</b>: Desigualdad de Cauchy-Schwarz</p>
  <Latex>{"$\\lvert A \\cdot B \\lvert \\leq \\lVert A \\rVert \\lVert B \\rVert$"}</Latex>

</div>

export { description, miniDescription };
