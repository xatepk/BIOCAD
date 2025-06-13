import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import { AlignmentView } from '@src/components/AlignmentView';
import { validateEqualLength, validateSequence } from '@src/validation/alignmentValidation';
import { FormInputs } from '@src/types';

type AlignmentFormProps = {
  onSubmit?: SubmitHandler<FormInputs>;
};

export const AlignmentForm: React.FC<AlignmentFormProps> = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<FormInputs>({
    mode: 'onChange'
  });

  const [alignmentResult, setAlignmentResult] = useState<FormInputs | null>(null);

  const seq1 = watch('seq1') || '';
  const seq2 = watch('seq2') || '';

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setAlignmentResult(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{minHeight: 300}}>
      <Controller
        name="seq1"
        control={control}
        rules={{
          validate: (value) => {
            const sequenceError = validateSequence(value);
            const lengthError = validateEqualLength(value, seq2);
            return sequenceError === true ? lengthError : sequenceError;
          }
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Последовательность 1"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.seq1}
            helperText={errors.seq1?.message || ''}
          />
        )}
      />

      <Controller
        name="seq2"
        control={control}
        rules={{
          validate: (value) => {
            const sequenceError = validateSequence(value);
            const lengthError = validateEqualLength(seq1, value);
            return sequenceError === true ? lengthError : sequenceError;
          }
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Последовательность 2"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.seq2}
            helperText={errors.seq2?.message || ''}
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary" disabled={!isValid} sx={{ mt: 2 }}>
        Выравнять
      </Button>

      {alignmentResult && <AlignmentView alignment={alignmentResult} />}
    </Box>
  );
};
