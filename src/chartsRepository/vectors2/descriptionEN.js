import FormulaTable from '@/utils/formulaTable';
var Latex = require('react-latex');

const description = <div>
  <p>Let's check two important operations we can perform with vectors, and one of the most used theorems.</p>
  <p><b>Definition</b>: Given <Latex>{"$A, B$"}</Latex> in <Latex>{"$V_{n}$"}</Latex> the <b>scalar/dot product</b> is</p>
  <Latex>{"$A \\cdot B = \\displaystyle\\sum_1^k a_k b_k$"}</Latex>
  <p><b>Definition</b>: Given <Latex>{"$A$"}</Latex> in <Latex>{"$V_{n}$"}</Latex> the <b>vector norm</b> is</p>

  <FormulaTable enableScroll data={[
    "$\\lVert A \\rVert = \\sqrt{a_1^2 + a_2^2 + ... + a_n^2}$ and",
    "$A \\cdot A = \\displaystyle\\sum_1^k a_k a_k = a_1^2 + a_2^2 + ... + a_k^2$ so",
    "$\\lVert A \\rVert = \\sqrt{A \\cdot A}$"
  ]} />

  <p>But, where <Latex>{"$\\lVert A \\rVert = \\sqrt{a_1^2 + a_2^2 + ... + a_n^2}$"}</Latex> came from?, let's check our chart. If we assume that our vector exists only in the plane <Latex>{"$XY$"}</Latex>we could find its value with pitagoras' theorem.</p>
  <FormulaTable data={[
    "$A_{xy} = \\sqrt{a_1^2 + a_2^2}$"
  ]} />
  <p>Great, we found our value in the plane XY. Now we need to get it with our real vector. Notice that it has a component in <Latex>{"$Z$"}</Latex> axis. So we have to apply the pitagoras' theorem again.</p>
  <FormulaTable data={[
    "$A = \\sqrt{A_{xy}^2 + a_3^2}$",
    "$A = \\sqrt{(\\sqrt{a_1^2 + a_2^2})^2 + a_3^2}$",
    "$A = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ which is the expected result."
  ]} />
  <hr />
  <p>Those results are important to introduce the <b>Cauchy–Schwarz inequality</b>. Imagine these two vectors:</p>
  <FormulaTable data={[
    "$A = (a_{1}, a_{2}, a_{n})$ and $B = (b_{1}, b_{2}, b_{n})$"
  ]} />
  <p>Let's think a litte. How can I ensure that both vectors are <b>in the same direction</b>?. Here we can use one of the vectors' properties. If we multiply by a constant <Latex>{"$X$"}</Latex> we are going to have a different vector in the same direction, as we can see in our chart. Let's imagine the next example:</p>
  <Latex>{"$A = (8,8,10)$"}</Latex> if we multiple by <Latex>{"$1.5$"}</Latex> we will get <Latex>{"$B = 1.5(A) = (12,12,15)$"}</Latex><br />
  <p>
    It means that <Latex>{"$X$"}</Latex> is the difference between both values <Latex>{"$a_{n} X + b_{n} = 0$"}</Latex>, if we solve that equation we are going to get <Latex>{"$X = -1.5$"}</Latex> for each component in our vectors. <br />
    <Latex>{"$\\displaystyle\\sum_1^k (a_kX + b_k) = 0$"}</Latex> will be true in this case because <Latex>{"$B = 1.5(A)$"}</Latex> and for every <Latex>{"$k$"}</Latex> we will get <Latex>{"$0$"}</Latex>.
  </p>
  <p>Now we want to add a greater than sign, and also we will relate <Latex>{"$A, B$"}</Latex> like this:</p>
  <Latex>{"$\\displaystyle\\sum_1^k (a_kX + b_k)^2 \\geq 0^2$"}</Latex>and if we distribute our sum sign we get<br />
  <Latex>{"$\\displaystyle\\sum_1^k (a_k^2X^2 + 2a_kb_k + b_k^2X^2) \\geq 0$"}</Latex><br />
  <p>Let's rewrite like this <Latex>{"$AX^2+2BX+C \\geq 0$"}</Latex> where</p>
  <p>
    <Latex>{"$ A = \\displaystyle\\sum_1^k a_k^2$"}</Latex>&nbsp;&nbsp;&nbsp;
    <Latex>{"$ B = \\displaystyle\\sum_1^k a_kb_k$"}</Latex>&nbsp;&nbsp;&nbsp;
    <Latex>{"$ C = \\displaystyle\\sum_1^k b_k^2$"}</Latex>
  </p>
  <p>Our goal is to demonstrate that <Latex>{"$ B^2 \\leq AC$"}</Latex> so that</p>
  <Latex>{"$AX^2 + 2BX + C = A(X + \\frac BA ) + \\frac {AC-B^2}{A}$"}</Latex> which gets minimun with <Latex>{"$ X = \\frac {-B}{A}$"}</Latex>, it supports the idea that it is not negative according to the inequality, so <br /><br />
  <Latex>{"$A(\\frac {-B}{A})^2 + 2B(\\frac {-B}{A}) + C \\geq 0 $"}</Latex> solving here<br /><br />
  <Latex>{"$B^2 \\leq AC $"}</Latex> As we wanted to demonstrate. And if we replace our values <Latex>{"$A, B, C $"}</Latex> we will get the <b>Cauchy–Schwarz inequality</b>.<br /><br />
  <Latex>{"$\\lvert A \\cdot B \\lvert \\leq \\lVert A \\rVert \\lVert B \\rVert$"}</Latex>

</div>

const miniDescription = <div>
  <p>Let's check two important operations we can perform with vectors, and one of the most used theorems.</p>
  <p><b>Definition</b>: Given <Latex>{"$A, B$"}</Latex> in <Latex>{"$V_{n}$"}</Latex> the <b>scalar/dot product</b> is</p>
  <Latex>{"$A \\cdot B = \\displaystyle\\sum_1^k a_k b_k$"}</Latex>
  <p><b>Definition</b>: Given <Latex>{"$A$"}</Latex> in <Latex>{"$V_{n}$"}</Latex> the <b>vector norm</b> is</p>
  <FormulaTable data={[
    "$\\lVert A \\rVert = \\sqrt{a_1^2 + a_2^2 + ... + a_n^2}$ and",
    "$A \\cdot A = \\displaystyle\\sum_1^k a_k a_k = a_1^2 + a_2^2 + ... + a_k^2$ so",
    "$\\lVert A \\rVert = \\sqrt{A \\cdot A}$"
  ]} />
  <p><b>Theorem</b>: Cauchy–Schwarz inequality</p>
  <Latex>{"$\\lvert A \\cdot B \\lvert \\leq \\lVert A \\rVert \\lVert B \\rVert$"}</Latex>

</div>

export { description, miniDescription };
