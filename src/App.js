import { useEffect, useState } from 'react';
import './App.css';
import Summary from './Components/Summery/Summary';
import Users from './Components/Users/Users';
import data from './data/data.json'


function App() {
  const [users, setUsers] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    setUsers(data)
    console.log(data)
  }, [])

  const handleAddProduct = (user) => {
    console.log('added', user);
    const newCart = [...cart, user];
    setCart(newCart);
  }

  return (
    <div className="App">
      <header className='navbar' >
        <h1>UserInfoBook.inc</h1>

        <a href="#">Home</a>
        <br />
        <a href="#">About</a>
        <br />
        <a href="#">Contact Us</a>

      </header>


      <div className='body'>
        <ul className='users' >
          {
            users.map(user => <Users handleAddProduct={handleAddProduct} user={user}  ></Users>)
          }
        </ul>

        <div className="cart-container">
          <Summary cart={cart}></Summary>
        </div>

      </div>


    </div>
  );
}

export default App;