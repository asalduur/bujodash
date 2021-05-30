select * from entry_status es
join daily_log dl on es.daily_id = dl.daily_id
join log_status ls on es.status_id = ls.status_id
where es.entry_status_id = $1;