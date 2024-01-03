import './App.css'
import Description from './des'
import Main from './main'
import Review from './review'

function App(){
return(
    <>
    <div className="header">
        <nav className="navbar">
            <h3>Logo</h3>
            <button>Sign Up</button>
        </nav>
        <div className='header-text'>
            <h2>Generate more leads with a professional <br />  landing page!</h2>
            <input type='input' placeholder='Email Address'/>
            <button>Submit</button>
        </div>
    </div>
    <Description />
    <Main />
    <Review />
    </>
)
}

export default App

