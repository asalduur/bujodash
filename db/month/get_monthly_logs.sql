select * from monthly_log m
join daily_log d on d.daily_id = m.daily_id
where log_date between '2021-06-01' and '2021-06-30' and user_id = $1
order by log_date;