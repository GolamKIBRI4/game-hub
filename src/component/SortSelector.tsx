interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ onSelectSortOrder }: Props) => {
  return (
    <div style={{ width: "200px", paddingTop: "35px" }}>
      <select
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          width: "100%",
        }}
        defaultValue="sort"
        onChange={(event) => {
          onSelectSortOrder(event.target.value);
        }}
      >
        <option value="sort" disabled>
          Sort Game
        </option>

        <option value="-added">Date Added</option>
        <option value="name">Name</option>
        <option value="-released">Release Date</option>
        <option value="-metacritic">Popularity</option>
        <option value="-rating">Average Rating</option>
      </select>
    </div>
  );
};

export default SortSelector;
