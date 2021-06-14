import axios from "axios";

const state = {
        
};

const getters = {
};

const mutations = {
    B(){}  , 
};

const actions = {
    download({commit},url){
        console.log("url form nav",url);
    axios
        .get(url)
            .then((response)=>{
                let fileUrl = window.URL.createObjectURL(new Blob([response.data],{type:"application/octet-stream"}))
                // let fileUrl = window.URL.createObjectURL(new Blob(["je suis comme je suis"]))
                console.log("resp",response.data);
                let fileLink = document.createElement("a")
                console.log("file url :",fileUrl);

                fileLink.href = fileUrl 


                fileLink.setAttribute("download","document.jpg")
                document.body.appendChild(fileLink)
                fileLink.click()
                fileLink.remove()

                setTimeout(()=>URL.revokeObjectURL(fileLink.href),7000)
            },error =>{
                    console.log(error);
                })
    commit("B")
}
            
    };
    export default {
        state,
        getters,
        actions,
        mutations
    }