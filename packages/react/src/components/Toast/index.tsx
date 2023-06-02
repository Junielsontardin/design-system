import { ReactNode, useState } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { Heading } from '../Heading'
import {
  ContentToast,
  DescriptionToast,
  CloseToast,
  ViewportToast,
} from './styles'

export interface ToastProps {
  children: ReactNode
  titleToast: string
  descriptionToast: string
}

export const Toast = ({
  children,
  titleToast,
  descriptionToast,
}: ToastProps) => {
  const [open, setOpen] = useState(false)

  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <div onClick={() => setOpen(true)}>{children}</div>

      <ToastPrimitive.Root
        className="ToastRoot"
        open={open}
        onOpenChange={setOpen}
      >
        <ContentToast>
          <ToastPrimitive.Title className="ToastTitle" asChild>
            <Heading as="h3" size="sm">
              {titleToast}
            </Heading>
          </ToastPrimitive.Title>
          <ToastPrimitive.Description asChild>
            <DescriptionToast size="sm">{descriptionToast}</DescriptionToast>
          </ToastPrimitive.Description>
          <ToastPrimitive.Action
            className="ToastAction"
            asChild
            altText="Close toast"
          >
            <CloseToast />
          </ToastPrimitive.Action>
        </ContentToast>
      </ToastPrimitive.Root>
      <ViewportToast className="ToastViewport" />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'Toast'
