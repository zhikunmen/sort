var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ms2 = (function () {
    function ms2(arr) {
        this.sort(arr);
    }
    ms2.prototype.sort = function (arr) {
        var max = arr[0];
        var second = arr[0];
        arr.forEach(function (f) {
            if (f > max) {
                _a = [f, max], max = _a[0], second = _a[1];
            }
            else if (f < max && f > second) {
                second = f;
            }
            var _a;
        });
        alert(second);
        arr.sort(function (a, b) { return a - b; });
    };
    return ms2;
}());
__reflect(ms2.prototype, "ms2");
