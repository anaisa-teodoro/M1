import styles from "../../Styles/plant-card.module.css";
import { Button } from '../Atoms/Button';
import { PriceTag } from '../Atoms/PriceTag';
import { PlantIcon } from '../Atoms/PlantIcon';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';

interface Plant {
  id: string;
  name: string;
  price: number;
  light: 'sun' | 'shade';
  imageUrl: string;
}




interface PlantCardProps {
  plant: Plant;
}

export const PlantCard = ({ plant }: PlantCardProps) => (
  <div className={styles.card}>
    <div className={styles.imageContainer}>
      <img src={plant.imageUrl} alt={plant.name} className={styles.image} />
    </div>

    <div className={styles.header}>
      <PlantIcon size="md" />
      <h2>{plant.name}</h2>
    </div>
    <PriceTag value={plant.price} />
    <div className={styles.light}>
      {plant.light === 'sun' ? <WbSunnyIcon color="warning" /> : <FilterDramaIcon color="primary" />}
      <span>{plant.light === 'sun' ? 'Precisa de Sol' : 'Prefere Sombra'}</span>
    </div>
    <Button variant="primary" text="Comprar" onClick={() => alert(`Adicionado ${plant.name} ao carrinho!`)} />
  </div>
);

