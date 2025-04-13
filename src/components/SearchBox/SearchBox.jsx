import s from "./SearchBox.module.css";

function SearchBox({ value, onChange }) {
  return (
    <div className={s.searchWrapper}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.searchInput}
        placeholder="Search contacts..."
      />
    </div>
  );
}

export default SearchBox;
