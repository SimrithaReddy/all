let strStr = function (haystack, needle) {
    let len = needle.length;
    for (let i = 0; i < haystack.length; i++) {
        let str = haystack.slice(i, i + len)
        if (str == needle) {
            return i;
        }
    }
    return -1;
}

let haystack = "sadbutsad";
let needle = "sad"
strStr(haystack, needle);