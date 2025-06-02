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
  { id: "1", name: "Suculenta", price: 19.9, light: "sun", imageUrl: "https://cdn.awsli.com.br/600x700/2429/2429322/produto/243925415/img_20241018_113008-tdwtu0bmzb.jpg" },
  { id: "2", name: "Samambaia", price: 45.9, light: "shade", imageUrl: "https://bepage.com.br/wp-content/uploads/2024/10/samambaia-americana-imensa-e-saudavel.webp" },
  { id: "3", name: "Orquídea", price: 39.9, light: "shade", imageUrl: "https://blog.polipet.com.br/wp-content/uploads/2023/11/Orquideas-445x445.jpeg" },
  { id: "4", name: "Jiboia", price: 15.9, light: "shade", imageUrl: "https://images.tcdn.com.br/img/img_prod/350075/kit_de_plantio_jiboia_verde_com_vaso_de_fibra_de_coco_17806_1_a954dfa3340420378e67563f41277872.jpeg" },
  { id: "5", name: "Cactos", price: 10.9, light: "sun", imageUrl: "https://static.wixstatic.com/media/ce80ca_1878f9c252c642d981bb8711c3de3ada~mv2.jpeg/v1/fill/w_568,h_758,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ce80ca_1878f9c252c642d981bb8711c3de3ada~mv2.jpeg" },
  { id: "6", name: "Lavanda", price: 38.9, light: "sun", imageUrl: "https://bepage.com.br/wp-content/uploads/2024/09/Campo-de-Lavanda-5-1024x683.webp" },
]



export const PlantStore = () => (
  <StoreLayout>
    <PlantGrid plants={mockPlants} />
  </StoreLayout>
);
