import { ReactNode } from 'react';

interface ButtonProps {
    className?: string;
}

declare const Button: (props: ButtonProps) => ReactNode;

export { Button };
