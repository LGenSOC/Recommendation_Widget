import { productsData } from './products.js';
import { widgetStyles } from './styles.js';
import { widgetLayout, renderProductHTML } from './ui-templates.js';

(function() {
    let startIndex = 0;
    const PRODUCTS_PER_PAGE = 3;
    const MAX_START_INDEX = productsData.length - PRODUCTS_PER_PAGE;

    function updateView() {
        const container = document.getElementById('recs-products-container');
        if (!container) return;

        // Slice data and map to HTML
        container.innerHTML = productsData
            .slice(startIndex, startIndex + PRODUCTS_PER_PAGE)
            .map(product => renderProductHTML(product))
            .join('');

        // Arrow States
        document.getElementById('recs-arrow-left')?.classList.toggle('disabled-arrow', startIndex === 0);
        document.getElementById('recs-arrow-right')?.classList.toggle('disabled-arrow', startIndex >= MAX_START_INDEX);
    }

    const handleScroll = (direction) => {
        if (direction === 'right' && startIndex < MAX_START_INDEX) {
            startIndex += PRODUCTS_PER_PAGE;
        } else if (direction === 'left' && startIndex > 0) {
            startIndex -= PRODUCTS_PER_PAGE;
        }
        updateView();
    };

    const injectWidget = () => {
        const target = document.querySelector('.grid.product-single');
        if (!target) return console.error("Injection target not found.");

        target.insertAdjacentHTML('afterend', widgetStyles + widgetLayout);

        document.getElementById('recs-arrow-left').addEventListener('click', () => handleScroll('left'));
        document.getElementById('recs-arrow-right').addEventListener('click', () => handleScroll('right'));

        updateView();
    };

    setTimeout(injectWidget, 50);
})();