// src/services/firebase.js
import { collection, getDocs, getDoc, doc, addDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

export const getProducts = async () => {
  try {
    console.log('🔍 Iniciando consulta a colección "products"...');  // Debug
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    console.log(`📊 Snapshot: ${snapshot.docs.length} documentos encontrados`);  // Debug
    
    if (snapshot.empty) {
      console.warn('⚠️ Colección "products" está vacía o no existe.');
    }
    
    const products = snapshot.docs.map(doc => ({ 
      id: doc.id, 
      ...doc.data() 
    }));
    console.log('✅ Productos mapeados:', products);  // Muestra los datos
    return products;
  } catch (error) {
    console.error('❌ Error en getProducts:', error);  // Error detallado
    throw error;  // Re-lanza para que ItemListContainer lo capture
  }
};

// Similar para getProductsByCategory si usas categorías
export const getProductsByCategory = async (categoryId) => {
  try {
    console.log(`🔍 Buscando productos en categoría: ${categoryId}`);
    const productsRef = collection(db, 'products');
    const q = query(productsRef, where('category', '==', categoryId));
    const snapshot = await getDocs(q);
    console.log(`📊 Encontrados ${snapshot.docs.length} en categoría ${categoryId}`);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('❌ Error en getProductsByCategory:', error);
    throw error;
  }
};

// Resto de funciones (getProductById, createOrder) sin cambios por ahora
export const getProductById = async (id) => {
  try {
    const productRef = doc(db, 'products', id);
    const snapshot = await getDoc(productRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error('❌ Error en getProductById:', error);
    throw error;
  }
};

export const createOrder = async (orderData) => {
  try {
    const ordersRef = collection(db, 'orders');
    const docRef = await addDoc(ordersRef, orderData);
    return docRef.id;
  } catch (error) {
    console.error('❌ Error en createOrder:', error);
    throw error;
  }
};