import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, variants, initial, animate, exit }) => {
    return (
        <motion.section
            variants={variants}
            initial={initial}
            animate={animate}
            exit={exit}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;