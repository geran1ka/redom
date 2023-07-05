import {el, setChildren} from 'redom';
import IMask from 'imask';
// import {el, setChildren} from '../node_modules/redom/dist/redom.es.js';
// import IMask from '../node_modules/imask/dist/';

const createCreditCard = () => {
  const cardNumber = el('span', {
    className: 'card__number',
  },
  'xxxx xxxx xxxx xxxx',
  );

  const cardName = el('span',
    {
      className: 'card__name',
    },
    'John Doe',
    );
  const cardDate = el('span',
    {
      className: 'card__date',
    },
    '04/24',
    );

  const cardPersonal = el('div', 
  {
    className: 'card__personal',
  },
  [
    cardName,
    cardDate,
  ])
  const creditCard = el('div',
    {
      className: 'credit-card'
    },
    [
      cardNumber,
      cardPersonal,
    ]
  );

  return {
    creditCard,
    cardNumber,
    cardName,
    cardDate,
  };
}

const renderCard = () => {
  const {
    creditCard,
    cardNumber,
    cardName,
    cardDate,
  } = createCreditCard();

  const form = el('form', 
    {
      className: 'form',
      action: '#',
      id: 'form'
    }, [
      el('div', {
        className: 'form__input-wrap form__input-wrap_holder',
        }, [
          el('label', {
            className: 'form__label form__holder-label',
          }, 'Card Holder',
          ),
          el('input', {
            className: 'input input__holder',
            type: 'text',
            oninput(event) {
              event.target.value = event.target.value.replace(/[^a-z\s]/gi, '').toUpperCase();
              cardName.textContent = event.target.value;
            }
          })
        ]),
      el('div', {
        className: 'form__input-wrap form__input-wrap_number',
        }, [
          el('label', {
            className: 'form__label form__number-label',
          }, 'Card Number',
          ),
          el('input', {
            className: 'input input__number',
            id: 'cardNumber',
            placeholder: 'xxxx xxxx xxxx xxxx',
            oninput(event) {
              const maskOptions3 = {
                mask: '0000 0000 0000 0000',
                lazy: false
            } 
            //event.target.value = event.target.value.replace(/\D/, '')
            const mask = new IMask(event.target, maskOptions3).alignCursor();
            cardNumber.textContent = event.target.value;
            }
          })
        ]),
      el('div', {
        className: 'form__input-wrap form__input-wrap_date',
        }, [
          el('label', {
            className: 'form__label form__date-label',
          }, 'Card Expiry',
          ),
          el('input', {
            className: 'input input__date',
            type: 'text',
            maxlength: 4,
            oninput(event) {
              event.target.value = event.target.value.replace(/\D/g, '');
              cardDate.textContent = event.target.value.replace(/(\d{2})(\d{2})/, '$1 / $2');
            }
          })
        ]),
      el('div', {
        className: 'form__input-wrap form__input-wrap_cvv',
        }, [
          el('label', {
            className: 'form__label form__cvv-label',
          }, 'CVV',
          ),
          el('input', {
            className: 'input input__cvv',
            type: 'password',
            maxlength: 3,
            oninput(event) {
              event.target.value = event.target.value.replace(/\D/gi, '');
            }
          })
        ]),
      el('button', {
        className: 'form__button',
        type: 'submit',
        onclick(event) {
          event.preventDefault()
          
        }
      }, 'CHECK OUT')
    ]
  )

  return el('div',
    {className: 'wrapper'},
    el('div', {
      className: 'card'
    },
    [
      el('p', {
        className: 'secure'
      }, 'Secure Checkout'),
      creditCard,
      form,
    ]))
}

setChildren(document.body, renderCard());