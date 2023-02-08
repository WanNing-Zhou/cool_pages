const balls = document.getElementById('balls');

/**
 *  --i : 颜色范围
 *  --t : 时间范围
 */

const timeFactor = 20; //将动画时间分为timeFactory份(可以用来控制小球运动时间)
const ballsCount = 100; //生成小球的数量
for (let i = 0; i < ballsCount; i++) {
    let el = document.createElement("span");
    el.style = `--i : ${Math.random() * 360 + 1}; --t : ${Math.random()*timeFactor+1}`;
    balls.append(el);
}
