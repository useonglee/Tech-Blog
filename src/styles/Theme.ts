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
  positionCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
};

const color = {
  main: '#6667AB',
  blue: '#1890FF',
};

const darkTheme = {
  backgroundColor: '#F8F7F4',
  textColor: '#31302E',
  borderColor: '1px solid #eaeaea',
};

const lightTheme = {
  backgroundColor: '#1E1E22',
  textColor: '#ccc',
  borderColor: '1px solid #2c2d33',
};

const Theme = {
  flex,
  color,
  darkTheme,
  lightTheme,
};

export default Theme;
