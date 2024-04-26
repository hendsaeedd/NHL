const createGames = () => {
  const query = `
    CREATE TABLE Games (
        game_id INT AUTO_INCREMENT PRIMARY KEY,
        host_team_id INT NOT NULL,
        guest_team_id INT NOT NULL,
        date DATE NOT NULL,
        score VARCHAR(255) NOT NULL,
        FOREIGN KEY (host_team_id) REFERENCES Teams(team_id),
        FOREIGN KEY (guest_team_id) REFERENCES Teams(team_id)
      );
      `
  connection.query(query, (err, results) => {
    if (err) throw err
    console.log('Games table created')
  })
}

const getGames = () => {
  const query = `
      SELECT * FROM Games;
      `
  connection.query(query, (err, results) => {
    if (err) throw err
    console.log('Games here')
  })
}

module.exports = { getGames, createGames }
