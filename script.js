setTimeout(()=>{
    document.querySelector('span').innerHTML=10
    setTimeout(()=>{
        document.querySelector('span').innerHTML=9
        setTimeout(()=>{
            document.querySelector('span').innerHTML=8
            setTimeout(()=>{
                document.querySelector('span').innerHTML=7
                setTimeout(()=>{
                    document.querySelector('span').innerHTML=6
                    setTimeout(()=>{
                        document.querySelector('span').innerHTML=5
                        setTimeout(()=>{
                            document.querySelector('span').innerHTML=4
                            setTimeout(()=>{
                                document.querySelector('span').innerHTML=3
                                setTimeout(()=>{
                                    document.querySelector('span').innerHTML=2
                                    setTimeout(()=>{
                                        document.querySelector('span').innerHTML=1
                                        setTimeout(()=>{
                                            document.querySelector('span').innerHTML="CallBack Hell !!!"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)



