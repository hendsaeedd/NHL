const addPlayer = () => {
  const query = `
    CREATE TABLE Players (
        player_id INT AUTO_ EXPERIMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        position VARCHAR(255) NOT NULL,
        skill_level INT NOT NULL
      );
      `
  connection.query(query, (err, results) => {
    if (err) throw err
    console.log('players table created')
  })
}

const getPlayers = () => {
  const query = `
      SELECT * FROM Players
      `
  connection.query(query, (err, results) => {
    if (err) throw err
    console.log('players created')
  })
}

module.exports = { getPlayers, addPlayer }
