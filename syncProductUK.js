const fs = require('fs');

// Đọc thông tin sản phẩm từ cửa hàng customchic
const productsCustomchic = JSON.parse(fs.readFileSync('ShopifyProductsCustomchic.json'));

// Đọc thông tin sản phẩm từ cửa hàng personalchic
const productsPersonalchic = JSON.parse(fs.readFileSync('ShopifyProductsPersonalchic.json'));

// Khởi tạo một đối tượng để lưu trữ thông tin về sự tương ứng giữa các sản phẩm từ hai cửa hàng
const productMapping = {};

// Duyệt qua danh sách sản phẩm từ cửa hàng customchic
productsCustomchic.forEach(productCustomchic => {
    const productIdCustomchic = extractProductId(productCustomchic.node.id);
    
    // Lấy mã sản phẩm từ handle
    const codeCustomchic = extractProductCode(productCustomchic.node.handle);
    
    // Duyệt qua danh sách sản phẩm từ cửa hàng personalchic
    productsPersonalchic.forEach(productPersonalchic => {
        const productIdPersonalchic = extractProductId(productPersonalchic.node.id);

        // Lấy mã sản phẩm từ handle
        const codePersonalchic = extractProductCode(productPersonalchic.node.handle);

        // Nếu mã sản phẩm từ hai cửa hàng khớp nhau, ghi lại thông tin tương ứng
        if (codeCustomchic === codePersonalchic) {
            productMapping[productIdCustomchic] = productIdPersonalchic;
        }
    });
});

// Lưu trữ thông tin về sự tương ứng vào tệp JSON
fs.writeFileSync('ProductMappingUK.json', JSON.stringify(productMapping, null, 2));

// Hàm để trích xuất ID từ chuỗi gid://shopify/Product/ID
function extractProductId(idString) {
    return idString.split('/').pop();
}

// Hàm để trích xuất mã sản phẩm từ handle
function extractProductCode(handle) {
    return handle.split('-').pop();
}
