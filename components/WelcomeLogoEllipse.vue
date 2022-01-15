<template>
  <div class="wrap">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</template>

<style lang="scss" scoped>
body {
  height: 100vh;

  /* 
  background: #ecd7bf; 
  */
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrap {
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  -webkit-perspective: 4000px;
  -moz-perspective: 4000px;
  perspective: 4000px;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.circle {
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  opacity: 0;
  width: 200px;
  height: 200px;
  border: 2px solid #48bb78;
  border-radius: 150px;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: spin 30s ease-in-out alternate infinite;
  -moz-animation: spin 30s ease-in-out alternate infinite;
  animation: spin 30s ease-in-out alternate infinite;
}
.circle:nth-of-type(1) {
  -webkit-animation-delay: 500ms;
  -moz-animation-delay: 500ms;
  animation-delay: 500ms;
}
.circle:nth-of-type(2) {
  -webkit-animation-delay: 1000ms;
  -moz-animation-delay: 1000ms;
  animation-delay: 1000ms;
}
.circle:nth-of-type(3) {
  -webkit-animation-delay: 1500ms;
  -moz-animation-delay: 1500ms;
  animation-delay: 1500ms;
}
.circle:nth-of-type(4) {
  -webkit-animation-delay: 2000ms;
  -moz-animation-delay: 2000ms;
  animation-delay: 2000ms;
}
.circle:nth-of-type(5) {
  -webkit-animation-delay: 2500ms;
  -moz-animation-delay: 2500ms;
  animation-delay: 2500ms;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotateY(0deg) rotateX(0deg);
    opacity: 1;
  }
  25% {
    -webkit-transform: rotateY(180deg) rotateX(360deg);
  }
  50% {
    -webkit-transform: rotateY(540deg) rotateX(540deg);
  }
  75% {
    -webkit-transform: rotateY(720deg) rotateX(900deg);
  }
  100% {
    -webkit-transform: rotateY(900deg) rotateX(1080deg);
    opacity: 1;
  }
}
@-moz-keyframes spin {
  0% {
    -moz-transform: rotateY(0deg) rotateX(0deg);
    opacity: 1;
  }
  25% {
    -moz-transform: rotateY(180deg) rotateX(360deg);
  }
  50% {
    -moz-transform: rotateY(540deg) rotateX(540deg);
  }
  75% {
    -moz-transform: rotateY(720deg) rotateX(900deg);
  }
  100% {
    -moz-transform: rotateY(900deg) rotateX(1080deg);
    opacity: 1;
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotateY(0deg) rotateX(0deg);
    -moz-transform: rotateY(0deg) rotateX(0deg);
    -ms-transform: rotateY(0deg) rotateX(0deg);
    -o-transform: rotateY(0deg) rotateX(0deg);
    transform: rotateY(0deg) rotateX(0deg);
    opacity: 1;
  }
  25% {
    -webkit-transform: rotateY(180deg) rotateX(360deg);
    -moz-transform: rotateY(180deg) rotateX(360deg);
    -ms-transform: rotateY(180deg) rotateX(360deg);
    -o-transform: rotateY(180deg) rotateX(360deg);
    transform: rotateY(180deg) rotateX(360deg);
  }
  50% {
    -webkit-transform: rotateY(540deg) rotateX(540deg);
    -moz-transform: rotateY(540deg) rotateX(540deg);
    -ms-transform: rotateY(540deg) rotateX(540deg);
    -o-transform: rotateY(540deg) rotateX(540deg);
    transform: rotateY(540deg) rotateX(540deg);
  }
  75% {
    -webkit-transform: rotateY(720deg) rotateX(900deg);
    -moz-transform: rotateY(720deg) rotateX(900deg);
    -ms-transform: rotateY(720deg) rotateX(900deg);
    -o-transform: rotateY(720deg) rotateX(900deg);
    transform: rotateY(720deg) rotateX(900deg);
  }
  100% {
    -webkit-transform: rotateY(900deg) rotateX(1080deg);
    -moz-transform: rotateY(900deg) rotateX(1080deg);
    -ms-transform: rotateY(900deg) rotateX(1080deg);
    -o-transform: rotateY(900deg) rotateX(1080deg);
    transform: rotateY(900deg) rotateX(1080deg);
    opacity: 1;
  }
}
</style>
