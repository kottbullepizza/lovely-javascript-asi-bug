function theBugIHate() {
    return // ASI inserts a semicolon here
    {
        a: 1
    };
}

console.log(theBugIHate());