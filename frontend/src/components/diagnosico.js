import React, { useState } from 'react';
import { Slider, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';
import './diagnostico.css';

const Diagnostico = () => {
const [sintomas, setSintomas] = useState(Array(15).fill(0));

const handleSliderChange = (index, value) => {
    const newSintomas = [...sintomas];
    newSintomas[index] = value;
    setSintomas(newSintomas);
};

const enviarDatos = async () => {
try {
const response = await axios.post('http://localhost:5000/api/diagnostico', { sintomas });
alert(`Resultado: ${response.data.resultado}`);
} catch (error) {
console.error(error);
}
};

return (
<motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
<Typography variant="h4" gutterBottom>
        Diagnóstico de Enfermedades
</Typography>
{sintomas.map((valor, index) => (
        <motion.div
            key={index}
            className="slider-container"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
        >
            <Typography>Síntoma {index + 1}</Typography>
            <Slider
            value={valor}
            min={0}
            max={1}
            step={0.1}
            onChange={(e, val) => handleSliderChange(index, val)}
        />
        </motion.div>
    ))}
        <motion.button
        className="btn-diagnosticar"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={enviarDatos}
        >
        Diagnosticar
    </motion.button>
    </motion.div>
);
};

export default Diagnostico;