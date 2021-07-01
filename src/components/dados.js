import axios from 'axios';

const Dados = ({dados}) => (
    <div>
    <ul>
      {dados.DadosListTitulos.map(nomes=>(
        <li key={nomes.dtr_id}>
          <h2>{nomes.dtr_nomedevedor}</h2>
        </li>
      ))}
    </ul>
    
    </div>
  );
  Dados.getInitialProps = async () =>{
    const response = await axios.get(
      'https://nodeteste.protestodireto.com.br/dadosProtesto/ListaTitulos'
    );
    return {dados: response.data}
  }
  
  export default Dados;