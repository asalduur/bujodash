update daily_log
set entry = $2, status = $3
where daily_id = $1;
select * from daily_log
where user_id = $4
order by daily_id;