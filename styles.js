export const widgetStyles = `
<style>
    .recs-widget-container {
        margin-top: 50px;
        font-family: "Work Sans", sans-serif;
        background-color: #f7f7f7;
        padding: 30px 20px;
        border-radius: 12px;
    }
    .recs-widget-title {
        font-size: 28px;
        font-weight: 300;
        margin-bottom: 30px;
        color: #333;
        text-align: center;
    }
    .recs-scroll-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .recs-arrow {
        cursor: pointer;
        font-size: 48px;
        font-weight: 100;
        color: #555;
        opacity: 0.7;
        padding: 0 15px;
        user-select: none;
        transition: opacity 0.2s, color 0.2s;
    }
    .disabled-arrow { opacity: 0.2 !important; cursor: default !important; }

    #recs-products-container {
        display: flex;
        gap: 20px;
        flex-grow: 1;
        max-width: 600px;
        overflow: hidden;
        justify-content: center;
    }

    .product-box {
        display: block;
        text-decoration: none;
        width: 180px;
        background: #fff;
        border-radius: 30px 6px 6px 30px;
        overflow: hidden;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        flex-shrink: 0;
    }
    .product-box:hover {
        transform: scale(1.03) rotateZ(0.5deg);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
    .product-box img {
        width: 100%;
        height: 240px; 
        object-fit: cover;
        object-position: top; 
        display: block;
    }
    .product-box-content { padding: 15px 18px; }
    .product-box h3 {
        font-size: 16px;
        font-weight: 700;
        color: #69727b;
        margin: 0 0 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .product-box p {
        font-size: 16px;
        font-weight: bold;
        color: #c0392b;
        margin: 0;
    }
</style>
`;