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
                <span className={displayButton ? "d-flex": "d-none"} style={{"position": "absolute", "zIndex": "100", "color": "white"}}>{props.data.product_name}</span>
                <button className={"btn btn-sm btn-primary " + (displayButton ? "d-flex": "d-none")}
                style={{"position": "absolute", "zIndex": "1", "bottom": "5px", "right": "5px"}}
                >test</button>
                <img className="img-slide" src={props.data.image_url} />
                
            </animated.div>
        </React.Fragment>

    )



}


// version 2
{/* <div className="img-slide-div">
                <span className={displayButton ? "d-flex": "d-none"} style={{"position": "absolute", "zIndex": "100", "color": "white"}}>{props.data.product_name}</span>
                <button className={"btn btn-sm btn-primary " + (displayButton ? "d-flex": "d-none")}
                style={{"position": "absolute", "zIndex": "1", "bottom": "10", "right": "10"}}
                >test</button>
                <animated.img 
                onMouseLeave={(e) => {
                    setSpring({
                        scale: 1,
                        boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.62)",
                        zIndex:0
                    })
                    hideButton(e)
                }}
                onMouseEnter={function(e) {
                    setSpring({
                        scale: 1.5,
                        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.42)",
                        zIndex: 10,
                        opacity: 1,
                    })
                    showButton(e)
                }}
                style={{
                    transform: spring.scale.to(
                        s => `scale(${s}) rotateZ(.1deg)`
                    ),
                    boxShadow: spring.boxShadow,
                    zIndex: spring.zIndex
                }}
                className="img-slide" src={props.data.image_url} />
                
            </div> */}




{/* <animated.div className="img-slide-div"
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
                <img className="img-slide" src={props.data.image_url} />
            </animated.div> */}