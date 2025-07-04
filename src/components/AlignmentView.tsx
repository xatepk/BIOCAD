import React, { useEffect, useState } from 'react';
import { Box, Snackbar } from '@mui/material';
import { FormInputs } from '@src/types';
import {
  backgroundRowStyles,
  boxStyles,
  CHAR_WIDTH,
  chunkContainerStyles,
  preStyles
} from '@src/styles/AlignmentView.styles';
import { aminoAcidColors } from '@src/constants/aminoAcidColors';

type Props = {
  alignment: FormInputs;
};

export const AlignmentView: React.FC<Props> = ({ alignment }) => {
  const [copied, setCopied] = useState(false);
  const [chunkSize, setChunkSize] = useState(1);

  const { seq1, seq2 } = alignment;

  const calculateChunkSize = () => {
    const screenWidth = window.innerWidth;
    const charsPerRow = Math.floor((screenWidth - 20) / CHAR_WIDTH);
    setChunkSize(Math.max(1, charsPerRow));
  };

  useEffect(() => {
    calculateChunkSize();
    window.addEventListener('resize', calculateChunkSize);
    return () => window.removeEventListener('resize', calculateChunkSize);
  }, []);

  const handleCopy = async () => {
    const selection = window.getSelection();
    if (selection && selection.toString()) {
      try {
        const cleaned = selection.toString().replace(/[\s\u200B]+/g, '');
        await navigator.clipboard.writeText(cleaned);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      } catch (err) {
        console.error('Copy failed', err);
      }
    }
  };

  const renderBackgroundRow = (sequence: string, compareSequence?: string) => {
    return (
      <Box sx={backgroundRowStyles}>
        {sequence.split('').map((char, idx) => {
          const bgColor = compareSequence
            ? char !== compareSequence[idx]
              ? aminoAcidColors[char] || 'transparent'
              : 'transparent'
            : aminoAcidColors[char] || 'transparent';
          return (
            <Box
              key={`${char}-${idx}`}
              sx={{
                ...boxStyles,
                backgroundColor: bgColor
              }}
            />
          );
        })}
      </Box>
    );
  };

  const chunks = [];
  for (let i = 0; i < seq1.length; i += chunkSize) {
    chunks.push(i);
  }

  return (
    <Box mt={4} sx={{ position: 'relative', fontFamily: 'monospace' }} onMouseUp={handleCopy}>
      {chunks.map((start) => {
        const chunk1 = seq1.slice(start, start + chunkSize);
        const chunk2 = seq2.slice(start, start + chunkSize);
        return (
          <Box key={start} sx={chunkContainerStyles(chunkSize)}>
            {renderBackgroundRow(chunk1)}
            {renderBackgroundRow(chunk2, chunk1)}

            <Box component="pre" sx={preStyles}>
              {chunk1 + '\n' + chunk2}
            </Box>
          </Box>
        );
      })}
      <Snackbar open={copied} message="Скопировано!" />
    </Box>
  );
};

