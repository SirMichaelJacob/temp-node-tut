const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(error);
        return;
    }
    var first = result
    //console.log(first);

    readFile('./content/subfolder/test.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        var second = res;

        writeFile('./content/subfolder/third.txt', `Here is the result of async write : ${first}, ${second}`, (error, result) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log(result);
        })
    });
});