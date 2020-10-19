tests([
    [12345678, '03:25:45'],
    [12345678, 'h:m:s:l', '3:25:45:678'],
    [1, '00:00:00'],
    [1000, '00:00:01'],
    [
        456789123,
        'd "days" h "hours" m "minutes" s "seconds" l "milliseconds"',
        '5 days 6 hours 53 minutes 9 seconds 123 milliseconds'
    ]
]);
