import {AnimationContainer} from "./AnimationBoxStyled";
import {useSelector} from "react-redux";
import {selectAnimation} from "../redux/slice/animationSlice";
import {animationsConstants} from "../constants/animationConstants";
const AnimationBox = () => {
    const animation = useSelector(selectAnimation);
    if(animation === animationsConstants.snow) {
        return <AnimationContainer>
            <div className="flakes" aria-hidden="true">
                <div className="flake">❅</div>
                <div className="flake">❆</div>
                <div className="flake">❅</div>
                <div className="flake">❆</div>
                <div className="flake">❅</div>
                <div className="flake">❆</div>
                <div className="flake">❅</div>
                <div className="flake">❆</div>
                <div className="flake">❅</div>
                <div className="flake">❆</div>
                <div className="flake">❅</div>
                <div className="flake">❆</div>
                <div className="flake">❅</div>
                <div className="flake">❆</div>
                <div className="flake">❅</div>
                <div className="flake">❆</div>
                <div className="flake">❅</div>
                <div className="flake">❆</div>
                <div className="flake">❅</div>
                <div className="flake">❆</div>
            </div>
        </AnimationContainer>
    }
    return null;
};

export default AnimationBox;


