const createInjury = () => {
    const query = `
    CREATE TABLE Injury (
        injury_id INT AUTO_INCREMENT PRIMARY KEY,
        player_id INT NOT NULL,
        date DATE NOT NULL,
        description TEXT,
        FOREIGN KEY (player_id) REFERENCES Players(player_id)
      );
      `
    connection.query(query, (err, results) => {
      if (err) throw err
      console.log('Injury table created')
    })
  }
  
  const getInjury = () => {
    const query = `
      SELECT * FROM Injury;
      `
    connection.query(query, (err, results) => {
      if (err) throw err
      console.log('Injury here')
    })
  }
  
  module.exports = { getInjury, createInjury }
  