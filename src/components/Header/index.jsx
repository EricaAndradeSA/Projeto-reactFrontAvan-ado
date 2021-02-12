import './styles.css';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h1>HAMBURGUERIA CHOPE NA MESA</h1>
        <h2>O céu é o limite</h2>
      </div>

      <nav class="menu">
        <ul >
          <li>Home</li>
          <li>Pedidos</li>
          <li>Lojas</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
