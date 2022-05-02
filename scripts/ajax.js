function Ajax(url, obj=null){

    return new Promise((res,rej)=>{
        let xhr = new XMLHttpRequest();
        let fd = new FormData()
        xhr.open("POST",url)
        if(obj!=null){
            for(let key in obj){
                fd.append(key,obj[key])
            }
        }else{
            fd=null
        }
        xhr.onload = ()=>{
            if(xhr.status==200){

                res(xhr.response)
            }else{
                rej()
            }

        }
        xhr.error=()=>{
            rej()
        }
        xhr.send(fd)
    })




}
export default Ajax
