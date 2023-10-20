import PropTypes from 'prop-types'; // Import PropTypes
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CircleIcon } from '@mui/icons-material/Circle';

function CharacterCard({ character }) {
  const isAlive = character.status === 'Alive';
  const statusTextColor = isAlive ? 'green' : 'red';
  return (
    <Card >
      <CardMedia
        sx={{ height: 250 }} image={character.image} title={character.name} />

      <CardContent>
        <Typography variant="body2" align='left'>
          {character.name}
          <br />
          {character.status}
          <br />
          Species: {character.species}
          <br />


          Origin: {character.origin.name}

          <br />

          Location: {character.location.name}
        </Typography>

      </CardContent>
    </Card>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    origin: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CharacterCard;
