"use strict";
// const small = 1;
// const larg = 2;
// const medium = 3;
//Naming convention is pascalCase
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 1] = "Small";
    Sizes[Sizes["Medium"] = 2] = "Medium";
    Sizes[Sizes["Larg"] = 3] = "Larg";
})(Sizes || (Sizes = {}));
;
var size = Sizes.Larg;
console.log(size);
//# sourceMappingURL=enums.js.map