import classes from './styles/App.module.css'
import Header from './components/Header';

function App() {
    return (
        <div className={classes.app}>
            <Header/>
        </div>
    );
}

export default App;
