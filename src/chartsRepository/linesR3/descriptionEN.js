"use client"
import ListConsiderations from '@/utils/listConsiderations';
import FormulaTable from '@/utils/formulaTable';
import { generate2dVectors } from '@/utils/generateVector';
import { layout_subchart, config_subchart } from '@/utils/chartProps';
import ModalChart from '@/components/modalChart';

import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, })
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
    <b>Definition</b>: Given <Latex>{"$P$ and $A$ in $R_n$"}</Latex>. The set of all points in <Latex>{"$P + tA$, $t \\in \\reals$"}</Latex> is a line which crosses through <Latex>{"$P$"}</Latex> and is parallel to <Latex>{"$A$"}</Latex>. We appoint it with <Latex>{"$L(P;A)$"}</Latex>.
  </p>
  <FormulaTable data={[
    "$L(P;A) = \\{P + tA | t \\in \\reals \\}$"
  ]}
  />
  <p>Let's analyze some important considerations:</p>
  <ListConsiderations data={[
    <>
      We can replace the direction vector with some vector <Latex>{"$B$"}</Latex>, where <Latex>{"$B = cA$"}</Latex>. Because it keeps the same direction of <Latex>{"$A$"}</Latex> due to the fact that they are parallel.
    </>,
    <>
      Two lines <Latex>{"$L(P;A)$"}</Latex> and <Latex>{"$L(P;B)$"}</Latex> which cross through the same point <Latex>{"$P$"}</Latex> are equal if the direction vectors <Latex>{"$A, B$"}</Latex> are parallel. If they were not parallel. We would get two different lines which cross through the same point but with <b>different slope</b>.
    </>,
    <>
      Two lines <Latex>{"$L(P;A)$"}</Latex> and <Latex>{"$L(Q;A)$"}</Latex> with the same direction vector <Latex>{"$A$"}</Latex> are equal if <Latex>{"$Q \\in L(P;A)$"}</Latex>. It means that <Latex>{"$Q$"}</Latex> would keep the same position. We can check if <Latex>{"$Q \\in L(P;A)$"}</Latex> checking <Latex>{"$Q - P = cA$"}</Latex>, where <Latex>{"$c$"}</Latex> is some constant which means that <Latex>{"$Q - P$"}</Latex> is parallel to A.
    </>,
    <>
      Two different points generate a line. The line defined by <Latex>{"$\\{P + t(Q - P) \\}$"}</Latex> will contain both <Latex>{"$P, Q$"}</Latex>.
    </>
  ]} />
  <p>It is great to know that these reasonings are supported by the fact that <Latex>{"$A, B$"}</Latex> were <b>linearly dependent</b> if <Latex>{"$B = cA$"}</Latex>. Now let's check an example in <Latex>{"$\\reals^2$"}</Latex>. We will get the usual equations we learnt in the school, but we will also check some important consideration. Given <Latex>{"$P, A$ in $\\reals^3$"}</Latex> and a line defined by <Latex>{"$L(P;A) = \\{P + tA \\}$"}</Latex>:</p>
  <FormulaTable enableScroll data={[
    "$P = (p, q, r) \\ $ $ \\ A = (a, b, c)$",
    "$L(P;A) = (p, q, r) + t(a, b, c)$",
    "$(x, y, z) = (p, q, r) + t(a, b, c)$",
    "$(x, y, z) = (p + ta, q + tb, r + tc)$, so",
    "$x = p + ta$, $y = q + tb$, $z = r + tc$",
  ]}
  />
  <p>If we use these equations <Latex>{"$x = p + ta$; $\\ y = q + tb$"}</Latex> in <Latex>{"$\\reals^2$"}</Latex>, we can solve for <Latex>{"$t$"}</Latex> in both</p>
  <FormulaTable data={[
    "$\\frac{(x-p)}{a} = \\frac{(y-q)}{b}$",
    "$b(x-p) = a(y-q)$",
    "$(y-q) = \\frac{b}{a}(x-p)$",
  ]}
  />
  <p>Next, remember that <Latex>{"$a, b$"}</Latex> are components of <Latex>{"$A$"}</Latex>, but what would happen if I don't know <Latex>{"$A$"}</Latex>? we can generate our line with two points <Latex>{"$P, Q$"}</Latex> like we saw previously. So, <Latex>{"$\\frac{b}{a}$"}</Latex> will change and if we have <Latex>{"$a = x_2 - x_1$"}</Latex> and <Latex>{"$b = y_2 - y_1$"}</Latex>, assuming that <Latex>{"$x_2, y_2$"}</Latex> belong to <Latex>{"$Q$"}</Latex>, we will get:</p>
  <FormulaTable data={[
    "$(y-q) = \\frac{(y_2 - y_1)}{(x_2 - x_1)}(x-p)$",
    "$m = \\frac{(y_2 - y_1)}{(x_2 - x_1)}$",
  ]}
  />
  <p>Which is the equation that we all know. But, it has something special <Latex>{"$x_2 - x_1 $ ≠ $ 0$"}</Latex>. However, if we analyze it as vectors we don't have to <b>face that restriction</b>, that is interesting because it appears when we use the cartesian representation.</p>
  <hr />
  <p>Finally, let's introduce another important concept. We learnt that two vectors which are orthogonal have their internal product <Latex>{"$= 0$"}</Latex>. Given some vector <Latex>{"$A = (a, b)$"}</Latex>, we can create a vector <Latex>{"$N = (b, -a)$"}</Latex>, which can make</p>
  <FormulaTable data={[
    "$A \\cdot N = (a, b) \\cdot (b, -a)$",
    "$= ab + (-ab) = 0$",
  ]}
  />
  <p><b>This is valid for this context</b>, but the important thing here is to know that <Latex>{"$N$"}</Latex> is the <b>normal vector</b> and it is orthogonal to <Latex>{"$A$"}</Latex>. Now, let's retake our previous cartesian equation <Latex>{"$b(x-p) - a(y-q) = 0$"}</Latex>. We got the conclusion that that equation represents a line. Well, let's check the following approach:</p>
  <FormulaTable data={[
    "$(X - P) \\cdot N = 0$",
  ]}
  />
  <p>This is <b>elegant</b>. As we could see <Latex>{"$X - P$"}</Latex> defines the direction vector. The new element is that <Latex>{"$N$"}</Latex> is orthogonal to that direction vector. If we analyze it, all values which satisfy the equation are the ones belong to the line because they have to be orthogonal to <Latex>{"$X - P$"}</Latex>. But if it is not enough for you we can solve this like this</p>
  <FormulaTable enableScroll data={[
    "$(X - P) \\cdot N = 0$",
    "$((x, y) - (p, q)) \\cdot (b, -a) = 0$",
    "$(x - p, y - q) \\cdot (b, -a) = 0$",
    "$b(x - p) - a(y - q) = 0$",
  ]}
  />
  <p>Beautiful huh? yes! we got the cartesian equation. This is a good schema of our example.</p>
  <ModalChart chart={
    <Plot
      data={data_subchart}
      layout={layout_props}
      config={config_subchart}
      style={{ width: '100%', height: '80%', marginTop: "0px" }}
    />
  } />
  <br />
  <p>Finally, the vector with minimum length to the line is the vector which is the projection of <Latex>{"$P$ over $N$"}</Latex>. This is great because we could use all things we learnt previously. It generates a useful equation named distance from the origin to the line</p>
  <FormulaTable enableScroll data={[
    "$Proy_AB = \\frac {A \\cdot B}{ B \\cdot B}B $",
    "$\\lVert Proy_AB \\rVert = \\lVert \\frac {A \\cdot B}{ B \\cdot B}B \\rVert$",
    "$d = \\lvert \\frac {A \\cdot B}{ B \\cdot B} \\rvert \\lVert B \\rVert$",
    "$d = \\frac {\\lvert A \\cdot B \\rvert}{ B \\cdot B}  \\lVert B \\rVert$",
    "$d = \\frac {\\lvert A \\cdot B \\rvert}{\\lVert B \\rVert^2}  \\lVert B \\rVert$",
    "$d = \\frac {\\lvert A \\cdot B \\rvert}{\\lVert B \\rVert}$",
  ]}
  />
</div>


const miniDescription = <div>
  <p>Lines are an interesting combination of vectors properties. A line is defined by a point <Latex>{"$P$"}</Latex> and a vector <Latex>{"$A$"}</Latex>, both in <Latex>{"$R_n$"}</Latex>. Where <Latex>{"$A$"}</Latex> is named <b>direction vector</b> and <Latex>{"$P$"}</Latex> is the initial point of the line. With these elements you can generate a line with <Latex>{"$L(P;A) = \\{P + tA | t \\in \\reals \\}$"}</Latex>. In other words, if you sum  <Latex>{"$P$"}</Latex> with the <b>linear span</b> of <Latex>{"$A$"}</Latex> you can generate a line.</p>
  <p>Our chart is pretty explicit with the fact that <b>a line is a infinite set of points</b> in <Latex>{"$R_n$"}</Latex>, which follow the same direction. It means if you change the direction of <Latex>{"$A$"}</Latex> the line will change its <b>slope</b>. And, if you change <Latex>{"$P$"}</Latex> the line will change its <b>position</b>. </p>
</div>

export { description, miniDescription };
