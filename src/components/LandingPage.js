import "../App.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="App">
      <h1>Books Corner</h1>
      <div>
        <Link className="link" to="/books">
          Start Reading
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
