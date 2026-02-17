(()=>{"use strict";
  const cloudName="dipv76dpn",uploadPreset="separadores-preset";let mode="single",c1=null,c2=null,finalCanvas=null;
  const el={theme:document.getElementById("themeToggle"),single:document.getElementById("singleBtn"),double:document.getElementById("doubleBtn"),grid:document.getElementById("grid"),u2:document.getElementById("u2"),box1:document.getElementById("box1"),box2:document.getElementById("box2"),img1:document.getElementById("img1"),img2:document.getElementById("img2"),ph1:document.getElementById("ph1"),ph2:document.getElementById("ph2"),file1:document.getElementById("file1"),file2:document.getElementById("file2"),up1:document.getElementById("up1"),up2:document.getElementById("up2"),url1:document.getElementById("url1"),url2:document.getElementById("url2"),load1:document.getElementById("load1"),load2:document.getElementById("load2"),crop:document.getElementById("cropBtn"),pdf:document.getElementById("pdfBtn"),png:document.getElementById("pngBtn"),jpg:document.getElementById("jpgBtn"),cloud:document.getElementById("cloudBtn"),status:document.getElementById("status"),preview:document.getElementById("preview"),finalPreview:document.getElementById("finalPreview"),help:document.getElementById("help")};
  const setStatus=m=>el.status.textContent=m||"";const toast=(m,t)=>{const d=document.createElement("div");d.className="toast "+(t==="error"?"error":"success");d.textContent=m;document.body.appendChild(d);requestAnimationFrame(()=>d.classList.add("show"));setTimeout(()=>{d.classList.remove("show");setTimeout(()=>d.remove(),220)},3000)};
  const setTheme=()=>{const dark=localStorage.getItem("theme")==="dark";document.body.classList.toggle("dark-mode",dark);el.theme.querySelector("i").className=dark?"bi bi-sun-fill":"bi bi-moon-fill"};
  const toggleTheme=()=>{const dark=!document.body.classList.contains("dark-mode");document.body.classList.toggle("dark-mode",dark);localStorage.setItem("theme",dark?"dark":"light");el.theme.querySelector("i").className=dark?"bi bi-sun-fill":"bi bi-moon-fill"};
  const initCrop=img=>new Cropper(img,{aspectRatio:1/3,viewMode:1,dragMode:"move",autoCropArea:.85,responsive:true,zoomOnWheel:true,background:false});
  const destroy=()=>{if(c1){c1.destroy();c1=null}if(c2){c2.destroy();c2=null}};const resetPreview=()=>{finalCanvas=null;el.preview.classList.remove("show");el.finalPreview.removeAttribute("src");[el.pdf,el.png,el.jpg,el.cloud].forEach(b=>b.hidden=true)};
  const setLoaded=(box,img,ph,src)=>{img.src=src;img.style.display="block";ph.style.display="none";box.classList.add("has-image")};const resetBox=(box,img,ph)=>{img.removeAttribute("src");img.style.display="none";ph.style.display="block";box.classList.remove("has-image")};
  const waitImageReady=(img)=>new Promise((resolve,reject)=>{if(img.complete&&img.naturalWidth>0){resolve();return}const onLoad=()=>{cleanup();resolve()};const onErr=()=>{cleanup();reject(new Error("No se pudo preparar la imagen para recorte."))};const cleanup=()=>{img.removeEventListener("load",onLoad);img.removeEventListener("error",onErr)};img.addEventListener("load",onLoad);img.addEventListener("error",onErr)});
  const applyMode=m=>{mode=m;const d=m==="double";el.single.setAttribute("aria-pressed",String(!d));el.double.setAttribute("aria-pressed",String(d));el.grid.classList.toggle("double",d);el.u2.hidden=!d;resetPreview();destroy();resetBox(el.box1,el.img1,el.ph1);resetBox(el.box2,el.img2,el.ph2);el.file1.value="";el.file2.value="";el.url1.value="";el.url2.value="";setStatus(d?"Modo doble cara seleccionado.":"Modo una cara seleccionado.")};
  const readFile=f=>new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=()=>rej(new Error("No se pudo leer el archivo."));r.readAsDataURL(f)});
  const upload=async slot=>{const file=slot.input.files&&slot.input.files[0];if(!file)return;try{const data=await readFile(file);setLoaded(slot.box,slot.img,slot.ph,data);await waitImageReady(slot.img);if(slot.n===1){if(c1)c1.destroy();c1=initCrop(slot.img)}else{if(c2)c2.destroy();c2=initCrop(slot.img)}setStatus("Imagen cargada correctamente.")}catch(e){setStatus(e.message);toast(e.message,"error")}};
  const validUrl=u=>/^https?:\/\//i.test(u);const loadUrl=(u,slot)=>new Promise((res,rej)=>{if(!validUrl(u)){rej(new Error("La URL debe comenzar con http:// o https://"));return}const i=new Image();i.crossOrigin="anonymous";i.onload=()=>res(u);i.onerror=()=>rej(new Error("No se pudo cargar la imagen desde URL."));i.src=u}).then(async src=>{setLoaded(slot.box,slot.img,slot.ph,src);await waitImageReady(slot.img);if(slot.n===1){if(c1)c1.destroy();c1=initCrop(slot.img)}else{if(c2)c2.destroy();c2=initCrop(slot.img)}setStatus("Imagen cargada desde URL.");toast("Imagen cargada correctamente.","success")});
  const combine=(a,b)=>{const c=document.createElement("canvas");c.width=1000;c.height=1500;const x=c.getContext("2d");x.drawImage(a,0,0);x.drawImage(b,500,0);return c};
  const setHelp=()=>{el.help.textContent=mode==="single"?"Medidas: 5 x 15 cm. Recomendacion: papel opalina 180-250 g/m2, escala 100%.":"Medidas: 10 x 15 cm. Imprime al 100%, recorta, dobla al centro y pega."};
  const show=c=>{finalCanvas=c;el.finalPreview.src=c.toDataURL("image/png");el.preview.classList.add("show");[el.pdf,el.png,el.jpg,el.cloud].forEach(b=>b.hidden=false);setHelp();setStatus("Marcalibros generado correctamente.")};
  const generate=()=>{if(!c1){toast("Primero debes cargar la imagen de la cara 1.","error");return}const a=c1.getCroppedCanvas({width:500,height:1500,imageSmoothingQuality:"high"});if(mode==="single"){show(a);return}if(!c2){toast("Falta la imagen de la cara 2 para modo doble.","error");return}const b=c2.getCroppedCanvas({width:500,height:1500,imageSmoothingQuality:"high"});show(combine(a,b))};
  const save=(n,m,q)=>{if(!finalCanvas){toast("Primero genera un marcalibros.","error");return}const a=document.createElement("a");a.download=n;a.href=finalCanvas.toDataURL(m,q);a.click()};
  const pdf=()=>{
    if(!finalCanvas||!window.jspdf||!window.jspdf.jsPDF){
      toast("No se pudo generar el PDF.","error");
      return;
    }
    const {jsPDF}=window.jspdf;
    const d=new jsPDF({orientation:"portrait",unit:"mm",format:"a4"});
    const pageW=210,pageH=297,margin=12;
    const imgW=mode==="single"?50:100,imgH=150;
    const imgX=(pageW-imgW)/2,imgY=60;
    const cardW=pageW-(margin*2);
    const accent=mode==="single"?[31,94,255]:[111,66,193];
    const modeText=mode==="single"?"UNA CARA":"DOBLE CARA";

    d.setFillColor(246,249,255);
    d.rect(0,0,pageW,pageH,"F");

    d.setFillColor(255,255,255);
    d.setDrawColor(224,231,244);
    d.roundedRect(margin,10,cardW,34,4,4,"FD");
    d.setTextColor(16,26,43);
    d.setFont("helvetica","bold");
    d.setFontSize(18);
    d.text("MarcaLibros Personalizados",margin+5,22);
    d.setFont("helvetica","normal");
    d.setFontSize(10);
    d.setTextColor(83,97,121);
    d.text("Plantilla lista para impresion en alta calidad",margin+5,29);
    d.setTextColor(accent[0],accent[1],accent[2]);
    d.setFont("helvetica","bold");
    d.roundedRect(pageW-56,16,38,12,3,3,"S");
    d.text(modeText,pageW-50,24);

    d.setFillColor(255,255,255);
    d.setDrawColor(224,231,244);
    d.roundedRect(margin,48,cardW,191,5,5,"FD");

    d.setFillColor(248,251,255);
    d.setDrawColor(accent[0],accent[1],accent[2]);
    d.roundedRect(imgX-5,imgY-5,imgW+10,imgH+10,4,4,"FD");
    d.addImage(finalCanvas.toDataURL("image/png"),"PNG",imgX,imgY,imgW,imgH);

    const infoY=222;
    const colGap=6;
    const colW=(cardW-colGap)/2;
    const col1X=margin;
    const col2X=margin+colW+colGap;

    d.setDrawColor(214,223,240);
    d.setFillColor(255,255,255);
    d.roundedRect(col1X,infoY,colW,42,4,4,"FD");
    d.roundedRect(col2X,infoY,colW,42,4,4,"FD");

    d.setFont("helvetica","bold");
    d.setTextColor(16,26,43);
    d.setFontSize(11);
    d.text("Especificaciones",col1X+4,228);
    d.setFont("helvetica","normal");
    d.setTextColor(83,97,121);
    d.setFontSize(9);
    d.text([
      "Tamano final: "+(mode==="single"?"5 x 15 cm":"10 x 15 cm"),
      "Resolucion base: 300 DPI",
      "Formato recomendado: PDF",
      "Escala de impresion: 100%"
    ],col1X+4,234);

    d.setFont("helvetica","bold");
    d.setTextColor(16,26,43);
    d.setFontSize(11);
    d.text("Guia de impresion",col2X+4,228);
    d.setFont("helvetica","normal");
    d.setTextColor(83,97,121);
    d.setFontSize(9);
    d.text([
      "1. Usa papel opalina o fotografico 180-250 g/m2",
      "2. Imprime sin ajustar al area imprimible",
      "3. Recorta por el borde",
      mode==="double"?"4. Dobla al centro y pega":"4. Listo para usar"
    ],col2X+4,234);

    d.setFillColor(accent[0],accent[1],accent[2]);
    d.roundedRect(margin,270,cardW,15,3,3,"F");
    d.setTextColor(255,255,255);
    d.setFont("helvetica","bold");
    d.setFontSize(10);
    d.text("Disena, imprime y disfruta tu marcalibros personalizado",margin+6,279);
    d.setFont("helvetica","normal");
    d.setFontSize(8);
    d.text(new Date().toLocaleDateString("es-ES"),pageW-30,283);

    d.save(mode==="single"?"marcalibros-una-cara.pdf":"marcalibros-doble-cara.pdf");
  };
  const cloud=()=>{if(!finalCanvas){toast("Primero genera un marcalibros.","error");return}setStatus("Subiendo imagen a Cloudinary...");finalCanvas.toBlob(blob=>{if(!blob){toast("No se pudo preparar imagen.","error");return}const f=new FormData();f.append("file",blob,"marcalibros.png");f.append("upload_preset",uploadPreset);f.append("folder","Separadores");fetch("https://api.cloudinary.com/v1_1/"+cloudName+"/image/upload",{method:"POST",body:f}).then(r=>r.json()).then(d=>{if(!d.secure_url)throw new Error("Cloudinary no devolvio URL");setStatus("Imagen subida correctamente.");toast("Subida completada.","success");navigator.clipboard?.writeText(d.secure_url).catch(()=>{});el.help.textContent="URL publica: "+d.secure_url}).catch(e=>{setStatus("Error de subida: "+e.message);toast("No se pudo subir la imagen.","error")})},"image/png",.95)};
  const s1={n:1,input:el.file1,img:el.img1,box:el.box1,ph:el.ph1},s2={n:2,input:el.file2,img:el.img2,box:el.box2,ph:el.ph2};
  window.addEventListener("DOMContentLoaded",()=>{setTheme();el.theme.addEventListener("click",toggleTheme);el.single.addEventListener("click",()=>applyMode("single"));el.double.addEventListener("click",()=>applyMode("double"));el.up1.addEventListener("click",()=>el.file1.click());el.up2.addEventListener("click",()=>el.file2.click());el.file1.addEventListener("change",()=>upload(s1));el.file2.addEventListener("change",()=>upload(s2));el.load1.addEventListener("click",()=>loadUrl(el.url1.value.trim(),s1).catch(e=>{setStatus(e.message);toast(e.message,"error")}));el.load2.addEventListener("click",()=>loadUrl(el.url2.value.trim(),s2).catch(e=>{setStatus(e.message);toast(e.message,"error")}));el.crop.addEventListener("click",generate);el.pdf.addEventListener("click",pdf);el.png.addEventListener("click",()=>save(mode==="single"?"marcalibros-una-cara.png":"marcalibros-doble-cara.png","image/png"));el.jpg.addEventListener("click",()=>save(mode==="single"?"marcalibros-una-cara.jpg":"marcalibros-doble-cara.jpg","image/jpeg",.95));el.cloud.addEventListener("click",cloud);applyMode("single");setStatus("Listo para crear tu marcalibros.")});
})();
