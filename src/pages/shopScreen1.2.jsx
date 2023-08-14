import { CiSearch } from "react-icons/ci";
import ShopeSearchComponent from "../components/shopSearch/ShopeSearchComponent";
import BottomNavbar from "../components/menu";
import { Link } from "react-router-dom";
const ShopeScreenSearch = () => {
  return (
    <div className="px-4 py-4">
      <div>
        <Link to="/search2">
          <div className="flex items-center space-x-2 bg-base-200 p-2  border border-black w-full">
            <span>
              {" "}
              <CiSearch className="text-xl" />
            </span>
            <input
              type="text"
              placeholder="Ricerca di integratori o cosmetici"
              className="focus:outline-0 placeholder:text-sm font-md placeholder:text-black bg-base-200 w-full"
            />
          </div>
        </Link>
        <div>
          <ShopeSearchComponent />
        </div>
      </div>
      <div>
        <BottomNavbar />
      </div>
    </div>
  );
};

export default ShopeScreenSearch;
