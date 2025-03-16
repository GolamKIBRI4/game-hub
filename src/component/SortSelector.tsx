import { Box } from "lucide-react";

const SortSelector = () => {
  return (
    <div style={{ width: "200px", paddingLeft: "35px" }}>
      <select
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          width: "100%",
        }}
        defaultValue="sort"
      >
        <option value="sort" disabled>
          Sort Game
        </option>
        <option value="Relevence">Relevence</option>
        <option value="Date Added">Date Added</option>
        <option value="Name">Name</option>
        <option value="Release date">Release Date</option>
        <option value="Popularity">Popularity</option>
        <option value="Average Rating">Average Rating</option>
      </select>
    </div>
  );
};

export default SortSelector;
