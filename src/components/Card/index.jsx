import './styles.css';
import Foto from '../../../src/asserts/sanduiche.jpg';

const Card = () => {
  return (
    <div className='card'>
      <img style={{width:"250px"}} src={Foto} alt="imagem"/>
      <p>Faça o seu pedido?</p>
      <span>Hamburgueria só para mulheres!!</span>

      <button>Clique aqui</button>
    </div>
  );
};

export default Card;
