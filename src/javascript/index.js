document.addEventListener('DOMContentLoaded', () => {
    const dateNode = document.getElementById('footerDate')

    if(dateNode){
        const date = new Date()
        const year = date.getFullYear();
        
        dateNode.innerText = year
    }
})