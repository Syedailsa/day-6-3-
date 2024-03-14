var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["hunza", "turkey", "makkah", "korea", "paris"];
console.log("original order:", places);
//alphabetic order
console.log("alphabetic order:", __spreadArray([], places, true).sort());
//reverse alphabetic order
console.log("reverse alphabetic order:", __spreadArray([], places, true).sort().reverse());
//reverse order
places.reverse();
console.log(places);
