'use client';
import { AnimatePresence, motion } from 'framer-motion';
import ThemeToggle from '@/components/theme/theme-toggle';
import MainNav from '@/components/navigation/main-nav';

const Header = () => {
    return (
        <AnimatePresence className={"mx-16"}>
            <motion.div
                initial={ { x: 0, y: -100, opacity: 0 } }
                animate={ { x: 0, y: 0, opacity: 1 } }
                className="w-screen min-h-[200px] flex flex-wrap justify-center bg-red-500">
                <ThemeToggle/>
                <MainNav/>
            </motion.div>
        </AnimatePresence>
    );
};
export default Header;
