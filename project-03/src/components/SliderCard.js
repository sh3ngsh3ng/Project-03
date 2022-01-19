import React from "react"
import { useSpring, animated } from 'react-spring'



export default function SliderCard(props) {

    const [spring, setSpring] = useSpring(() => ({
        scale: 1,
        boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.62)",
        zIndex: 0,
        config: {
            mass: 2,
            tension: 170,
            friction: 12
        },
        immediate: key => key === "zIndex"
    }))

    return(
        <React.Fragment>
            <animated.div className="img-slide-div"
            onMouseLeave={() => {
                setSpring({
                    scale: 1,
                    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.62)",
                    zIndex:0
                })
            }}
            onMouseEnter={() => {
                setSpring({
                    scale: 1.5,
                    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.42)",
                    zIndex: 10,
                    opacity: 1,
                })
            }}
            style={{
                transform: spring.scale.to(
                    s => `scale(${s}) rotateZ(.1deg)`
                ),
                boxShadow: spring.boxShadow,
                zIndex: spring.zIndex
            }}>
                <img
                
                className="img-slide" src={props.data.image_url} />
            </animated.div>
        </React.Fragment>

    )



}