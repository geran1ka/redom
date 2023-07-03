import {el, setChildren} from '../node_modules/redom/dist/redom.es.js';

const createTitle = () => {
  return el('div', {
    className: 'payment-title'
  },
  el('h1', 'Payment Information')
  )
};

const createForm = () => {
  return el('div', {
    className: 'form-container',
  }, [
    el('div', {
      className: 'field-container',
    }, [
      el('label', {
          for: 'name',
        }, 'Name',
      ),
      el('input', {
        id: 'name',
        maxlength: 20,
        type: 'text',
      }),
    ]),
    el('div', {
      className: 'field-container',
    }, [
      el('label', {
          for: 'cardnumber',
        }, 'Card Number',
      ),
      el('input', {
        id: 'cardnumber',
        type: 'text',
        pattern: '[0-9]*',
        inputmode: 'numeric',
      }),
      // еще svg
    ]),
    el('div', {
      className: 'field-container',
    }, [
      el('label', {
          for: 'expirationdate',
        }, 'Expiration (mm/yy)',
      ),
      el('input', {
        id: 'expirationdate',
        type: 'text',
        pattern: '[0-9]*',
        inputmode: 'numeric',
      }),
    ]),
    el('div', {
      className: 'field-container',
    }, [
      el('label', {
          for: 'securitycode',
        }, 'Security Code',
      ),
      el('input', {
        id: 'securitycode',
        type: 'text',
        pattern: '[0-9]*',
        inputmode: 'numeric',
      }),
    ]),
  ])
}

export const createPage = () => {
  const title = createTitle();
  const form = createForm();
  return setChildren(document.body, [title, form]);
}

