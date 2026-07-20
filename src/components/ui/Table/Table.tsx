import { ReactNode } from 'react';
import styles from './Table.module.css';

export interface TableProps {
  children?: ReactNode;
}

export interface TableRowProps {
  children?: ReactNode;
}

export interface TableHeadProps {
  children?: ReactNode;
}

export interface TableBodyProps {
  children?: ReactNode;
}

export interface TableHeadCellProps {
  children?: ReactNode;
}

export interface TableCellProps {
  children?: ReactNode;
}

export const Table = ({ children }: TableProps) => (
  <table className={styles.table}>{children}</table>
);

export const TableRow = ({ children }: TableRowProps) => (
  <tr className={styles.row}>{children}</tr>
);

export const TableHead = ({ children }: TableHeadProps) => (
  <thead className={styles.head}>{children}</thead>
);

export const TableBody = ({ children }: TableBodyProps) => (
  <tbody className={styles.body}>{children}</tbody>
);

export const TableHeadCell = ({ children }: TableHeadCellProps) => (
  <th className={styles.headCell}>{children}</th>
);

export const TableCell = ({ children }: TableCellProps) => (
  <td className={styles.cell}>{children}</td>
);
