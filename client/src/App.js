import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Login } from './components/Auth/Login/login.component';
import { Register } from './components/Auth/Register/Register.component';
import { AddCategory } from './components/Categories/category.add';
import { Navbar } from './components/Navbar/Navbar.component';
import { AddProduct } from './components/Products/product.add';
import { Categories } from './pages/Categories/CategoriesPage';
import Home from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { ReportsPage } from './pages/Reports/Reports.Page';
import { fetchWelcome } from './redux/user/user.actions';

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
        <Route path='/addProduct' component={AddProduct} />
        <Route path='/addCategory' component={AddCategory} />
        <Route path='/reports' component={ReportsPage} />
      </Switch>
    </div>
  );
}

export default App;
