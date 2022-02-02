import './styles.css';

type Props = {
  perfil: string;
  seguidores: string;
  nome: string;
  localidade: string;
  imagem: string;
};

const ResultCard = ({
  perfil,
  seguidores,
  nome,
  localidade,
  imagem,
}: Props) => {
  return (
    <div className="container result-container">
      <div className="result-img">
        <img src={imagem} alt={nome} />
      </div>
      <div className="result-information">
        <h3 className="text-primary" >Informações</h3>

        <p className="result-perfil">
          <b>Perfil: </b> {perfil}
        </p>
        <p className="result-perfil">
          <b>Seguidores: </b> {seguidores}
        </p>
        <p className="result-perfil">
          <b>Localidade: </b> {localidade}
        </p>
        <p className="result-perfil">
          <b>Nome: </b> {nome}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
