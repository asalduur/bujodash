delete from daily_log
where user_id = $1 and daily_id = $2;
select * from daily_log
where user_id = $1
order by daily_id;