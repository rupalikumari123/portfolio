console.log("Script running...")
document.querySelector('.cross').computedStyleMap.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.toggle('sidebarGo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').Style.display='none'
    }
    else{
        
        document.querySelector('.cross').style.dispaly='none'
        setTimeout(() => {
            document.querySelector('.ham').Style.display='inline'

        },400);
    }
})