//防抖
function Debounce(handle, delay) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        let _this = this;
        let _arg = arguments;

        timer = setTimeout(function () {
            handle.apply(_this, _arg);
        }, delay);
    }
}
