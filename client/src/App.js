import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { useDispatch } from 'react-redux';
import { fetchWelcome } from './redux/user/user.actions';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar.component';
import { Register } from './components/Auth/Register/Register.component';
import { Login } from './components/Auth/Login/login.component';
import { Products } from './pages/Products/Products';
import { Categories } from './pages/Categories/Categories';
import { ProductList } from './components/Products/product.list';
import { DeleteProduct } from './components/Products/product.delete';
import { AddProduct } from './components/Products/product.add';

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWelcome());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/products' component={Products} />
        <Route path='/categories' component={Categories} />
        <Route path='/addProduct' component={AddProduct}></Route>
        <Route path='/deleteProduct' component={DeleteProduct}></Route>
      </Switch>
    </div>
  );
}

export default App;
