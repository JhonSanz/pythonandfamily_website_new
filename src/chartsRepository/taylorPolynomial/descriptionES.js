import FormulaTable from '@/utils/formulaTable';
import Latex from 'react-latex-next'

const description = <div>
  <p>
    Retomemos nuestro ejemplo de <Latex>{"$f(x) = e^{x}$"}</Latex>. Sabemos que <Latex>{"$f$"}</Latex> y todos sus términos derivados son <Latex>{"$1$"}</Latex> con <Latex>{"$x = 0$"}</Latex>. Esa es la clave porque si encontramos otra función cuyas derivadas siempre sean las mismas y sus condiciones iniciales también sean las mismas, podemos decir que ambas son las mismas funciones. Veamos el siguiente análisis. <br />
  </p>
  <p>
    Comparemos <Latex>{"$f(x) = e^{x}$"}</Latex> con <Latex>{"$p(x) = \\displaystyle\\sum_0^k  \\frac{x^k}{k!}$"}</Latex>, vamos a derivar estas funciones y evaluarlas en <Latex>{"$x = 0$"}</Latex>. <br />
  </p>
  <div style={{ overflowX: "scroll", backgroundColor: "#f1f1f1", paddingTop: "15px" }}>
    <table>
      <tbody>
        <tr>
          <td><Latex>{"$f^{(0)}(x) = e^{x} \\ $"}</Latex></td>
          <td><Latex>{"$p^{(0)}(x) =  1 + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$"}</Latex></td>
        </tr>
        <tr>
          <td><Latex>{"$f^{(1)}(x) = e^{x} \\ $"}</Latex></td>
          <td><Latex>{"$p^{(1)}(x) = 0 +  1 + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$"}</Latex></td>
        </tr>
        <tr>
          <td><Latex>{"$f^{(2)}(x) = e^{x} \\ $"}</Latex></td>
          <td><Latex>{"$p^{(2)}(x) = 0 + 0 +  1 + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$"}</Latex></td>
        </tr>
        <tr>
          <td><Latex>{"$f^{(3)}(x) = e^{x} \\ $"}</Latex></td>
          <td><Latex>{"$p^{(3)}(x) = 0 + 0 + 0 +  1 + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$"}</Latex></td>
        </tr>
      </tbody>
    </table>
  </div>
  <p>
    Esto es genial. Como puedes ver, todas las derivadas nos dan la misma función tanto para <Latex>{"$f(x)$"}</Latex> como para <Latex>{"$p(x)$"}</Latex>, es decir: <br /><br />
  </p>
  <FormulaTable data={[
    "$f^{(k)}(x) = f(x) \\ \\forall \\ k = 1, 2, 3 ... $",
    "$p^{(k)}(x) = p(x) \\ \\forall \\ k = 1, 2, 3 ... $",
  ]} />
  <p>
    Ahora evaluemos <Latex>{"$x = 0$"}</Latex><br /><br />
  </p>
  <FormulaTable data={[
    "$f^{(k)}(0) = 1 \\ \\forall \\ k = 1, 2, 3 ... $",
    "$p^{(k)}(0) = 1 \\ \\forall \\ k = 1, 2, 3 ... $",
    "$p^{(k)}(0) = f^{(k)}(0) \\ \\forall \\ k = 1, 2, 3 ... \\ $ entonces:",
  ]} />
  <p>
    Esas funciones son <b>esencialmente iguales</b>. Ahora en general, <b>estamos tratando de encontrar</b> un polinomio <Latex>{"$p$"}</Latex> que coincida con <Latex>{"$f$"}</Latex> y sus primeras <Latex>{"$n$"}</Latex> derivadas en <Latex>{"$x = 0$"}</Latex> (como hicimos anteriormente con <Latex>{"$f(x) = e^{x}$"}</Latex>), entonces:<br /><br />
  </p>
  <FormulaTable data={[
    "$f^{(0)}(0) = p^{(0)}(0)$",
    "$f^{(1)}(0) = p^{(1)}(0)$",
    "$f^{(n)}(0) = p^{(n)}(0) \\ \\forall \\ n = 1, 2, 3 ... $",
  ]} />
  <p>El polinomio es... sí, es este:</p>
  <FormulaTable data={[
    "$p(x) = c_0 + c_1x + c_2x^2 + ... + c_nx^n$"
  ]} />
  <p>Hagamos el mismo proceso</p>
  <FormulaTable data={[
    "$p^{(1)}(x) = 0 + c_1 + 2c_2x + 3c_3x^2 + ...$",
    "$p^{(2)}(x) = 0 + 0 + 2c_2 + 6c_3x + ...$",
    "$p^{(3)}(x) = 0 + 0 + 0 + 6c_3 + ...$",
  ]} />
  <p>Y si los evaluamos en <Latex>{"$x = 0$"}</Latex> obtendremos</p>
  <FormulaTable data={[
    "$p^{(1)}(0) = c_1$",
    "$p^{(2)}(0) = 2c_2$",
    "$p^{(3)}(0) = 6c_3$, y en general",
    "$p^{(k)}(0) = k!c_k$, sabemos que $p^{(k)}(0) = f^{(k)}(0)$",
    "$c_k = \\frac {f^{(k)}(0)}{k!}$",
  ]} />
  <p>¡Genial!, encontramos algo importante. Gracias a este razonamiento, pudimos encontrar cómo generar nuestro polinomio con las constantes que satisfacen las <Latex>{"$n + 1$"}</Latex> condiciones iniciales. Así que sigamos y escribamos el Polinomio de Taylor</p>
  <FormulaTable data={[
    "$P(x) = \\displaystyle\\sum_0^k \\frac {f^{(k)}(0)}{k!}x^k$"
  ]} />
  <p>Finalmente, por conveniencia definiremos el Operador de Taylor, para hacer explícito cómo nuestro Polinomio de Taylor depende de nuestro original y de <Latex>{"$n$"}</Latex>. Se aplica a una función y devolverá una nueva función <Latex>{"$T_nf$"}</Latex>, el grado del Polinomio de Taylor <Latex>{"$n$"}</Latex>.</p>
  <FormulaTable data={[
    "$P = T_nf \\ $ o $\\ P = T_n(f)$"
  ]} />
  <p>Usémoslo para generar nuestro ejemplo con <Latex>{"$e^x$"}</Latex>:</p>
  <FormulaTable data={[
    "$T_n(e^x) = \\displaystyle\\sum_0^k \\frac {e^{(k)}(0) x^k}{k!} = 1 + \\frac{x^2}{2!} + ... $"
  ]}/>
