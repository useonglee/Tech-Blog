const position = {
  positionCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
};

const flex = {
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexHorizontal: {
    display: 'flex',
    justifyContent: 'center',
  },
  flexVertical: {
    display: 'flex',
    alignItems: 'center',
  },
};

const color = {
  main: '#6667AB',
  blue: '#1890FF',
  lightGrey: '#D9D9D9',
  time: '#666666',
};

const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xxl: '1.5rem',
  h1: '3rem',
  h2: '2.5rem',
  h3: '2rem',
};

const Theme = {
  position,
  flex,
  color,
  fontSize,
};

export default Theme;
