console.log("=======task_q============")

function hasProperty(obj: any, key: string): boolean {
    return key in obj;
}

console.log(hasProperty({ davlat: "Uzbekistan", viloyat: "Buxoro" }, "viloyat")); 
console.log(hasProperty({ davlat: "Uzbekistan", viloyat: "Buxoro" }, "tuman")); 