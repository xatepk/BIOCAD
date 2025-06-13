import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Container, Typography, Box } from '@mui/material';
import aminSvg from '@assets/amin.svg';
import theme from '@src/theme';
import { FormInputs } from '@src/types';
import { backgroundStyles, formContainerStyles, fullScreenContainerStyles, titleStyles } from '@src/styles/App.styles';
import { AlignmentForm } from '@src/components/AlignmentForm';
import { AlignmentView } from '@src/components/AlignmentView';

const App: React.FC = () => {
  const [alignment, setAlignment] = useState<FormInputs | null>(null);

  const handleSubmit = (data: FormInputs) => {
    setAlignment(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={fullScreenContainerStyles}>
        <Box component={'img'} src={aminSvg} alt="" sx={backgroundStyles} />
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
