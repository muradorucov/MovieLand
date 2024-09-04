import { IoMdClose } from "react-icons/io";

function SearchModal({ elem }) {
  const closeModal = () => {
    elem.current.style.bottom = "800px";
    elem.current.style.top = "-800px";
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
