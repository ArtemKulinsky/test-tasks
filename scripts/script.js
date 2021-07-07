'use strict'

let buyButtons = document.querySelectorAll('.products .item__buy-button');

function createBuyForm() {
   let buyForm = document.createElement('form');
   buyForm.classList.add('buy-form');
   buyForm.setAttribute('action', 'send.php')
   buyForm.setAttribute('method', 'post')
   buyForm.setAttribute('name', 'buy-form')

   let buyFormFieldsData = [
      ['Имя', 'name', 'text'],
      ['Номер телефона', 'phone', 'text'],
      ['E-mail', 'email', 'email'],
      ['Товар', 'product', 'text']
   ];

   buyFormFieldsData.map(item => {
      let buyFormField = document.createElement('div');
      buyFormField.classList.add('buy-form__field');

      let fieldDescription = document.createTextNode(`${item[0]}:`)
      buyFormField.prepend(fieldDescription);

      let input = document.createElement('input');
      input.setAttribute('name', item[1])
      input.setAttribute('type', item[2])

      buyFormField.append(input);

      buyForm.append(buyFormField);
   })
   
   let sendButton = document.createElement('button')
   sendButton.classList.add('buy-form__send')
   sendButton.insertAdjacentText('afterbegin', 'Отправить')
   sendButton.setAttribute('type', 'submit')

   buyForm.append(sendButton);

   return buyForm;
}

function displayBuyForm(event) {
   event.stopPropagation();    //!Иначе срабатывает onClick на документе и вызывается removeBuyForm

   let hiddingContainer = document.createElement('div');
   hiddingContainer.className = 'hidding-container'

   let buyForm = createBuyForm();

   hiddingContainer.append(buyForm)

   document.body.append(hiddingContainer);
   document.body.style.overflowY = 'hidden'

   ///Удаление формы _________________________ ///

   function removeBuyForm(event) {
      if (event.target.closest('.buy-form')) return;

      hiddingContainer.remove()
      document.body.style.overflowY = 'initial'
      document.removeEventListener('click', removeBuyForm)
   };

   document.addEventListener('click', removeBuyForm);

   ///________________________________________ ///

   
};

for (let button of buyButtons) {
   button.addEventListener('click', displayBuyForm)
};

