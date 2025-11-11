import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './bienvenida.css';

const Bienvenida = () => {
const navigate = useNavigate();

return (
    <motion.div
    className="bienvenida-container"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    >
    <h1>¡Bienvenido al PapuDiagnóstico AI!</h1>
    <p>Responde el cuestionario para obtener un diagnóstico aproximado.</p>
    <motion.button
        className="btn-comenzar"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/diagnostico')}
    >
        Comenzar
    </motion.button>
    </motion.div>
);
};

export default Bienvenida;