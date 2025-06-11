export const validateSequence = (sequence: string): string | true => {
  if (!sequence) {
    return 'Поле обязательно для заполнения.';
  }
  const aminoAcidRegex = /^[ARNDCEQGHILKMFPSTWYV-]+$/;
  if (!aminoAcidRegex.test(sequence)) {
    return 'Последовательность содержит недопустимые символы.';
  }
  return true;
};

export const validateEqualLength = (seq1: string, seq2: string): string | true => {
  if (!seq1 || !seq2) {
    return true;
  }
  if (seq1.length !== seq2.length) {
    return 'Длины последовательностей должны совпадать.';
  }
  return true;
};
