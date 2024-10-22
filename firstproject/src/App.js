import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppService from './components/services';
import AppWorks from './components/works';
import AppTeams from './components/teams';
import AppTestimonials from './components/testimonials';

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
        <AppWorks />
        <AppTeams />
        <AppTestimonials />


      </main>
    
    </div>
  );
}

export default App;
