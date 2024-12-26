<template>
  <div class="this">
    <div class="perspective">
      <div class="sq"></div>
      <div class="s1"></div>
      <div class="s2"></div>
      <div class="s3"></div>
      <div class="s4"></div>
    </div>
    <div class="text">mrom1 ARTICLES</div>
  </div>
</template>

<style lang="scss" scoped>
  body {
    background: #fff;
    color: white;
  }

  .this {
    width: 200px;
    height: 200px;
    cursor: pointer;
    position: relative;
    text-align: center;
    margin: 50px auto;
  }

  .this .sq {
    width: 60px;
    height: 60px;
    background: #48bb78;
    position: absolute;
    left: 50px;
    top: 50px;
  }

  .this .s1,
  .this .s2,
  .this .s3,
  .this .s4 {
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
  }

  .this .s1 {
    display: inline-block;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 0 solid transparent;
    border-bottom: 50px solid #48bb78;
    position: absolute;
    left: 50px;
    top: 0;
    -webkit-transform: translateX(0) rotateX(-126.87deg);
    -moz-transform: translateX(0) rotateX(-126.87deg);
    -ms-transform: translateX(0) rotateX(-126.87deg);
    -o-transform: translateX(0) rotateX(-126.87deg);
    transform: translateX(0) rotateX(-126.87deg);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
  }

  .this .s2 {
    display: inline-block;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 50px solid #48bb78;
    border-bottom: 0 solid transparent;
    position: absolute;
    bottom: 0;
    left: 50px;
    -webkit-transform: translateX(0) rotateX(126.87deg);
    -moz-transform: translateX(0) rotateX(126.87deg);
    -ms-transform: translateX(0) rotateX(126.87deg);
    -o-transform: translateX(0) rotateX(126.87deg);
    transform: translateX(0) rotateX(126.87deg);
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
  }

  .this .s3 {
    display: inline-block;
    border-left: 0 solid transparent;
    border-right: 50px solid #48bb78;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    position: absolute;
    left: 0;
    top: 50px;
    -webkit-transform: translateX(0) rotateY(126.87deg);
    -moz-transform: translateX(0) rotateY(126.87deg);
    -ms-transform: translateX(0) rotateY(126.87deg);
    -o-transform: translateX(0) rotateY(126.87deg);
    transform: translateX(0) rotateY(126.87deg);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
  }

  .this .s4 {
    display: inline-block;
    border-left: 50px solid #348a58;
    border-right: 0 solid transparent;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    position: absolute;
    right: 0;
    top: 50px;
    -webkit-transform: translateX(0) rotateY(-126.87deg);
    -moz-transform: translateX(0) rotateY(-126.87deg);
    -ms-transform: translateX(0) rotateY(-126.87deg);
    -o-transform: translateX(0) rotateY(-126.87deg);
    transform: translateX(0) rotateY(-126.87deg);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
  }

  .this .text {
    font-family: Helvetica, sans-serif;
    position: absolute;
    left: 53%;
    color: #348a58;
    text-transform: uppercase;
    font-size: 1.2em;
    letter-spacing: 6px;
    bottom: 20px;
    opacity: 1;
    font-weight: 100;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-transition: all 500ms linear 500ms;
    transition: all 500ms linear 500ms;
  }

  .this .perspective {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    perspective: 300px;
    position: absolute;
    left: 50%;
    width: 160px;
    height: 160px;
    margin-left: -80px;
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotateX(60deg) rotate(45deg);
    transform: rotateX(60deg) rotate(45deg);
    -webkit-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
  }

  .this:hover .perspective {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }

  .this:hover .perspective .s1 {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  .this:hover .perspective .s2 {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }

  .this:hover .perspective .s3 {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  .this:hover .perspective .s4 {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
    border-left: 50px solid #48bb78;
  }

  .this:hover .text {
    opacity: 0;
    -webkit-transition: all 100ms linear;
    transition: all 100ms linear;
  }
</style>
