var Latex = require('react-latex');

const description = <div>
  <p>
    Esta es la description de mi grafico. <br />
    y puedo incluir latex <Latex> $x^2 + y^2 - z^2 = 0$ </Latex>
  </p>
</div>


const miniDescription = <div>
  <h1>test</h1>
</div>

export { description, miniDescription };
