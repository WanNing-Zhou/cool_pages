# 满天星

在index.css中小球的样式
```css
.balls span{
    width: 20px; /*小宽度*/
    height: 20px;/*小球高度*/
    background-color: hsl(calc(var(--i)*60),100%,70%); /*背景颜色*/
    border-radius: 50%;/*圆角*/
    flex-shrink: 0; /*flex的伸缩*/
    margin: 0 5px;
    animation: animate  infinite linear; /*动画*/
    animation-duration: calc(40s/ var(--t)) ; /*在这里可以修改,小球最大的运行时间 如将 40s 改为 30s*/
}

```

可在index.js中对小球的数量和运动时间进行修改
```javascript
const timeFactor = 20; //将动画时间分为timeFactory份(可以用来控制小球运动时间)
const ballsCount = 100; //生成小球的数量
for (let i = 0; i < ballsCount; i++) {
    let el = document.createElement("span");
    el.style = `--i : ${Math.random() * 360 + 1}; --t : ${Math.random()*timeFactor+1}`;
    balls.append(el);
}

```
