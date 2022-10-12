import Container from "./styled-components/Container";
import Typography from "./styled-components/Typography";
import PropTypes from 'prop-types'

export default function Hints({ hints_array }) {
  return hints_array.length > 0 
    ? <Container hint>
        {hints_array.map((item,i) => 
          <Typography key={i} hint>
            <span>{Object.entries(item)[0][0] + ": "}</span>
            {Object.entries(item)[0][1]}
          </Typography>)} 
      </Container>   
    : null   
}

Hints.propTypes = {
  hints_array: PropTypes.array,
}