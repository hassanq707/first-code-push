import review1 from './review1.jpg'
import review2 from './review2.jpg'
import review3 from './review3.jpg'


function Review(){
return(
    <>
    <div className="review">
              <h2>What people are saying</h2>
              <div className="review-row">
                <div className="review-col">
                      <img src={review1} />
                      <h3>Junaid Qadri</h3>
                      <p>"This is fantastic! Thank so much guys!"</p>
                </div>
                <div className="review-col">
                      <img src={review2} />
                      <h3>Awais Qadri</h3>
                      <p>"Bootstrap is amazing . I've been using it for four months"</p>
                </div>
                <div className="review-col">
                      <img src={review3} />
                      <h3>Jawwad Qadri</h3>
                      <p>"Bootstrap is amazing . I've been using it for four months"</p>
                </div>
              </div>
    </div>
    </>
)
}
export default Review