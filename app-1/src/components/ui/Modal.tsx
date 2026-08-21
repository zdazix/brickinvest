import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Dialog, VisuallyHidden } from "radix-ui";
import type { PropsWithChildren } from "react";

type ModalProps = PropsWithChildren<{
  readonly ariaLabel: string;
  readonly className?: string;
  readonly isOpen: boolean;
  readonly onOpenChange?: (open: boolean) => void;
}>;

export const Modal = ({
  ariaLabel,
  children,
  className = "",
  isOpen,
  onOpenChange,
}: ModalProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <Dialog.Root onOpenChange={onOpenChange} open={isOpen}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                animate={{ opacity: 1 }}
                className="fixed inset-0 z-30 bg-foreground/10 backdrop-blur-sm"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.18 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <motion.section
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className={className}
                exit={{ opacity: 0, scale: 0.98, y: reduceMotion ? 0 : 12 }}
                initial={{ opacity: 0, scale: 0.98, y: reduceMotion ? 0 : 16 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.22,
                  ease: "easeOut",
                }}
              >
                <VisuallyHidden.Root asChild>
                  <Dialog.Title>{ariaLabel}</Dialog.Title>
                </VisuallyHidden.Root>
                <VisuallyHidden.Root asChild>
                  <Dialog.Description>{ariaLabel} content</Dialog.Description>
                </VisuallyHidden.Root>
                {children}
              </motion.section>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};
