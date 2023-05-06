export function Filter({ hendleFilterChange }) {
  return (
    <label htmlFor="">
      Find contacts by me
      <input type="text" name="filter" onChange={hendleFilterChange} />
    </label>
  );
}
