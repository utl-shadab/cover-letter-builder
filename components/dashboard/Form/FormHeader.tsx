import { LucideIcon } from "lucide-react";

interface FormHeaderProps {
  icon: LucideIcon;
  title: string;
}

function FormHeader({ icon: Icon, title }: FormHeaderProps) {
  return (
    <div className="flex items-center gap-smallest">
      <Icon className="h-fit w-small pt-0.5" />
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
}

export default FormHeader;
