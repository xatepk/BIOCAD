export const fullScreenContainerStyles = {
  width: '100vw',
  height: '100vh',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
};

export const backgroundStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: 0.3,
  zIndex: -1,
  pointerEvents: 'none',
};

export const formContainerStyles = {
  mt: 5,
};

export const titleStyles = {
  textAlign: 'center',
  fontWeight: 'bold',
  zIndex: 1,
};
