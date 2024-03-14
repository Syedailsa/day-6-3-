let places: string[] = ["hunza", "turkey", "makkah", "korea", "paris"];
console.log("original order:", places);
//alphabetic order
console.log("alphabetic order:", [...places].sort());

//reverse alphabetic order
console.log("reverse alphabetic order:", [...places].sort().reverse());

//reverse order
places.reverse();
console.log("reverse order:", places);