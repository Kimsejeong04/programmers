-- 코드를 입력하세요
SELECT a.product_code, SUM(a.price * b.sales_amount)
FROM product a, offline_sale b
WHERE a.product_id = b.product_id
GROUP BY product_code
ORDER BY SUM(a.price * b.sales_amount) DESC, a.product_code ASC