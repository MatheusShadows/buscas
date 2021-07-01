import axios from 'axios';

const Index = ({dados}) => (
  <div>
    <h1>Lista de Nomes</h1>
    {console.log(dados)};
  <ul>
    {dados.DadosListTitulos.map(nomes=>(
      <li key={nomes.dtr_id}>
        <h2>{nomes.dtr_nomedevedor}</h2>
      </li>
    ))}
  </ul>
  
  </div>
);
Index.getInitialProps = async () =>{
  const response = await axios.get(
    'https://nodeteste.protestodireto.com.br/dadosProtesto/ListaTitulos'
  );
  return {dados: response.data}
}

export default Index;