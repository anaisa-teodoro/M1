import styles from '../../Styles/button.module.css';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  text: string;
  onClick: () => void;
}

export const Button = ({ variant, text, onClick }: ButtonProps) => (
  <button className={styles[variant]} onClick={onClick}>
    {text}
  </button>
);
