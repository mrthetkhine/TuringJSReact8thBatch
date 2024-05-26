process.on("message", message => {

    process.send({
            hypotenuse: Math.hypot(message.x,
            message.y)
        });
});