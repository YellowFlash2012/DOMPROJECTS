function getElement(selection) {
    const element = document.querySelector(selection);

    if (element) {
        return element;
    } else {
        throw new Error(`Please check "${selection}" selector, no such element exists`);
    }
}

function Gallery(element) {
    this.container = element;
    this.list = [...element.querySelectorAll('.img')];

    //target
    this.modal = getElement('.modal');
    this.modalImg = getElement('.main-img');
    this.modalImages = getElement('.modal-images');
    this.closeBtn = getElement('.close-btn');
    this.nextBtn = getElement('.next-btn');
    this.prevBtn = getElement('.prev-btn');

    //bind functions
    this.openModal = this.openModal.bind(this);
    this.container.addEventListener('click', function (e) {
        this.openModal();
    }.bind(this));
    
}

Gallery.prototype.openModal = function() {
    console.log(this);
    console.log(this.modal);
    this.modal.classList.add('open');
}

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));