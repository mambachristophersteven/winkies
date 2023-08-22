import Image from 'next/image';
import styles from './input.module.css';
import Link from 'next/link';


export default function Input( { label, type, name, id, placeholder, labelfor } ) {
  return (
    <div className={styles.container}>
        <label htmlFor={labelfor} className={styles.label}>{label}</label>
        <input type={type} name={name} id={id} placeholder={placeholder} className={styles.input} />
    </div>
  )
};
