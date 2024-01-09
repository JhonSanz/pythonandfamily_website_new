import FormulaTable from '@/utils/formulaTable';
import projection from "@/img/projections.png";
var Latex = require('react-latex');

const description = <div>
  <p>The triangular inequality says that if you sum two sides of a triangle the result is going to be greater than or equal to the remaining side. It could be pretty obvious visually in our context of vectors, but in math all have to be demonstrated. As we can see in our chart, given two vectors <Latex>{"$A, B$"}</Latex> the sum is <Latex>{"$A + B$"}</Latex>, using the paralelogram rule. To get the magnitude of each one, we use <Latex>{"$\\lVert A \\rVert, \\lVert B \\rVert, $ and $\\lVert A + B\\rVert$"}</Latex>. So, to present it:</p>
  <p><b>Theorem</b>: Given <Latex>{"$A, B$ in $V_{n}$"}</Latex></p>
  <FormulaTable data={[
    "$\\lVert A + B \\rVert \\leq \\lVert A \\rVert + \\lVert B \\rVert$"
  ]} />
  <p>Similar with the Cauchy-Schwarz inequality, the equal sign is valid for vectors which are scalar multiple of the other one. For this demonstration I just can say that someday a genius did the following:
  </p>
  <FormulaTable enableScroll data={[
    "$\\lVert A + B \\rVert^2 \\leq (\\lVert A \\rVert + \\lVert B \\rVert)^2$",
    "$(A+B)\\cdot(A+B) \\leq \\lVert A \\rVert^2 + 2 \\lVert A \\rVert \\lVert B \\rVert + \\lVert B \\rVert^2$",
    "$A \\cdot A + 2A \\cdot B + B \\cdot B \\leq \\lVert A \\rVert^2 + 2 \\lVert A \\rVert \\lVert B \\rVert + \\lVert B \\rVert^2$",
    "$\\lVert A \\rVert^2 + 2A \\cdot B + \\lVert B \\rVert^2 \\leq \\lVert A \\rVert^2 + 2 \\lVert A \\rVert \\lVert B \\rVert + \\lVert B \\rVert^2$",
    "$A \\cdot B \\leq \\lVert A \\rVert \\lVert B \\rVert$"
  ]} />
  <p>Yes!, we got the Cauchy-Schwarz inequality, and as you know that is a fact. We don't need to demonstrate it again. Let's keep it in mind because we are going to analyze our second chart. What would happen if our vectors are orthogonal?. Well, let's retake this:</p>
  <FormulaTable data={[
    "$\\lVert A + B \\rVert^2 = \\lVert A \\rVert^2 + 2 A \\cdot B + \\lVert B \\rVert^2$"
  ]} />
  <p>If <Latex>{"$A \\cdot B = 0$"}</Latex> our equation would be</p>
  <FormulaTable data={[
    "$\\lVert A + B \\rVert^2 = \\lVert A \\rVert^2 + \\lVert B \\rVert^2$"
  ]} />
  <p>This is pretty similar to the <b>Pythagorean' Theorem</b>. Indeed, it is the same, but in <Latex>{"$V_n$"}</Latex>. The most important thing is that for the Pythagorean Teorem the vectors form a 90° angle. In other words, <b>they are orthogonal</b>. So, if we compare our previous equations the difference is that <Latex>{"$A \\cdot B = 0$"}</Latex>, it means that when the vectors are orthogonal them internal product is <Latex>{"$0$"}</Latex>.</p>
  <p><b>Definition</b>: Given <Latex>{"$A, B$ in $V_{n}$"}</Latex>. They are orthogonal if <Latex>{"$A \\cdot B = 0$"}</Latex></p>
  <hr />
  <p>Now, let's imagine this scenario. This is a bus stop, and as you can see there is a ceiling to protect pedestrians from the sunlight. This <b>generates a shadow on the floor</b>. This is exactly the same as our second chart, just we have to keep in mind that the vector <Latex>{"$A$"}</Latex> generates a "shadow" on <Latex>{"$B$"}</Latex>. It is important to note that this visual approach could be tricky because the position of the sun could affect the position of the shadow. In this ideal scenario the sun generates a  <b>shadow which is 90° with the floor</b>.</p><br />
  <p style={{ textAlign: "center" }}>
    <img src={projection} alt="" style={{ width: "100%", maxWidth: "700px", height: "auto" }} />
  </p>
  <p>If we check our second chart we can see the vectors <Latex>{"$A, B$"}</Latex> but there is another vector <Latex>{"$C$"}</Latex>, which is orthogonal to <Latex>{"$B$"}</Latex>. But, let's take a look. In our chart <Latex>{"$B + C$ ≠ $A$"}</Latex> because the Paralelogram Law. So, if we think we have to scale <Latex>{"$B$"}</Latex>, to sum <Latex>{"$B$ and $C$"}</Latex>. So, if we multiply <Latex>{"$tB$"}</Latex> as we can see in our chart, we are going to have <Latex>{"$A = tB + C$"}</Latex> following the idea of the "shadow". Now, let's eliminate <Latex>{"$C$"}</Latex> from this equation.</p>
  <FormulaTable data={[
    "$A = tB + C$ multiplying by $B$",
    "$A \\cdot B = tB \\cdot B + C \\cdot B$",
    "$C \\cdot B = 0$ since they are orthogonal",
    "$A \\cdot B = tB \\cdot B$",
    "$t = \\frac{A \\cdot B}{B \\cdot B}  = \\frac{A \\cdot B}{\\ \\lVert B \\rVert^2}$",
  ]} />
  <p>It means that if you multiply <Latex>{"$tB$"}</Latex> you are going to get the projection of <Latex>{"$A$ onto $B$"}</Latex>.</p>
  <hr />
  <p>Finally, as we can see there is an angle <Latex>{"$\\theta$"}</Latex> between <Latex>{"$A$ and $tB$"}</Latex>. So, as usual (adjacent side over hypotenuse): </p>
  <FormulaTable data={[
    "$cos(\\theta) = \\frac {t\\lVert B \\rVert}{\\lVert A \\rVert}$ replacing $t$",
    "$cos(\\theta) = \\frac {A \\cdot B}{\\lVert A \\rVert \\lVert B \\rVert}$",
    "$A \\cdot B = \\lVert A \\rVert \\lVert B \\rVert cos(\\theta)$",
  ]} />
  <p>This is an alternative way to calculate the internal product of vectors. But, even better, You can calculate the angle between two vectors:</p>
  <FormulaTable data={[
    "$\\theta = cos^{-1} (\\frac {A \\cdot B}{\\lVert A \\rVert \\lVert B \\rVert} )$",
  ]} />
</div>

const miniDescription = <div>
  <p>
    In this episode we are going to find one of the most important properties of vectors. Previously, we learnt what is the paralelogram rule and Cauchy-Schwartz inequality. By using that, we are going to find this <b>property of internal product</b>.
  </p>
  <FormulaTable data={[
    "$A \\cdot B = 0 \\ $ if they are orthogonal"
  ]} />
  <p>Which is useful to understand the Projections on vectors.</p>
  <FormulaTable data={[
    "$C = \\frac {A \\cdot B}{ \\ \\lVert B \\rVert^2}B $"
  ]} />
  <p>Finally we will get how to calculate the <b>angle between two vectors</b>. All those things are possible after analizing the Triangular inequality.</p>
  <FormulaTable data={[
    "$A \\cdot B = \\lVert A \\rVert \\lVert B \\rVert cos\\theta $",
    "$\\theta = cos^{-1} (\\frac {A \\cdot B}{\\lVert A \\rVert \\lVert B \\rVert} )$",
  ]} />

</div>

export { description, miniDescription };
