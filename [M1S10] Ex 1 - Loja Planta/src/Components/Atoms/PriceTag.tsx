interface PriceTagProps {
  value: number;
}

export const PriceTag = ({ value }: PriceTagProps) => (
  <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)}</span>
);
