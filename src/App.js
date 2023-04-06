import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './AppHeader';
import Page404 from './Page404';
import PageHome from './PageHome.js';
import FalsePosition from './components/method/FalsePosition.js';
import Sample from './components/method/Sample.js';
import NewtonRaphson from './components/method/NewtonRaphson.js';
import OnePoint from './components/method/OnePoint';
import Secant from './components/method/Secant';
import Lagrange from './components/Interpolation/Lagrange';
import Spline from './components/Interpolation/Spline';
import Conjugate from './components/matrix/Conjugate';
import Cramer from './components/matrix/Cramer';
import Gauss from './components/matrix/Gauss';
import Jacobi from './components/matrix/Jacobi';
import Seidel from './components/matrix/Seidel';
import Polynomial from './components/regression/Polynomial';
import Regression from './components/regression/Regression';

function App() {
	console.log(window.location.pathname);
  return (
	
    <div className="div">
      <AppHeader />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="sample" element={<Sample />} />
        <Route path="falseposition" element={<FalsePosition />} />
        <Route path="newtonraphson" element={<NewtonRaphson />} />
        <Route path="onepoint" element={<OnePoint />} />
        <Route path="secant" element={<Secant />} />
        <Route path="lagrange" element={<Lagrange />} />
        <Route path="spline" element={<Spline />} />
        <Route path="conjugate" element={<Conjugate />} />
        <Route path="cramer" element={<Cramer />} />
        <Route path="gauss" element={<Gauss />} />
        <Route path="jacobi" element={<Jacobi />} />
        <Route path="seidel" element={<Seidel />} />
        <Route path="polynomial" element={<Polynomial />} />
        <Route path="regression" element={<Regression />} />
        <Route path="*" element={<Page404 />} />
		
      </Routes>
    </div>
	
  );
}

export default App;