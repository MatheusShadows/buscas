import axios from 'axios';
import Head from 'next/head';
import cards from '../styles/cards.module.css';
import React,{useState, useEffect} from 'react';

function Status(status) {

  if (status = 'DTR_PRT             ') {
    return status = 'EVO';
  }else{
    return status = 'NOPE';
  }
}
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
      <div className = {cards.cardarea}>
    {dados.DadosListTitulos.map(nomes=>(
      <div className = {cards.cardtxt} key={nomes.dtr_id}>
        <h2>{nomes.dtr_nomedevedor}</h2>
        <h2>Status: {Status(nomes.dtr_status)}</h2>
        <h3>Estado: {nomes.dtr_estadosacador}</h3>
        <h3>Cidade: {nomes.dtr_cidadesacador}</h3>
        <h3>Nome Sacador: {nomes.dtr_nomesacador}</h3>
        <h3>Valor: {nomes.dtr_valor}</h3>
        <h3>Saldo: {nomes.dtr_saldo}</h3>
      </div>
      ))}
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