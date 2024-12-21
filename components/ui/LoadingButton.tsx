import { Loader } from 'lucide-react';

interface LoadingButtonProps {
    size?: string;
    className?: string;
}

export function LoadingIcon({ size, className }: Readonly<LoadingButtonProps>) {
    return <Loader size={size} className={`animate-spin ${className}`} />;
}
