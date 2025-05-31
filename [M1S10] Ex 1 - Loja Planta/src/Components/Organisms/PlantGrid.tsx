import styles from "../../Styles/plant-grid.module.css"; 
import { PlantCard } from '../Molecules/PlantCard';
import { useMediaQuery } from '@mui/material';

interface Plant {
  id: string;
  name: string;
  price: number;
  light: 'sun' | 'shade';
  imageUrl: string; 
}


interface PlantGridProps {
  plants: Plant[];
}

export const PlantGrid = ({ plants }: PlantGridProps) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');

  const columns = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <div className={styles.grid} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
};
