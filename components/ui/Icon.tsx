import { FC } from 'react';
import { LucideProps, Icon as LucideIcon } from 'lucide-react';

interface IconProps extends LucideProps {
  name: string;
  size?: number;
  color?: string;
  title?: string;
}

const Icon: FC<IconProps> = ({ name, size = 24, color = 'currentColor', title, ...props }) => {
  return (
    <span role="img" aria-label={title || name} className="inline-flex items-center justify-center">
      <LucideIcon
        icon={name}
        size={size}
        color={color}
        aria-hidden={title ? 'false' : 'true'}
        {...props}
      />
    </span>
  );
};

export default Icon;