import { useState, useEffect } from 'react';
import { getCharacters } from '../../http';
import { Grid, Typography } from '@mui/material';
import CharacterCard from '../CharacterCard';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the list of characters when the component mounts
    getCharacters()
      .then((response) => {
        setCharacters(response.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Rick and Morty Characters
      </Typography>
      {loading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : (
        <Grid container spacing={2}>
          {characters.map((character) => (
            <Grid item key={character.id} xs={12} sm={6} md={4} lg={3}>
              {/* Adjust the breakpoints (xs, sm, md, lg) as needed */}
              <CharacterCard character={character} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default CharacterList;
