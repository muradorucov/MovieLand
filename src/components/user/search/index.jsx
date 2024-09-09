import { IoMdClose } from "react-icons/io";

function SearchModal({ elem }) {
  const closeModal = () => {
    elem.current.style.bottom = "100vh";
    elem.current.style.top = "-100vh";
  };
  return (
    <div className="search-modal" ref={elem}>
      <button className="close" onClick={closeModal}>
        <IoMdClose />
      </button>
      <input type="search" placeholder="Axtar....." />
    </div>
  );
}

export default SearchModal;
