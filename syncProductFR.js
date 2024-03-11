const fs = require('fs');

// Đọc thông tin sản phẩm từ cửa hàng customchic
const productsCustomchic = JSON.parse(fs.readFileSync('ShopifyProductsVivelamode.json'));

// Đọc thông tin sản phẩm từ cửa hàng personalchic
const productsPersonalchic = JSON.parse(fs.readFileSync('ShopifyProductsCadeuplus.json'));

// Khởi tạo một đối tượng để lưu trữ thông tin về sự tương ứng giữa các sản phẩm từ hai cửa hàng
const productMapping = {};

// Duyệt qua danh sách sản phẩm từ cửa hàng customchic
productsCustomchic.forEach(productVivelamode => {
    const productIdCustomchic = extractProductId(productVivelamode.node.id);
    
    // Lấy mã sản phẩm từ handle
    const codeCustomchic = extractProductCode(productVivelamode.node.handle);
    
    // Duyệt qua danh sách sản phẩm từ cửa hàng personalchic
    productsPersonalchic.forEach(productCadeuplus => {
        const productIdCadeuplus = extractProductId(productCadeuplus.node.id);

        // Lấy mã sản phẩm từ handle
        const codePersonalchic = extractProductCode(productCadeuplus.node.handle);

        // Nếu mã sản phẩm từ hai cửa hàng khớp nhau, ghi lại thông tin tương ứng
        if (codeCustomchic === codePersonalchic) {
            productMapping[productIdCustomchic] = productIdCadeuplus;
        }
    });
});

// Lưu trữ thông tin về sự tương ứng vào tệp JSON
fs.writeFileSync('ProductMappingFR.json', JSON.stringify(productMapping, null, 2));

// Hàm để trích xuất ID từ chuỗi gid://shopify/Product/ID
function extractProductId(idString) {
    return idString.split('/').pop();
}

// Hàm để trích xuất mã sản phẩm từ handle
function extractProductCode(handle) {
    return handle.split('-').pop();
}
