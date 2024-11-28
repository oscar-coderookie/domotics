import React from 'react'

import { motion } from 'motion/react';


const SlideGallery = () => {

    return (
        <div className="gallery">
            <motion.button
                whileHover={{ scale: 5.0 }}
                
                whileTap={{ scale: 4.0 }}
                style={{backgroundColor:'black', width: 100}}
                onHoverStart={() => console.log('hover started!')}
            />
            <motion.title>
                Hello
            </motion.title>
        </div>
    );
};

export default SlideGallery;