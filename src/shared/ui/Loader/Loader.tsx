import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';
import { memo } from 'react';

interface LoaderProps {
  className?: string;
}

export const Loader = memo(({ className }: LoaderProps) => (
  <div className={classNames('lds-roller', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
));

export default Loader;
