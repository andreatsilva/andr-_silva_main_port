const { useEffect, useRef } = require('react');
import { motion } from 'framer-motion';

const useScrollAnimation = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (ref.current) {
            const { top } = ref.current.getBoundingClientRect();
            if (top < window.innerHeight) {
                setIsVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { ref, isVisible };
};

export default useScrollAnimation;