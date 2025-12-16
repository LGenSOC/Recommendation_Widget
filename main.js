(function() {
    let startIndex = 0;
    const PRODUCTS_PER_PAGE = 3;
    const MAX_START_INDEX = productsData.length - PRODUCTS_PER_PAGE;

    function renderWidget() {
        const container = document.getElementById('recs-products-container');
        if (!container) return;

        let html = '';
        for (let i = 0; i < PRODUCTS_PER_PAGE; i++) {
            const product = productsData[startIndex + i];
            // The <a> tag wraps the image and content to make it clickable
            html += `
                <a href="${product.link}" class="product-box" aria-label="View ${product.name}">
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <div class="product-box-content">
                        <h3>${product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                </a>
            `;
        }
        container.innerHTML = html;

        const leftArrow = document.getElementById('recs-arrow-left');
        const rightArrow = document.getElementById('recs-arrow-right');

        if (leftArrow) leftArrow.classList.toggle('disabled-arrow', startIndex === 0);
        if (rightArrow) rightArrow.classList.toggle('disabled-arrow', startIndex === MAX_START_INDEX);
    }

    function scrollRight() {
        if (startIndex < MAX_START_INDEX) {
            startIndex += PRODUCTS_PER_PAGE;
            renderWidget();
        }
    }

    function scrollLeft() {
        if (startIndex > 0) {
            startIndex -= PRODUCTS_PER_PAGE;
            renderWidget();
        }
    }

    // DIRECT CREATION LOGIC
    const targetElement = document.getElementById('recs-widget-anchor');

    if (targetElement) {
        // widgetContent comes from your ui-templates.js/styles.js
        targetElement.innerHTML = widgetContent;

        const leftArrow = document.getElementById('recs-arrow-left');
        const rightArrow = document.getElementById('recs-arrow-right');

        if (leftArrow) leftArrow.addEventListener('click', scrollLeft);
        if (rightArrow) rightArrow.addEventListener('click', scrollRight);

        renderWidget();
    }
})();