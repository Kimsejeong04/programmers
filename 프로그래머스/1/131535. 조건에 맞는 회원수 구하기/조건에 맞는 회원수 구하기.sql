SELECT count(*) AS users
FROM user_info
WHERE age BETWEEN 20 AND 29
  AND to_char(joined, 'YYYY') = '2021';