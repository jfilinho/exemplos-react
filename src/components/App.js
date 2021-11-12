import "bootstrap/dist/css/bootstrap.min.css";
import { Contact } from "./Contact";
import { ExpPro } from "./ExpPro";
import { Header } from "./Header";

function App() {
  const experiencies = [
    { company: "Aguia Branca", description: "Estagiario do financeiro" },
    {
      company: "Faculdade Ruy Barbosa",
      description: "Consultor de Relacionamento",
    },
    { company: "Gerdau", description: "Estagiario de RH" },
  ];

  return (
    <div className="App">
      <Header
        img="https://conteudo.imguol.com.br/c/entretenimento/70/2020/08/06/o-cantor-reginaldo-rossi-recife-14-de-fevereiro-de-1943--recife-20-de-dezembro-de-2013-1596747793411_v2_450x337.jpg"
        adress="Rua Vinte, nº21. São Paulo - SP"
        social="@Reginaldo_ReiDoBrega"
      />

      {experiencies.map((currentExp) => {
        return (
          <ExpPro
            company={currentExp.company}
            description={currentExp.description}
          />
        );
      })}

      <Contact email="alexandre@teste.com" />
    </div>
  );
}

export default App;
