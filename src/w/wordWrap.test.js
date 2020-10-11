tests([
    ['Licia is a utility library.', 10, 'Licia is \na utility \nlibrary.'],
    ['Licia\nis a utility library.', 10, 'Licia\nis a \nutility \nlibrary.'],
    ['Licia 是一个工具库。', 5, 'Licia\n是一个工具\n库。']
]);
