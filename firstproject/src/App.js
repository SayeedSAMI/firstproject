import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppService from './components/services';
function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader></AppHeader>    
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppService />

      </main>
    
    </div>
  );
}

export default App;
