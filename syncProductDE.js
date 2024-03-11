const fs = require('fs');

// Đọc thông tin sản phẩm từ cửa hàng Dietollemode
const productsDietollemode = JSON.parse(fs.readFileSync('ShopifyProductsDietollemode.json'));

// Đọc thông tin sản phẩm từ cửa hàng GeschenkeMall
const productsGeschenkeMall = JSON.parse(fs.readFileSync('ShopifyProductsGeschenkeMall.json'));

// Khởi tạo một đối tượng để lưu trữ thông tin về sự tương ứng giữa các sản phẩm từ hai cửa hàng
const productMapping = {};

// Duyệt qua danh sách sản phẩm từ cửa hàng Dietollemode
productsDietollemode.forEach(productDietollemode => {
    const productIdDietollemode = extractProductId(productDietollemode.node.id);
    
    // Lấy mã sản phẩm từ handle
    const codeDietollemode = extractProductCode(productDietollemode.node.handle);
    
    // Duyệt qua danh sách sản phẩm từ cửa hàng GeschenkeMall
    productsGeschenkeMall.forEach(productGeschenkeMall => {
        const productIdGeschenkeMall = extractProductId(productGeschenkeMall.node.id);

        // Lấy mã sản phẩm từ handle
        const codeGeschenkeMall = extractProductCode(productGeschenkeMall.node.handle);

        // Nếu mã sản phẩm từ hai cửa hàng khớp nhau, ghi lại thông tin tương ứng
        if (codeDietollemode === codeGeschenkeMall) {
            productMapping[productIdDietollemode] = productIdGeschenkeMall;
        }
    });
});

// Lưu trữ thông tin về sự tương ứng vào tệp JSON
fs.writeFileSync('ProductMappingDE.json', JSON.stringify(productMapping, null, 2));

// Hàm để trích xuất ID từ chuỗi gid://shopify/Product/ID
function extractProductId(idString) {
    return idString.split('/').pop();
}

// Hàm để trích xuất mã sản phẩm từ handle
function extractProductCode(handle) {
    return handle.split('-').pop();
}
