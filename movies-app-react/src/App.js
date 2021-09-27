import './App.css';
import HomeHeader from './components/homepage/components/header/HeaderHome';
import Movies from './components/homepage/components/Movies/Movies';
import Footer from './components/homepage/components/Footer/Footer';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

function App() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <ErrorBoundary>
        <Movies></Movies>
      </ErrorBoundary>
      <Footer></Footer>
    </>
  );
}

export default App;
