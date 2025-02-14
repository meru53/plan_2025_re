import { motion } from "framer-motion";
import { Center } from "./Center";

export function Example() {
    return (
        <Center>
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#fff",
                    position: "absolute"
                }}
                animate={{
                    left: 10,
                    top: 10,
                    scale: 0.5,
                    rotate: 45,
                    backgroundColor: "#ffd700"
                }}
                transition={{ duration: 1, delay: 0.3 }}
            />
        </Center>
    );
}
