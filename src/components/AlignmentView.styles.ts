export const CHAR_WIDTH = 16;
export const CHAR_HEIGHT = 24;

export const backgroundRowStyles = {
  display: 'flex',
  flexWrap: 'wrap'
};

export const boxStyles = {
  width: CHAR_WIDTH,
  height: CHAR_HEIGHT,
  userSelect: 'none',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'monospace',
  fontSize: 16,
  lineHeight: `${CHAR_HEIGHT}px`,
  letterSpacing: '0.1em',
  fontVariant: 'tabular-nums'
};

export const chunkContainerStyles = (chunkSize: number) => ({
  mb: 1,
  position: 'relative',
  userSelect: 'text',
  fontFamily: 'monospace',
  fontSize: 16,
  lineHeight: `${CHAR_HEIGHT}px`,
  letterSpacing: '0.1em',
  whiteSpace: 'pre-wrap',
  width: CHAR_WIDTH * chunkSize,
  height: CHAR_HEIGHT * 2
});

export const preStyles = {
  margin: 0,
  padding: 0,
  fontSize: 'inherit',
  lineHeight: 'inherit',
  letterSpacing: '0.41em',
  fontVariant: 'tabular-nums',
  color: 'transparent',
  textShadow: '0 0 0 black',
  position: 'absolute',
  top: 0,
  left: 0,
  userSelect: 'text',
  pointerEvents: 'auto',
  whiteSpace: 'pre-wrap',
  width: '100%',
  height: '100%'
};
