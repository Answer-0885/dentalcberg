// Маска для набора номера телефона из библиотеки IMask
document.querySelectorAll('.phone-mask').forEach((e) => {
    const phoneMask = IMask( e, { mask: '+{7}(000)000-00-00' })
  })
