import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Container, Typography } from '@mui/material';
import theme from './theme';
import { FormInputs } from './types';
import { AlignmentForm } from './components/AlignmentForm';
import { AlignmentView } from './components/AlignmentView';
import { titleStyles } from './styles/App.styles';

const App: React.FC = () => {
  const [alignment, setAlignment] = useState<FormInputs | null>(null);

  const handleSubmit = (data: FormInputs) => {
    setAlignment(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
        <Typography variant="h5" sx={titleStyles} gutterBottom>
          Визуализация выравнивания аминокислотных последовательностей
        </Typography>

        <AlignmentForm onSubmit={handleSubmit} />

        {alignment && <AlignmentView alignment={alignment} />}
      </Container>
    </ThemeProvider>
  );
};

export default App;
