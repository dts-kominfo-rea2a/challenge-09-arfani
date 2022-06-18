import './App.css';
import Header from './components/Header'
import Contact from './components/Contact'

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <div className="content">
        {
          contacts.map((item, i) => {
            return <Contact data={item} key={i} reverse={i % 2 === 0 ? true : false} />
          })
        }
      </div>
    </div>
  );
}

export default App;
