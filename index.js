/*function winFinder(object) {
    if (object.result === "W") {
        return true;
    } else {
        return false;
    }
}*/

 /* function superbowlWin(record) {
    const result = record.find(winFinder);
    return result ? result.year : undefined;
}*/

function superbowlWin(array) {
    const result = array.find(winFinder => winFinder.result === "W");
    return result ? result.year : undefined;
}

console.log(superbowlWin(record));