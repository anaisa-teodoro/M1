import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

interface PlantIconProps {
  size: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 20,
  md: 30,
  lg: 40,
};

export const PlantIcon = ({ size }: PlantIconProps) => (
  <LocalFloristIcon style={{ fontSize: sizeMap[size] }} />
);
