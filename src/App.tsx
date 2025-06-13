import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Container, Typography, Box } from '@mui/material';
import theme from './theme';
import { FormInputs } from './types';
import { AlignmentForm } from './components/AlignmentForm';
import { AlignmentView } from './components/AlignmentView';
import { titleStyles, fullScreenContainerStyles, backgroundStyles, formContainerStyles } from './styles/App.styles';

const App: React.FC = () => {
  const [alignment, setAlignment] = useState<FormInputs | null>(null);

  const handleSubmit = (data: FormInputs) => {
    setAlignment(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={fullScreenContainerStyles}>
        <Box sx={backgroundStyles} />
        <Container maxWidth="sm" sx={formContainerStyles}>
          <Typography variant="h5" sx={titleStyles} gutterBottom>
            Визуализация выравнивания аминокислотных последовательностей
          </Typography>

          <AlignmentForm onSubmit={handleSubmit} />

          {alignment && <AlignmentView alignment={alignment} />}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
