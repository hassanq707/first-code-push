
import ulloImage from './ullo.jpg';

function Description() {
  return (
    <div className="des">
      <div className="des-row">
        <div className="des-col">
          <img src ={ulloImage} alt="Description of the image" className='img'/>
          <h2>Hassan Qadri</h2>
          <p>My name is hassan qadri and i am not a terrorist</p>
        </div>
        <div className="des-col">
          <img src ={ulloImage} alt="Description of the image" className='img'/>
          <h2>Hassan Qadri</h2>
          <p>My name is hassan qadri and i am not a terrorist</p>
        </div>
        <div className="des-col">
          <img src ={ulloImage} alt="Description of the image" className='img'/>
          <h2>Hassan Qadri</h2>
          <p>My name is hassan qadri and i am not a terrorist</p>
        </div>
      </div>
    </div>
  );
}

export default Description;
