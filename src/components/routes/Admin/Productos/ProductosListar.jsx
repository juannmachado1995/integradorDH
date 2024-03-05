import React, { useEffect, useContext } from 'react'
import './ProductosListar.css'
import { useState } from 'react';
import axios from 'axios';
import { ContextGlobal, urlBackend } from '../../../utils/global.context';

const ProductosListar = () => {
    const {contexto, setContexto} = useContext(ContextGlobal);

    const [showAddForm, setShowAddForm] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null); // Nuevo estado para mantener el producto actual
    const [productos, setProductos] = useState([]);

    /*Se crea este array de prueba solo para probar el renderizado, por favor reemplazar por el 
    consumo del back, creo que ya estaba, no lo borré, solo lo comentarie por que no tuve tiempo de
    bajarlo y montarlo */
    
    useEffect(()=>{
        const ciclas = [{
            nombreBici: 'Haibike Bicicleta Eléctrica Adventr FS 9',
            imgBici: 'https://i.imgur.com/OFuVyJt.png'
          },{
            nombreBici: 'Wilier Bicicleta Eléctrica Triestina Hybrid GRX812',
            imgBici: 'https://i.imgur.com/oO2sILV.png'
          }
          ,
          {
            nombreBici: 'Bianchi Bicicleta Eléctrica E-Spillo Classic G Altus',
            imgBici: 'https://i.imgur.com/370InV6.png'
          }
          ,
          {
            nombreBici: 'Haibike Bicicleta Eléctrica MTB Alltrail',
            imgBici: 'https://i.imgur.com/IccTsb0.png'
          }
          ,
          {
            nombreBici: 'Youin Bicicleta Eléctrica Plegable Dakar',
            imgBici: 'https://i.imgur.com/kSLWt3a.png'
          }
          ,
          {
            nombreBici: 'Winora Bicicleta Eléctrica Tria X9 Wave',
            imgBici: 'https://i.imgur.com/UfRt2hz.png'
          }
          ,
          {
            nombreBici: 'Bianchi Bicicleta Eléctrica Gravel E-Impulso Ultegra RD-R8000 2021',
            imgBici: 'https://i.imgur.com/Ou8g9TW.png'
          }
          ,
          {
            nombreBici: 'Montana Bikes Bicicleta Eléctrica Carretera Gavia',
            imgBici: 'https://i.imgur.com/fNgTMbJ.png'
          }];
        const newProductos = ciclas.map(
            (item, idx) =>{
                return {
                    id: idx + 1, 
                    nombre: item.nombreBici, 
                    descripcion: 'Alguna descripción',
                    imagenes: [{
                        id: 1,
                        urlImg: item.imgBici
                    }]
                }
            }
        );
        setProductos(newProductos);
    }
    ,[]);
    
    /*
    const handleAddClick = () => {
        setShowAddForm(!showAddForm);
        setCurrentProduct(null); // Reiniciar el producto actual al abrir el formulario
        console.log('showAddForm después de handleListClick:', showAddForm);
    };

    const handleListClick = async () => {
        try {
        const response = await axios.get('http://localhost:8080/productos/listar');
        console.log('Productos obtenidos:', response.data);
        setProductos(response.data);
        } catch (error) {
        console.error('Error al obtener productos:', error);
        }
    };

    useEffect(() => {
        const fetchProductos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/productos/listar');
            console.log('Productos obtenidos:', response.data);
            setProductos(response.data);
        } catch (error) {
            console.error('Error al obtener productos:', error);
        }
        };

        fetchProductos();
    }, []); // Se ejecuta solo una vez al montar el componente
    */

    return (
        <div className="productos-container">
            <h1>Listado de Productos</h1>
            <ul className="productos-list">
                {productos.map(producto => (

                <li key={producto.id} className="producto-item">

                    <div className=''>
                    <h2 className="producto-nombre">NOMBRE PRODUCTO: {producto.nombre}</h2>
                    <p className="producto-descripcion">DESCRIPCION: {producto.descripcion}</p>
                    <p className="producto-id">ID PRODUCTO: {producto.id}</p>
                    </div>
                    <ul className="imagenes-list">
                    {producto.imagenes.map(imagen => (
                        <li key={imagen.id} className="imagen-item">
                        <img src={imagen.urlImg} alt={imagen.titulo} className="imagen" />
                        </li>
                    ))}
                    </ul>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductosListar