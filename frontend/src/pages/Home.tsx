import {Link} from "react-router-dom";
const Home = () => {
  return (
    <div>
        <Link to="/map">
        <button>Share location</button>
        </Link>
    </div>
  )
}

export default Home
