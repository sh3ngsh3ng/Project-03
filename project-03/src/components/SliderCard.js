import React, {useState} from "react"
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
        }
    }))

    const [displayButton, setDisplayButton] = useState(false)
    const showButton = (e) => {
        e.preventDefault()
        setDisplayButton(true)
    }

    const hideButton = (e) => {
        e.preventDefault()
        setDisplayButton(false)
    }


    return(
        <React.Fragment>
            
            <animated.div className="img-slide-div"
            onMouseLeave={(e) => {
                setSpring({
                    scale: 1,
                    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.62)",
                    zIndex: 0,
                    immediate: key => key === "zIndex"
                })
                hideButton(e)
            }}
            onMouseEnter={function(e) {
                setSpring({
                    scale: 1.5,
                    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.42)",
                    zIndex: 10,
                    opacity: 1,
                    immediate: key => key === "zIndex"
                })
                showButton(e)
            }}
            style={{
                transform: spring.scale.to(
                    s => `scale(${s}) rotateZ(.1deg)`
                ),
                boxShadow: spring.boxShadow,
                zIndex: spring.zIndex,
            }}
            >
                <div className={"slider-card-title-div " + (displayButton ? "d-flex": "d-none")}>
                    <span className="slider-card-title-text">{props.data.product_name}</span>
                </div>
                <button className={"btn btn-sm slider-card-btn " + (displayButton ? "d-flex": "d-none")}>
                    Go
                </button>
                <img className="img-slide" src={props.data.image_url} />
                
            </animated.div>
        </React.Fragment>

    )

}
