/*! Built with http://stenciljs.com */
yoname.loadComponents(

/**** module id (dev mode) ****/
"yo-name",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var YoName = /** @class */ (function () {
    function YoName() {
    }
    YoName.prototype.render = function () {
        return (h("p", 0, t("Hello, my name is "),
            this.first, t(" "),
            this.last));
    };
    return YoName;
}());

exports['YO-NAME'] = YoName;
},


/***************** yo-name *****************/
[
/** yo-name: tag **/
"YO-NAME",

/** yo-name: members **/
[
  [ "first", /** prop **/ 1 ],
  [ "last", /** prop **/ 1 ]
],

/** yo-name: host **/
{}

]
)