</div>

const miniDescription = <div>
  <p>
    ¿Alguna vez te has preguntado cómo funcionan las calculadoras? Imagina que necesitas calcular <Latex>{"$e^{69}$"}</Latex> o <Latex>{"$sin(12.5845)$"}</Latex> a mano, <b>¡que mierda!</b> Es una locura porque a veces estamos acostumbrados a usar herramientas sin saber cómo funcionan. Esta es una de mis aplicaciones favoritas del cálculo porque, a pesar de que no tenemos que usarlo para calcular funciones a mano, es genial saber cómo funcionan cosas de la vida cotidiana.<br /> <br />

    Aquí vemos un gráfico de la función <Latex>{"$e^{x}$"}</Latex>. Este capítulo trata sobre <b>aproximar funciones no polinómicas con funciones polinómicas</b>, y de esta manera podrás calcular porque sabemos cómo realizar operaciones básicas como <Latex>{"$ + - \\div * $"}</Latex>.  <br /><br />

    Con estos botones podrás agregar o quitar términos <b>de la serie de Taylor de <Latex>{"$e^{x}$"}</Latex></b>. Cuantos más términos en nuestra serie, más precisa es la aproximación. Es genial ver cómo se vuelve cada vez más similar a nuestra función objetivo. <br /><br />

    <Latex>{"$e^x = \\displaystyle\\sum_0^k  \\frac{x^k}{k!} = 1 + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ... + \\frac{x^n}{n!}$"}</Latex>
  </p>

</div>

export { description, miniDescription };
