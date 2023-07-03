const tabs = () => {
    const tabPanel = document.querySelector('.main__content-6_tab-block');
    const tabs = document.querySelectorAll('.main__content-6_tab');
    const tabContent = document.querySelectorAll('.tab');
 
    tabPanel.addEventListener('click', (e) => {
 
       if (e.target.closest('.main__content-6_tab')) {
          const tabBtn = e.target.closest('.main__content-6_tab');
          tabs.forEach((tab, index) => {
             if (tab === tabBtn) {
                tab.classList.add('main__content-6_tab_active');
                tabContent[index].classList.remove('d-none');
             } else {
                tab.classList.remove('main__content-6_tab_active');
                tabContent[index].classList.add('d-none');
             };
          });
       };
    });
 };
tabs()
