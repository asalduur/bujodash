insert into monthly_log 
(daily_id)
values
($1);
select * from daily_log
where user_id = $2
order by daily_id;