import axios from 'axios';
import Head from 'next/head';
import cards from '../styles/cards.module.css';
const Index = ({dados}) => (
  <div>
    <Head>
    <title>Consulte aqui</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Lista de Nomes</h1>
    {console.log(dados)};
  <ul>
    <div className={cards.row}>
      <div className={cards.column}>
    {dados.DadosListTitulos.map(nomes=>(
      <div key={nomes.dtr_id}>
        <h2 className = {cards.cardtxt}>{nomes.dtr_nomedevedor}
        </h2>
      </div>
      ))}
      </div>
    </div>
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