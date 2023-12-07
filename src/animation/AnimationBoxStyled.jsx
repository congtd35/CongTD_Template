import styled from "styled-components";

export const AnimationContainer = styled.div`
  width: 100%;
  height: 100%;

  @-webkit-keyframes flakes-fall {
    0% {top:-10%}
    100% {top:100%}
  }
  @-webkit-keyframes flakes-shake {
    0%,100% {-webkit-transform:translateX(0);transform:translateX(0)}
    50% {-webkit-transform:translateX(80px);transform:translateX(80px)}
  }
  @keyframes flakes-fall {
    0% {top:-10%}
    100% {top:100%}
  }
  @keyframes flakes-shake {
    0%,100%{ transform:translateX(0)}
    50% {transform:translateX(80px)}
  }
  .flake {
    color: #fff;
    font-size: 1em;
    font-family: Arial, sans-serif;
    text-shadow: 0 0 5px #000;
    position:fixed;
    top:-10%;
    z-index:9999;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    cursor:default;
    -webkit-animation-name:flakes-fall,flakes-shake;
    -webkit-animation-duration:10s,3s;
    -webkit-animation-timing-function:linear,ease-in-out;
    -webkit-animation-iteration-count:infinite,infinite;
    -webkit-animation-play-state:running,running;
    animation-name:flakes-fall,flakes-shake;
    animation-duration:10s,3s;
    animation-timing-function:linear,ease-in-out;
    animation-iteration-count:infinite,infinite;
    animation-play-state:running,running;
  }
  .flake:nth-of-type(0){
    left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s
  }
  .flake:nth-of-type(1){
    left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s
  }
  .flake:nth-of-type(2){
    left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s
  }
  .flake:nth-of-type(3){
    left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s
  }
  .flake:nth-of-type(4){
    left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s
  }
  .flake:nth-of-type(5){
    left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s
  }
  .flake:nth-of-type(6){
    left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s
  }
  .flake:nth-of-type(7){
    left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s
  }
  .flake:nth-of-type(8){
    left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s
  }
  .flake:nth-of-type(9){
    left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s
  }
  .flake:nth-of-type(10){
    left:25%;-webkit-animation-delay:2s,0s;animation-delay:2s,0s
  }
  .flake:nth-of-type(10){
    left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s
  }
  .flake:nth-of-type(11){
    left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s
  }
  .flake:nth-of-type(12){
    left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s
  }
  .flake:nth-of-type(13){
    left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s
  }
  .flake:nth-of-type(14){
    left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s
  }
  .flake:nth-of-type(15){
    left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s
  }
  .flake:nth-of-type(16){
    left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s
  }
  .flake:nth-of-type(17){
    left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s
  }
  .flake:nth-of-type(18){
    left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s
  }
  .flake:nth-of-type(19){
    left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s
  }
  .flake:nth-of-type(20){
    left:25%;-webkit-animation-delay:2s,0s;animation-delay:2s,0s
  }
`;