import { create } from "tailwind-rn";
import styles from "./styles.json";

const { tailwind } = create(styles);

export { tailwind as tw };
