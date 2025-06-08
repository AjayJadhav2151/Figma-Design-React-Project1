import { FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import img from "./images/shoe_image.png";
function Main() {
  return (
    <div className="maincontainer">
      <div className="textdiv">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <div>
        <p className="para">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="textbtn">
            <button className="btn1">Shop Now</button>
            <button className="btn2">category</button>
        </div>
        <p className="avtext">Also Available On</p>
        <div className="brandimg">
            {/* <img src="./images/amazon.png" alt="amazon" /> */}
            <FaAmazon/>
            {/* <img src="/Images/flipkart.png" alt="flipkart" /> */}
            <SiFlipkart />
        </div>
        </div>
      </div>
      <div>
        <img src={img} alt="Shoes" />
      </div>
    </div>
  );
}

export default Main;
