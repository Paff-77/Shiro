import { m } from 'motion/react'

import { RootPortal } from '../../portal'

export const ModalOverlay = ({ zIndex }: { zIndex?: number }) => (
  <RootPortal>
    <m.div
      id="modal-overlay"
      className="pointer-events-none fixed inset-0 z-[11] bg-zinc-50/80 dark:bg-neutral-900/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ zIndex }}
    />
  </RootPortal>
)
