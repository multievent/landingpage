import React from 'react'
import { ButtonBase, Theme, useTheme } from '@mui/material'
import { SxProps } from '@mui/system'

interface Props {
  onClick?: () => void
  width?: string | number
  height?: string | number
  backgroundColor?: string
  disabled?: boolean
  color?: string
  children?: React.ReactNode
  fontSize?: string | number
  className?: string
  borderRadius?: string | number
  style?: React.CSSProperties & SxProps<Theme>
  primary?: boolean
  fontWeight?: string | number
  border?: string
}

export default function Button(props: Props) {
  const {
    onClick,
    disabled,
    style,
    width,
    height,
    fontSize,
    backgroundColor,
    color,
    children,
    borderRadius,
    primary,
    fontWeight,
    className,
  } = props
  const theme = useTheme()
  return (
    <ButtonBase
      className={className}
      onClick={onClick}
      disabled={disabled}
      sx={{
        ...style,
        width: width || 'auto',
        height: height || 54,
        fontSize: fontSize || 22,
        fontWeight: fontWeight || 700,
        border: `2px solid ${theme.palette.common.black}`,
        transition: '.3s',
        borderRadius: borderRadius || '90px',
        backgroundColor: backgroundColor ? backgroundColor : primary ? theme.palette.text.primary : theme.bgColor.bg1,
        color: color ? color : primary ? theme.palette.primary.contrastText : theme.palette.text.primary,
        '&:hover': {
          color: theme.textColor.text2,
          background: theme.palette.common.black,
        },
        '&:disabled': {
          color: 'rgba(0,0,0,0.5)',
          backgroundColor: 'rgba(0,0,0,0.1)',
        },
      }}
    >
      {children}
    </ButtonBase>
  )
}

export function OutlineButton(props: Props) {
  const { onClick, disabled, fontWeight, style, width, fontSize, color, border, height, borderRadius, children } = props

  return (
    <ButtonBase
      onClick={onClick ?? undefined}
      disabled={disabled}
      sx={{
        width: width || '100%',
        border: border || '3px solid #FFFFFF',
        fontSize,
        fontWeight: fontWeight || 500,
        padding: '0 10px',
        height: height || 60,
        transition: 'opacity .3s',
        fontFamily: 'Helvetica Neue',
        background: 'transparent',
        color: color || '#fff',
        borderRadius: borderRadius ?? '5px',
        '&:hover': {
          // color: primary ? theme.palette.primary.contrastText : theme.palette.text.primary,
          opacity: '0.6',
          // background: theme.palette.primary.main,
        },
        ...style,
      }}
    >
      {children}
    </ButtonBase>
  )
}
