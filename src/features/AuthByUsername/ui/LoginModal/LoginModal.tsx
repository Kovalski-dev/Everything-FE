import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import Loader from 'shared/ui/Loader/Loader';
import { LoginFormLazy } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormLazy onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
