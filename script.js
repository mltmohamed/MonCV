function retour(){
    window.location.href = 'index.html';
}
function getRandomColor() {
    // Génère une couleur hexadécimale aléatoire
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  }

function changerCouleur(){
    const a = getRandomColor();
    const droite = document.getElementById('haute');
    droite.style.backgroundColor = a;//"#7751b3";
    
    const droitee = document.getElementById('droitee');
    droitee.style.backgroundColor = a;//"#63ca3b"

    const base = document.getElementById('base');
    base.style.backgroundColor = a;//"#7751b3"
}

/*function telecharger() {
    const element = document.getElementById("contenue"); //Le contenu qu'on
  
    const options = {
        margin: [0, 0, 0, 0],
        filename: 'monCV.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
            scrollX: 438,
            scrollY: 0,
            scale: 2,
            windowWidth:  element.scrollWidth, // Prend toute la largeur du contenu
            windowHeight: element.scrollHeight // S'assure que le rendu respecte la largeur
        },
        jsPDF: { 
            unit: 'mm', 
            format: [element.scrollWidth * 0.264583, element.scrollHeight * 0.264583], // Convertit px en mm
            orientation: element.scrollWidth > element.scrollHeight ? 'landscape' : 'portrait'
        }
    };

    html2pdf().set(options).from(element).save();
} */
function telecharger() 
{
        let element = document.getElementById('contenue');
        let opt = {
            margin: 0, // Marges réduites au minimum
            filename: 'cv.pdf',
            image: { type: 'jpeg', quality: 1 }, // Qualité max
            html2canvas: { 
                // scale: 1, // Augmenté pour meilleure qualité
                scrollX: 290,
                scrollY: 2,
                windowWidth: element.scrollWidth,
                windowHeight: element.scrollHeight,
                useCORS: true, //pour la securité concernant les liens externes
            },
            jsPDF: { 
                unit: 'mm', 
                format: 'a4', 
                orientation: 'portrait',
               // hotfixes: ["px_scaling"] // Correction des pixels
            }
    
        };
        html2pdf().set(opt).from(element).save();
}

  
 