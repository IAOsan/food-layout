class UI {
   constructor() {
      this.icons = document.getElementsByClassName('header__icon');
      this.iconsCount = 0;
      this.iconsLength = this.icons.length;
      this.menu = document.querySelector('.menu');
      this.navItems = Array.from(document.querySelectorAll('.target'));
   }

   runSlideShow() {
      setInterval(() => {
         this.icons[this.iconsCount].classList.remove('header__icon--change');
         if (this.iconsCount < this.iconsLength - 1) {
            this.icons[this.iconsCount + 1].classList.add(
               'header__icon--change'
            );
         }
         this.iconsCount++;
         if (this.iconsCount === this.iconsLength) this.iconsCount = 0;
         this.icons[this.iconsCount].classList.add('header__icon--change');
      }, 4000);
   }

   toggleNav() {
      this.menu.addEventListener('click', () => {
         this.navItems.forEach(item => {
            item.classList.toggle('target--change');
         });
      });
   }
}

const ui = new UI();

window.addEventListener('DOMContentLoaded', () => {
   // nav
   ui.toggleNav();
   // slideshow
   ui.runSlideShow();
});
