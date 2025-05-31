import { StoreLayout } from '../Templates/StoreLayout';
import { PlantGrid } from '../Components/Organisms/PlantGrid';

interface Plant {
  id: string;
  name: string;
  price: number;
  light: 'sun' | 'shade';
  imageUrl: string; 
}



const mockPlants: Plant[] = [
  { id: "1", name: "Suculenta", price: 29.9, light: "sun", imageUrl: "https://th.bing.com/th/id/OIP.fdaDQXCaqKCD9ljm8BFC0AHaHp?rs=1&pid=ImgDetMain" },
  { id: "2", name: "Samambaia", price: 39.9, light: "shade", imageUrl: "https://th.bing.com/th/id/OIP.rPrUpCiVOEv49fuWr5d0JAHaGN?rs=1&pid=ImgDetMain" },
  { id: "3", name: "Orquídea", price: 49.9, light: "shade", imageUrl: "https://www.aarquiteta.com.br/blog/wp-content/uploads/2023/10/como-cuidar-de-orquideas-no-vaso-de-plastico03.jpg" },
  { id: "4", name: "Jiboia", price: 34.9, light: "shade", imageUrl: "https://cdn.awsli.com.br/800x800/1965/1965650/produto/214168415/dsc02900-01-01-kf2i2anv0s.jpg" },
  { id: "5", name: "Cactos", price: 24.9, light: "sun", imageUrl: "https://i.pinimg.com/originals/9b/52/b9/9b52b9b5365c468c6aec96bd22211cf4.jpg" },
  { id: "6", name: "Lavanda", price: 44.9, light: "sun", imageUrl: "https://th.bing.com/th/id/OIP.bsggIXVO61Ez4lHRpJjeNwHaHa?rs=1&pid=ImgDetMain" },
]



export const PlantStore = () => (
  <StoreLayout>
    <PlantGrid plants={mockPlants} />
  </StoreLayout>
);
