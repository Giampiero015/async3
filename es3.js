function promise(id){
    
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(id==true)
                {
                    resolve ("OK");
                }
                else
                {
                    reject ("KO");
                }
            }, 2000);
        });
    
}
promise(true).then((data)=>{console.log(data)})
                .catch((error)=>{console.log(error)});
promise(false).then((data)=>{console.log(data)})
                .catch((error)=>{console.log(error)});