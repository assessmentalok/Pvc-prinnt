function generateCard(){

showName.innerHTML =
"किसान का नाम : " + fname.value;

showFather.innerHTML =
"पिता का नाम : " + father.value;

showDob.innerHTML =
"जन्म तिथि : " + dob.value;

showGender.innerHTML =
"लिंग / जाति : " +
gender.value +
" / " +
caste.value;

showEnrollment.innerHTML =
"Enrollment No : " +
enrollment.value;

showFarmerId.innerHTML =
"Farmer ID : " +
farmerid.value;

showMobile.innerHTML =
"मोबाइल : " +
mobile.value;

showCategory.innerHTML =
"श्रेणी : " +
category.value;

showAddress.innerHTML =
"पता : " +
address.value;

showLand.innerHTML =
"जिला : " +
district.value +
" | तहसील : " +
tehsil.value +
" | गांव : " +
village.value;

showGata.innerHTML =
"गाटा संख्या : " +
gata.value;

let file =
document.getElementById("photo").files[0];

if(file){

let reader =
new FileReader();

reader.onload = function(e){

document.getElementById(
"previewPhoto"
).src =
e.target.result;

}

reader.readAsDataURL(file);

}

const qrData = `
Farmer Name: ${fname.value}
Father Name: ${father.value}
DOB: ${dob.value}
Gender: ${gender.value}
Caste: ${caste.value}
Mobile: ${mobile.value}
Category: ${category.value}
Enrollment No: ${enrollment.value}
Farmer ID: ${farmerid.value}
Address: ${address.value}
District: ${district.value}
Tehsil: ${tehsil.value}
Village: ${village.value}
Gata Number: ${gata.value}
`;

document.getElementById("qrcode").innerHTML="";

new QRCode(
document.getElementById("qrcode"),
{
text: qrData,
width:120,
height:120
}
);

}

async function downloadPDF(){

const card =
document.getElementById("card");

const canvas =
await html2canvas(card,{
scale:2
});

const img =
canvas.toDataURL("image/png");

const { jsPDF } =
window.jspdf;

const pdf =
new jsPDF(
"p",
"mm",
"a4"
);

pdf.addImage(
img,
"PNG",
5,
5,
200,
280
);

pdf.save(
"Farmer_Card.pdf"
);

}
