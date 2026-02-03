interface Props extends React.InputHTMLAttributes<HTMLAnchorElement> {
    label: string;
}

const AuthInput = ({ label, ...props }: Props) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">{label}</label>
            <input
            {...props}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" />
        </div>
    );
}