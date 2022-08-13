// import { useEffect } from "react"
// import { motion } from "framer-motion"
import SquareLoader from "react-spinners/SquareLoader";

export const LoadingScreen = ({ setLoading }) => {
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 4000)
    // });

    // return (
    //     <div className="w-full h-screen bg-black">
    //         <motion.div animate={{ scale: 0.5, transition: { duration: 1 }}}>
    //             <img src="" alt="" />
    //         </motion.div>
    //     </div>
    // );

    return (
        <div className="absolute flex justify-center items-center left-0 right-0 top-[43%]">
            <SquareLoader color="#ffffff" size={50} />
        </div>
    );
}