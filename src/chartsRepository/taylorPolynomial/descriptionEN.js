import FormulaTable from '@/utils/formulaTable';
var Latex = require('react-latex');

const description = <div>
  <p>
    Let's retake our <Latex>{"$f(x) = e^{x}$"}</Latex> example. We know that <Latex>{"$f$"}</Latex> and all its derivated terms are <Latex>{"$1$"}</Latex> with <Latex>{"$x = 0$"}</Latex>. That is the key because if we find another function which its derivates are always the same, and its initial conditions are also the same we can say that both are the same functions. Let's look at the next analysis. <br />
  </p>
  <p>
    Let's compare <Latex>{"$f(x) = e^{x}$"}</Latex> with <Latex>{"$p(x) = \\displaystyle\\sum_0^k  \\frac{x^k}{k!}$"}</Latex> we are going to derivate these functions and evaluate them in <Latex>{"$x = 0$"}</Latex>. <br />
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
    This is great. As you can see all derivates are giving us the same function for both <Latex>{"$f(x)$"}</Latex> and <Latex>{"$p(x)$"}</Latex> I mean: <br /><br />
  </p>
    <FormulaTable data={[
      "$f^{(k)}(x) = f(x) \\ \\forall \\ k = 1, 2, 3 ... $",
      "$p^{(k)}(x) = p(x) \\ \\forall \\ k = 1, 2, 3 ... $",
    ]} />
  <p>
    Now let's evaluate  <Latex>{"$x = 0$"}</Latex><br /><br />
  </p>
    <FormulaTable data={[
      "$f^{(k)}(0) = 1 \\ \\forall \\ k = 1, 2, 3 ... $",
      "$p^{(k)}(0) = 1 \\ \\forall \\ k = 1, 2, 3 ... $",
      "$p^{(k)}(0) = f^{(k)}(0) \\ \\forall \\ k = 1, 2, 3 ... \\ $ so:",
    ]} />
  <p>
    Those functions <b>are essentially the same</b>. Now in general, <b>we are trying to find</b> a polynomial <Latex>{"$p$"}</Latex> wich matches with <Latex>{"$f$"}</Latex> and its first <Latex>{"$n$"}</Latex> derivates in <Latex>{"$x = 0$"}</Latex> (as we did previously with <Latex>{"$f(x) = e^{x}$"}</Latex>), so:<br /><br />
  </p>
    <FormulaTable data={[
      "$f^{(0)}(0) = p^{(0)}(0)$",
      "$f^{(1)}(0) = p^{(1)}(0)$",
      "$f^{(n)}(0) = p^{(n)}(0) \\ \\forall \\ n = 1, 2, 3 ... $",
    ]} />
  <p>The polynomial is... yes, it's this:</p>
  <FormulaTable data={[
    "$p(x) = c_0 + c_1x + c_2x^2 + ... + c_nx^n$"
  ]} />
  <p>Let's make the same proccess</p>
  <FormulaTable data={[
    "$p^{(1)}(x) = 0 + c_1 + 2c_2x + 3c_3x^2 + ...$",
    "$p^{(2)}(x) = 0 + 0 + 2c_2 + 6c_3x + ...$",
    "$p^{(3)}(x) = 0 + 0 + 0 + 6c_3 + ...$",
  ]} />
  <p>And if we evaluate them in <Latex>{"$x = 0$"}</Latex> we will get</p>
  <FormulaTable data={[
    "$p^{(1)}(0) = c_1$",
    "$p^{(2)}(0) = 2c_2$",
    "$p^{(3)}(0) = 6c_3$, and in general",
    "$p^{(k)}(0) = k!c_k$, we know $p^{(k)}(0) = f^{(k)}(0)$",
    "$c_k = \\frac {f^{(k)}(0)}{k!}$",
  ]} />
  <p>Great!, we found something important. Thanks to this reasoning we could find how to generate our polynomial with the constants which satisfy the <Latex>{"$n + 1$"}</Latex> initial conditions. So let's go ahead and write the Taylor Polynomial</p>
  <FormulaTable data={[
    "$P(x) = \\displaystyle\\sum_0^k \\frac {f^{(k)}(0)}{k!}x^k$"
  ]} />
  <p>Finally, for convenience we will define the Taylor Operator, to make explicit how our Taylor polynomial depends on our original and <Latex>{"$n$"}</Latex>. It is being applied to a function, and it will return a new function <Latex>{"$T_nf$"}</Latex>, the Taylor Polynomial grade <Latex>{"$n$"}</Latex>.</p>
  <FormulaTable data={[
    "$P = T_nf \\ $ or $\\ P = T_n(f)$"
  ]} />
  <p>Let's use it to generate our example with <Latex>{"$e^x$"}</Latex>:</p>
  <FormulaTable data={[
    "$T_n(e^x) = \\displaystyle\\sum_0^k \\frac {e^{(k)}(0) x^k}{k!} = 1 + \\frac{x^2}{2!} + ... $"
  ]}/>
</div>


const miniDescription = <div>
  <p>
    Have you ever though about how calculators work?. Imagine that you need to compute <Latex>{"$e^{69}$"}</Latex> or <Latex>{"$sin(12.5845)$"}</Latex> by hand, <b>what a shit huh?</b>. It is crazy because sometimes we are used to using tools without knowing how they work. This is one of my favorite applications of calculus because despite the fact that we don't have to use it to calculate functions by hand, it is great to know how daily life things work.<br /> <br />

    Here we see a chart of <Latex>{"$e^{x}$"}</Latex> function. This chapter is about <b> approximate non polynomial functions with polynomial ones</b>, and by that way you will be able to compute because we do know how to perform basic operations like <Latex>{"$ + - \\div * $"}</Latex>.  <br /><br />

    With these buttons you will be able to add or remove terms <b>of <Latex>{"$e^{x}$"}</Latex> taylor serie</b>. The more terms in our serie, the more accurate is the approximation. It is great to see it becoming more an more similar to our target function. <br /><br />

    <Latex>{"$e^x = \\displaystyle\\sum_0^k  \\frac{x^k}{k!} = 1 + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ... + \\frac{x^n}{n!}$"}</Latex>
  </p>

</div>

export { description, miniDescription };
