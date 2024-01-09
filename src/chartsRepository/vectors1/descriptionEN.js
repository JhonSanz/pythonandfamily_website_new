import FormulaTable from '@/utils/formulaTable';
var Latex = require('react-latex');

const description = <div>
  <p>Vectors are represented as oriented segments or arrows. Their operations are expressed based in their components
    <Latex>{"$(a_{1}, a_{2}, ... , a_{n})$"}</Latex>.</p>
  <p>The set of n-dimentional vectors is named <b>vectorial space</b>, designed with <Latex>{"$V_{n}$"}</Latex>.</p>
  <p><b>Definition</b>: Given <Latex>{"$A, B$"}</Latex> in <Latex>{"$V_{n}$"}</Latex></p>
  <FormulaTable enableScroll data={[
    "$A = B$ if $a_{1} = b_{1}, a_{2} = b_{2}, a_{n} = b_{n}$",
    "$A + B = (a_{1} + b_{1}, a_{2} + b_{2}, a_{n} + b_{n})$",
    "$cA = (ca_{1}, ca_{2}, ... , ca_{n})$ with c as scalar value.",
  ]} />
  <p>
    Here there is a representation of the parallelogram law. We have two vectors <Latex>{"$A, B$"}</Latex>. Notice that their
    intial point is not the coordinate origin <Latex>{"$(0,0,0)$"}</Latex>. Instead of that, we have: <br />
  </p>
  <p>
    <FormulaTable data={[
      "$A = (4,4,8)$ $B = (7,7,5)$ $Q = (3,3,3)$"
    ]} />
    Where <Latex>{"$Q$"}</Latex> is the initial point for both <Latex>{"$A, B$"}</Latex>.
  </p>
  <p>If we substract the final and the initial point, <b>we will get the vector drawed from the origin</b>. We are going to do that because we want to check <Latex>{'$\\overrightarrow{QA} = \\overrightarrow{BE}$'}</Latex> and <Latex>{'$\\overrightarrow{QB} = \\overrightarrow{AE}$'}</Latex>. But, what is the value of <Latex>{"$E$"}</Latex>?. First, let's calculate the diffrence between:
  </p>
  <FormulaTable enableScroll data={[
    "$\\overrightarrow{QA} = A - Q = (4,4,8) - (3,3,3)$",
    '$\\overrightarrow{QA} = (1,1,5)$',
    '$\\overrightarrow{QB} = B - Q = (7,7,5) - (3,3,3)$',
    '$\\overrightarrow{QB} = (4,4,2)$'
  ]} />

  <p>
    Now, <Latex>{"$E = B + \\overrightarrow{QA} = A + \\overrightarrow{QB}$"}</Latex>, as we can see in our chart. It is important to note that <Latex>{"$\\overrightarrow{AE}$"}</Latex> and <Latex>{"$\\overrightarrow{QB}$"}</Latex> are parallel, and if we consider both to perform this analysis we are going to get the same result.
  </p>
</div>

const miniDescription = <div>
  <p>Vectors are represented as oriented segments or arrows. Their operations are expressed based in their components
    <Latex>{"$(a_{1}, a_{2}, ... , a_{n})$"}</Latex>.</p>
  <p>The set of n-dimentional vectors is named <b>vectorial space</b>, designed with <Latex>{"$V_{n}$"}</Latex></p>
  <p><b>Definition</b>: Given <Latex>{"$A, B$"}</Latex> in <Latex>{"$V_{n}$"}</Latex></p>
  <FormulaTable data={[
    "$A = B$ if $a_{1} = b_{1}, a_{2} = b_{2}, a_{n} = b_{n}$",
    "$A + B = (a_{1} + b_{1}, a_{2} + b_{2}, a_{n} + b_{n})$",
    "$cA = (ca_{1}, ca_{2}, ... , ca_{n})$ with c as scalar value.",
  ]} />
  <br />
</div>

export { description, miniDescription };
