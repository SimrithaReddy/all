let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}



function compareVersions(versions){
    let version1 = versions[0].split(".");
    let version2 = versions[1].split(".");

    let len = Math.max(version1.length, version2.length);
    for(let i=0; i<len; i++){
        version1[i] = version1[i] ? parseInt(version1[i]) : 0;
        version2[i] = version2[i] ? parseInt(version2[i]) : 0;
        if(version1[i] > version2[i]){
            return 1;
        }
        else if(version1[i] < version2[i]){
            return -1;
        }
    }
    return 0;
}


let n = parseInt(readLine());
for(let i=0; i<n; i++){
    let versions = readLine().split(" ");
    console.log(compareVersions(versions))
}