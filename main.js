import './App.css'
import iphoneImage from './iphone.jpg'
import codingImage from './coding.jpg'

function Main(){
    return(
        <>
        <div className="main">
            <div className="main-cols">
                <div>
                <h2>Fully Responsive Design</h2>
                <p>When you use a theme created by Bootstap you know that the theme will loook great on any device  , whether it's a phone,tablet or desktop</p>
                </div>
            </div>
            <div className="main-cols">
                <img src={iphoneImage} alt='iphone hai baba' />
            </div>
            <div className="main-cols">
            <img src={codingImage} alt='iphone hai baba' />
            </div>
            <div className="main-cols">
                <div>
                <h2>Fully Responsive Design</h2>
                <p>When you use a theme created by Bootstap you know that the theme will loook great on any device  , whether it's a phone,tablet or desktop</p>
                </div>
            </div>

        </div>
        </>
    )
}
export default Main