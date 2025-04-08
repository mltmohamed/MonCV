function retour(){
    window.location.href = 'index.html';
}

function changerCouleur(){
    const droite = document.getElementById('haute');
    droite.style.backgroundColor = "#7751b3";
    
    const droitee = document.getElementById('droitee');
    droitee.style.backgroundColor = "#63ca3b"

    const base = document.getElementById('base');
    base.style.backgroundColor = "#7751b3"
}
function telecharger() {
    const element = document.getElementById("contenue"); //Le contenu qu'on voudrait telecharger
  
    const options = {
        margin: [0, 0, 0, 0],
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
            scrollX: 438,
            scrollY: 0,
            scale: 2,
            windowWidth: element.scrollWidth, // Prend toute la largeur du contenu
            windowHeight: element.scrollHeight // prend la hauteur
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', // format a4
            orientation: element.scrollWidth > element.scrollHeight ? 'landscape' : 'portrait'
        }
    };

    html2pdf().set(options).from(element).save();
}
  
 