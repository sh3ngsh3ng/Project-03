import React from "react"
import "./LoadAnimation.css"
import { motion } from "framer-motion"

export default function LoadAnimation () {




    return (
        <React.Fragment>
            <motion.div className="container" id="load-animation-div"
            animate={{
                scale: 1.2
            }}
            transition={{ 
                repeat: Infinity, 
                duration: 1,
                repeatType: "reverse" 
            }}

            >
                <img id="load-animation-img" src={"https://res.cloudinary.com/dt7n0rbhy/image/upload/v1642524796/awnlqzcwl8pvdbkvgtug.png"}/>
            </motion.div>
        </React.Fragment>
    )


}