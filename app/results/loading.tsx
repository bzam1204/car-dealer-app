import { LoadingIcon } from '@/components/ui/LoadingButton';

export default function Loading() {
    return (
        <div className="w-screen h-screen flex justify-center items-start pt-10">
            <LoadingIcon className="text-blue-500" />
        </div>
    );
}
