# Bao An Education

Website giới thiệu và tư vấn du học Singapore.

## Chạy local

```bash
python -m http.server 4173 --directory dist
```

## Deploy miễn phí

Repository này đã có workflow GitHub Pages trong `.github/workflows/pages.yml`. Tạo repository public trên GitHub, đẩy toàn bộ mã nguồn lên nhánh `main`, sau đó bật Settings → Pages → Source: GitHub Actions. URL mặc định sẽ là `https://<username>.github.io/<repository>`.

Nội dung dữ liệu khởi đầu nằm ở `data/site-content.json`. Các bài viết đầy đủ nên được thêm dưới dạng Markdown hoặc HTML trong repository để có lịch sử thay đổi rõ ràng.

