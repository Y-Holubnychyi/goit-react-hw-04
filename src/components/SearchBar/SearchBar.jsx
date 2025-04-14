import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedQuery = input.trim();

    if (trimmedQuery === "") {
      toast.error("Please enter text for image search!");
      return;
    }

    onSubmit(trimmedQuery);
    setInput("");
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={handleChange}
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
