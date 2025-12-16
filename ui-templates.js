export const widgetLayout = `
    <div class="recs-widget-container">
        <div class="recs-widget-title">Featured Selections Just For You</div>
        <div class="recs-scroll-wrapper">
            <div id="recs-arrow-left" class="recs-arrow">&#8249;</div>
            <div id="recs-products-container"></div>
            <div id="recs-arrow-right" class="recs-arrow">&#8250;</div>
        </div>
    </div>
`;

export const renderProductHTML = (product) => `
    <a href="${product.link}" class="product-box" aria-label="View ${product.name}">
        <img src="${product.imageUrl}" alt="${product.name}">
        <div class="product-box-content">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        </div>
    </a>
`;