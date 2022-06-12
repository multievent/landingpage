import { Box, styled } from '@mui/material'

export const CommonContainer = styled(Box)(({ theme, maxWidth, padding }: any) => ({
  width: '100%',
  maxWidth: maxWidth || 1400,
  margin: '0 auto',
  padding: '0 20px',
  [theme.breakpoints.down('sm')]: {
    padding: padding || '0 32px',
    maxWidth: 'unset',
  },
}))
