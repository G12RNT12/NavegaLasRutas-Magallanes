import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import app from '../firebase/config';

const db = getFirestore(app);

export async function fetchProducts(categoryId) {
  const productsRef = collection(db, 'productos');
  let q;
  if (categoryId) {
    q = query(productsRef, where('category', '==', categoryId));
  } else {
    q = query(productsRef);
  }
  const querySnapshot = await getDocs(q);
  const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return products;
}