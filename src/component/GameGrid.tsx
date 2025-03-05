import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, errors } = useGames();
  return (
    <div>
      <ul>
        {errors && <p>{errors}</p>}
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
