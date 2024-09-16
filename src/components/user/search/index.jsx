import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router";

function SearchModal({ elem }) {
  const closeModal = () => {
    elem.current.style.bottom = "100vh";
    elem.current.style.top = "-100vh";
  };
  const navigate = useNavigate();

  const searchMovie = (e) => {
    let val = e.target.value.trim();
    if (e.key === "Enter" && val !== "") {
      navigate(`/search/${val}`);
      closeModal()
    }
  };
  return (
    <div className="search-modal" ref={elem}>
      <button className="close" onClick={closeModal}>
        <IoMdClose />
      </button>
      <input type="search" placeholder="Axtar....." onKeyUp={searchMovie} />
    </div>
  );
}

export default SearchModal;
