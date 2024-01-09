import FormulaTable from 'utils/formulaTable';
var Latex = require('react-latex');

const description = <div>
  <p>Primero, introduzcamos el concepto de Combinación Lineal. Dados algunos vectores, multiplicamos cada uno por una constante y luego sumamos todos los resultados juntos. Por ejemplo:</p>
  <FormulaTable data={[
    "$V_1 = (1,-1,2,4)$",
    "$V_2 = (0,0,1,1)$",
    "$V_3 = (1,0,0,1)$",
    "calcular",
    "$3V_1 - 2V_2 + 4V_3$",
  ]}
  />
  <p>Donde <Latex>{"$3, -2$ y $4$"}</Latex> son las constantes que elegimos, y el resultado de nuestro ejemplo de Combinación Lineal es <Latex>{"$(7,-3,4,14)$"}</Latex>. Genial, pero ¿por qué es importante esto? Es simple pero útil para introducir el concepto de Envolvente Lineal. En el ejemplo anterior mencionamos tres vectores, pero ahora, imaginemos que tenemos un conjunto de vectores <Latex>{"$S = \\{ V_1, V_2, ...,  V_k \\} $"}</Latex>.</p>
  <FormulaTable data={[
    "$X = \\displaystyle\\sum_1^k c_iV_i$ es la Combinación Lineal"
  ]}
  />
  <p>Donde <Latex>{"$c_i$"}</Latex> son constantes y <Latex>{"$V_i$"}</Latex> son los vectores en <Latex>{"$S$"}</Latex>. Después de hacer eso, vemos que <Latex>{"$X$"}</Latex> es un vector que surge de ese cálculo. Significa que <b><Latex>{"$S$"}</Latex> genera a <Latex>{"$X$"}</Latex></b>.</p>
  <p><b>Definición</b>: El conjunto de todos los vectores generados por <Latex>{"$S$"}</Latex> se llama Envolvente Lineal de <Latex>{"$S$"}</Latex>, denotado por <Latex>{"$L(S)$"}</Latex>. O en otras palabras, el conjunto de todas las combinaciones lineales de vectores en <Latex>{"$S$"}</Latex>.</p>
  <p>Echemos un vistazo al siguiente ejemplo. Imagina <Latex>{"$S = \\{ V_1, V_2, ..., V_k \\}$"}</Latex>. Pensaremos en cómo generar el vector <Latex>{"$O$ (vector cero)"}</Latex>. Tenemos dos posibles formas, y depende de los vectores dentro de <Latex>{"$S$"}</Latex>. Analicemos la primera opción. Si calculamos la combinación lineal donde <b>todos los valores constantes son cero</b>, obtendremos el vector cero. Esto se llama la <b>solución trivial</b>, que será importante más adelante. Es:</p>
  <FormulaTable data={[
    "$O = \\displaystyle\\sum_1^k 0V_i = (0V_1, 0V_2, ..., 0V_n)$"
  ]}
  />
  <p>La segunda posibilidad para generar el vector cero es tener vectores que son <b>el producto escalar</b> de otros. Veámoslo con un ejemplo, imagina que tenemos los siguientes tres vectores, que están en algún conjunto <Latex>{"$S$"}</Latex>.</p>
  <FormulaTable data={[
    "$V_1 = (2,3,1)$",
    "$V_2 = (1,2,1)$",
    "$V_3 = (3,6,3)$",
  ]}
  />
  <p>Si realizamos <Latex>{"$c_1V_1 + c_2V_2$"}</Latex>, la única forma de generar el vector cero es establecer <Latex>{"$c_1 = 0, c_2 = 0$"}</Latex>. Pero, si involucramos <Latex>{"$V_3$"}</Latex> en nuestro experimento, podríamos tener:</p>
  <FormulaTable data={[
    "$0V_1 - 3V_2 + 1V_3 = O$",
  ]}
  />
  <p>Con las constantes <Latex>{"$c_1 = 0, c_2 = -3, c_3 = 1$"}</Latex> generamos el vector cero. Esto sucedió porque en nuestro conjunto <Latex>{"$V_3$"}</Latex> es el producto escalar de <Latex>{"$V_2$"}</Latex>. Entonces, estos vectores son <b>linealmente dependientes</b>. Si podemos encontrar el vector cero de varias maneras, significa que en nuestro conjunto hay vectores que son el producto escalar de otros. Entonces, finalmente:</p>
  <p><b>Definición</b>: Un conjunto <Latex>{"$S$"}</Latex> que genera el vector cero con la solución trivial se llama conjunto de vectores <b>linealmente independientes</b>.</p>
</div>;


const miniDescription = <div>
  <p>Aquí podemos ver tres vectores en nuestro gráfico. Estos son los <b>Vectores Unitarios de Coordenadas</b>. Son simplemente vectores que están en la misma dirección que los ejes, y tienen longitud <Latex>{"$1$"}</Latex>. Esto es importante para aclarar algunos detalles.</p>
  <p>Los siguientes tres vectores también se llaman <Latex>{"$ \\hat{i}, \\hat{j}, \\hat{k}$"}</Latex> y con una Combinación Lineal obtendrás un vector expresado en sus componentes. Parece ser simple, e incluso más con la siguiente idea: con estos tres vectores, podrás <u>generar todos los vectores en <Latex>{"$R^3$"}</Latex></u>. Pero, gracias a esto aparecerán conceptos importantes como la <b>Envolvente lineal</b> e <b>Independencia Lineal</b>.</p>

</div>

export { description, miniDescription };
