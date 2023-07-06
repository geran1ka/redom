import { setChildren } from "redom";
import { createPage } from "./scripts/createPage.js";
import IMask from "imask";
import { swapColor } from "./scripts/swapColor.js";
import { mask } from "./scripts/mask.js";

//createPage();

const name = document.getElementById('name');
const cardnumber = document.getElementById('cardnumber');
const svgnumber = document.getElementById('svgnumber');
const expirationdate = document.getElementById('expirationdate');
const svgexpire = document.getElementById('svgexpire');
const securitycode = document.getElementById('securitycode');
const svgsecurity = document.getElementById('svgsecurity');
const ccicon = document.getElementById('ccicon');
const cclogo = document.getElementById('cclogo');
const svgname = document.getElementById('svgname')
const svgnameback = document.getElementById('svgnameback')
const lightcolor = document.querySelectorAll('.lightcolor');
const darkcolor = document.querySelectorAll('.darkcolor');
const creditcard = document.querySelector('.creditcard');


creditcard.addEventListener('click', () => {
  creditcard.classList.toggle('flipped')
});

name.addEventListener('input', () => {
  name.value = name.value.replace(/[^a-zа-яё\s]/gi, '');
  svgname.textContent = name.value.toUpperCase();
  svgnameback.textContent = name.value;
})

securitycode.addEventListener('input', () => {
  securitycode.value = securitycode.value.replace(/\D+/gi, '');
  svgsecurity.textContent = securitycode.value;
})

expirationdate.addEventListener('input', () => {
  const maskOptionsDate = {
    mask: '00/00',
    lazy: false
  } 
  new IMask(expirationdate, maskOptionsDate).alignCursor();
  expirationdate.value = expirationdate.value.replace(/\D+/, '');
  svgexpire.textContent = expirationdate.value.replace(/(\d{2})(\d{2})/gi, '$1/$2')
})


cardnumber.addEventListener('input', ()=> {

  if (cardnumber.value.length > 5) {

    const res = mask.findIndex(((item, i) => {
      console.log('res: ', cardnumber.value.match(item.regex));
      return cardnumber.value.match(item.mask)

      console.log('res: ', res);

    }))
  }
  svgnumber.textContent = cardnumber.value;
});





