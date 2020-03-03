//节流
function Throttling(handle, wait) {
    let lastTime = 0;
    return function () {
        let nowTime = new Date().getTime();
        if (nowTime - lastTime > wait) {
            handle.apply(this, arguments);
            lastTime = nowTime;
        }
    }
}
