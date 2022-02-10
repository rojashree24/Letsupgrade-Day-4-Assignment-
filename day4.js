var arr=[
    {
        name:"john",
        age:34,
        position:"developer",
        city:"chennai"
    },
     {
        name:"peter",
        age:27,
        position:"senior-developer",
        city:"coimbatore"
    },
     {
        name:"mary",
        age:30,
        position:"freelancer",
        city:"jaipur"
    },
     {
        name:"charles",
        age:29,
        position:"data scientist",
        city:"haryana"
    },
     {
        name:"chales",
        age:40,
        position:"the boss",
        city:"chennai"
    }
]


//using for loop
for(var i=0;i<2;i++){
    console.log(arr[i].position);
}

//using forEach
arr.forEach(function(pos,i){
    if(i<2){
        console.log(pos.city);
    }
})