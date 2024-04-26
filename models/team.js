const createTeam = () => {
  const query = `
  CREATE TABLE Teams (
    team_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    coach VARCHAR(255) NOT NULL,
    captain_id INT,
    FOREIGN KEY (captain_id) REFERENCES Players(player_id)
  );
    `
  connection.query(query, (err, results) => {
    if (err) throw err
    console.log('teams table created')
  })
}

const getTeams = () => {
  const query = `
    SELECT * FROM Teams;
    `
  connection.query(query, (err, results) => {
    if (err) throw err
    console.log('Teams here')
  })
}

module.exports = { getTeams, createTeam }
