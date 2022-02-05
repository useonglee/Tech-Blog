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

const Theme = {
  position,
  flex,
  color,
};

export default Theme;
