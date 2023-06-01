import { styled } from '../../styles'
import { Text } from '../Text'
import { Box } from '../Box'
import { X } from 'phosphor-react'
import * as ToastPrimitive from '@radix-ui/react-toast'

export const ContentToast = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  position: 'relative',
  padding: '$3 $7 $3 $5',
  width: 'fit-content',
  minWidth: '360px',
})

export const DescriptionToast = styled(Text, {
  color: '$gray200',
})

export const CloseToast = styled(X, {
  position: 'absolute',
  right: 16,
  top: 16,
  cursor: 'pointer',
  color: '$gray200',
  width: 20,
  height: 20,
  fontWeight: 'bold',
})

export const ViewportToast = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: '$8',
  right: '$8',
  listStyle: 'none',
  outline: 'none',
  margin: 0,
  padding: 0,
})
