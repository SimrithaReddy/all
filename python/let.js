let n = 10
let i=0
while (i<n){          //0<10                   1<10          2<10  3<10         4<10
    if(i%3==2){                   //0%3=0     1%3=1       2%3==2     0           4%3==1
        console.log(i)       //2 5 8
    }
    i+=1
}