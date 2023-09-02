export type Size = 'S' | 'M' | 'L';
export type Product = {
    title: String,
    createAt: Date,
    stock: number,
    size?: Size
  }
//colocando la palabra export ya se le indica a TS que se puede usar el elemento

