
import React,{ useEffect, useState } from "react";
import cards from '../styles/cards.module.css';
import Head from 'next/head';
import seek from '../styles/search.module.css';
import  api from './service/api';

function Index() {
  const [q, setQ] = useState("");
  const [searchParam] = useState(["dtr_nomedevedor"]);
  const [filtro,setFiltro] = useState(["All"]);
  const [filtroB,setFiltroB] = useState(["All"]);
  const [titleProtest, setTitleProtest] = useState([]);

  function Status(estelfe) {
  
    estelfe = estelfe.trim();
    if (estelfe == 'DTR_EV') {
      return estelfe = 'ENVIADO';
    }else if (estelfe == 'DTR_PRT') {
      return estelfe = 'PROTESTADO';
    }else if (estelfe == 'DTR_RETD') {
      return estelfe = 'RETIRADO';
    }else if (estelfe == 'DTR_SUST') {
      return estelfe = 'SUSTADO';
    }else if (estelfe == 'DTR_DEV_CART_SC') {
      return estelfe = 'DEVOLVIDO PELO CARTORIO SEM CUSTA';
    }else if (estelfe == 'DTR_DEV_CART_CC') {
      return estelfe = 'DEVOLVIDO PELO CARTORIO COM CUSTA';
    }else if (estelfe == 'DTR_LIQUID') {
      return estelfe = 'LIQUIDAÇÃO EM CONDICIONAL';
    }else if (estelfe == 'DTR_TIT_ACT') {
      return estelfe = 'TITULO ACEITO';
    }else if (estelfe == 'DTR_EDITAL') {
      return estelfe = 'EDITAL ESTADO BH E RJ';
    }else if (estelfe == 'DTR_PRT_BC_CAC') {
      return estelfe = 'PROTESTADO DO BANCO CANCELADO';
    }else if (estelfe == 'DTR_PRT_EFT') {
      return estelfe = 'PROTESTO EFETUADO';
    }else if (estelfe == 'DTR_PRT_EDT') {
      return estelfe = 'PROTESTO POR EDITAL';
    }else if (estelfe == 'DTR_RETD_EDT') {
      return estelfe = 'RETIRADA POR EDITAL';
    }else if (estelfe == 'DTR_PRT_TERC') {
      return estelfe = 'PROTESTO DE TERCEIRO CANCELADO';
    }else if (estelfe == 'DTR_DES_PRT_LB') {
      return estelfe = 'DESISTENCIA DO PROTESTO POR LIQUIDAÇÃO BANCARIA';
    }else if (estelfe == 'DTR_SUST_DEF') {
      return estelfe = 'SUSTADO DEFINITIVO';
    }else if (estelfe == 'DTR_EMISS') {
      return estelfe = 'EMISSAO S2 VIA INSTRUMENTO';
    }else if (estelfe == 'DTR_CAC_EFT') {
      return estelfe = 'CANCELAMENTO EFETUADO';
    }else if (estelfe == 'DTR_CAC_N_EFT') {
      return estelfe = 'CANCELAMENTO NÃO EFETUADO';
    }else if (estelfe == 'DTR_CAC') {
      return estelfe = 'CANCELADO';
    }
    else if (estelfe == 'DTR_BLT_PG') {
      return estelfe = 'BOLETO PAGO';
    } 
    else{
      return estelfe
    }
  }
  useEffect(() => {
    // axios.get(
    //   'https://nodeteste.protestodireto.com.br/dadosProtesto/ListaTitulos'
    // ).then(res => {
    //   console.log(res.data);
    //   setTitleProtest(res.data)
    // }).catch((err) => {
    //   console.log(err);
    // })

    // object { mateus: {}, allan: {}}
    // response {data: {} status: {}  }
    // const { allan } = object
    // const { data } = response
    async function getData() {
      try {
        const { data } = await api.get('/dadosProtesto/ListaTitulos');
        console.log(data)
        setTitleProtest(data.DadosListTitulos);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

    function search(dados){
  
      return dados.filter((item)=>{
        if (item.dtr_status.trim() == filtro) {
          return searchParam.some((newItem) => {
            return (
              item[newItem]
                .toString()
                .toLowerCase()
                .indexOf(q.toLowerCase()) > -1
            );
          }); 
          } else if (filtro == "All") {
              return searchParam.some((newItem) => {
                return (
                  item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
                );
              });
            } 
          })}
    
    
    return (
      <div>
        {console.log(titleProtest)}
       <Head>
        <title>Consulte aqui</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div>
          <label htmlFor="search-form">
            <span className = {seek.txt}>Digite seu nome aqui</span>
              <input
              type="search"
              name="search-form"
              id="search-form"
              placeholder="Nome..."
              value={q}
              onChange={(e)=>setQ(e.target.value)}
              />
          </label>
          <select
      onChange={(e) => {
      setFiltro(e.target.value);
       }}
       className="custom-select"
       aria-label="Filtro por Status">
        <option value="All">Filtro por Status</option>
        <option value="DTR_PRT">PROTESTADO</option>
        <option value="DTR_RTD">RETIRADO</option>
        <option value="DTR_CAC">CANCELADO</option>
        <option value="DTR_BLT_PG">BOLETO PAGO</option>
        <option value="DTR_DEV_CART_CC">DEVOLVIDO PELO CARTORIO COM CUSTA</option>
        <option value="DTR_CAC_N_EFT">CANCELAMENTO NÃO EFETUADO</option>
        <option value="DTR_ENV">ENVIADO</option>
        <option value="DTR_DEV_CART_SC">DEVOLVIDO PELO CARTORIO SEM CUSTA</option>
        <option value="DTR_TIT_ACT">TITULO ACEITO</option>

        </select>
        <select
      onChange={(e) => {
      setFiltroB(e.target.value);
       }}
       className="custom-select"
       aria-label="Filtro por UF">
        <option value="All">Filtro por UF</option>
        <option value="PA">PARÁ</option>
        <option value="RO">RONDÔNIA</option>
        <option value="AC">ACRE</option>
        <option value="RR">RORAIMA</option>
        <option value="AP">AMAPÁ</option>
        <option value="TO">TOCANTINS</option>
        <option value="MA">MARANHÃO</option>
        <option value="PI">PIAUÍ</option>
        <option value="CE">CEARÁ</option>
        <option value="RN">RIO GRANDE DO NORTE</option>
        <option value="PB">PARAÍBA</option>
        <option value="PE">PERNAMBUCO</option>
        <option value="SE">SERGIPE</option>
        <option value="AL">ALAGOAS</option>
        <option value="BA">BAHIA</option>
        <option value="MG">MINAS GERAIS</option>
        <option value="ES">ESPÍRITO SANTO</option>
        <option value="RJ">RIO DE JANEIRO</option>
        <option value="SP">SÃO PAULO</option>
        <option value="PR">PARANÁ</option>
        <option value="SC">SANTA CATARINA</option>
        <option value="RS">RIO GRANDE DO SUL</option>
        <option value="MS">MATO GROSSO DO SUL</option>
        <option value="MT">MATO GROSSO</option>
        <option value="GO">GOIÁS</option>
        <option value="DF">DISTRITO FEDERAL</option>
        
        </select>
        </div>
    <ul>
      <div className = {cards.cardarea}>
    {search(titleProtest).map(nomes=>(
      <>
      {console.log('hello')}
       <div className = {cards.cardtxt} key={nomes.dtr_id}>
        <h2>{nomes.dtr_nomedevedor}</h2>
        <h2>Status: {Status(nomes.dtr_status)}</h2>
        <h3>Estado: {nomes.dtr_estadodevedor}</h3>
        <h3>Cidade: {nomes.dtr_cidadesacador}</h3>
        <h3>Nome Sacador: {nomes.dtr_nomesacador}</h3>
        <h3>Valor: {nomes.dtr_valor}</h3>
        <h3>Saldo: {nomes.dtr_saldo}</h3>
       </div>
       </>
      ))}
      </div>
    </ul>
      </div>
    )
  }
export default Index
