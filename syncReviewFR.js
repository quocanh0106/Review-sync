const fs = require('fs');

// Đọc dữ liệu từ tệp ReviewCustomchic.json
const reviewsCadeausPlus = JSON.parse(fs.readFileSync('ReviewVivelamode.json'));

// Đọc dữ liệu từ tệp ProductMapping.json
const productMapping = JSON.parse(fs.readFileSync('ProductMappingFR.json'));

// Ngày 1/2
const cutoffDate = new Date('2024-02-01T00:00:00Z');

// Duyệt qua từng đánh giá trong reviewsCadeausPlus
reviewsCadeausPlus.reviews.forEach(review => {
    // Lấy thời gian tạo đánh giá
    const reviewDate = new Date(review.created_at);

    // Kiểm tra xem đánh giá được tạo sau ngày 1/2 không
    if (reviewDate > cutoffDate) {
        // Lấy ID sản phẩm từ đánh giá hiện tại
        const productIdCustomchic = review.product_external_id;

        // Kiểm tra xem ID sản phẩm có trong danh sách mapping không
        if (productIdCustomchic in productMapping) {
            // Nếu có, thay thế ID sản phẩm của customchic bằng ID sản phẩm của personalchic
            review.product_external_id = productMapping[productIdCustomchic];
        }
    }
});

// Lọc ra chỉ các đánh giá sau ngày 1/2
const reviewsAfterCutoffDate = reviewsCadeausPlus.reviews.filter(review => {
    const reviewDate = new Date(review.created_at);
    return reviewDate > cutoffDate;
});

// Lưu lại dữ liệu đã chỉnh sửa vào tệp mới
const modifiedData = {
    current_page: reviewsCadeausPlus.current_page,
    per_page: reviewsCadeausPlus.per_page,
    reviews: reviewsAfterCutoffDate
};
fs.writeFileSync('reviewsFR.json', JSON.stringify(modifiedData, null, 2));
