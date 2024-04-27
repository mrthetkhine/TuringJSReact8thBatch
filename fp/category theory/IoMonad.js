const fs = require("fs");
class IO {

	// We construct the IO type with a thunk/callback that returns the value when called
	constructor( fn ){
		this.fn = fn;
	}

	// IO doesn't do anything until we explicitly call it. 
	run(){
		return this.fn();
	}

	// Create a new IO value containing a thunk that calls the 
	// previous one and runs a translation on it 
	/// map :: IO a -> (a -> b) -> IO b
	map(fn){
		return new IO(() => fn(this.run()))
	}

	// Create a new IO value with a monadic bind. Similar to `map`, but
	// the underlying function itself returns an IO that must be unwrapped as well.s
	/// bind :: IO a -> (a -> IO b) -> IO b
	bind(fn){
		return new IO(() => fn(this.run()).run())
	}
}

// Log a value to the console using the IO monad. 
// Rather than performing the action directly, it returns
// an IO value containing a thunk that will log to the console
// when called.
function ioLog( message ){
	return new IO( () => console.log(message));
}

// "Pure" takes a primitive value and lifts it into the IO monad
function ioPure(value){
	return new IO( () => value );
}

// Ask a question and then return the response.
function ioPrompt(question){
	return new IO( () => prompt(question))
}

// This example uses 'pure' to provide a starting value, but you can replace with 'ioPrompt' 
// to request a value from the user.
let result = ioPure(5)						// Start with the number 5
	.map( x => x * 2 )				// Double it
	.map( x => x + 1 )				// Add one. (We not have `11`)
	.bind( x => ioPure(100).map( y =>		// bind against another ioPure to simulate requesting data from somewhere.
		x + y					// Add the two values together to get 111
	))
	.bind( x => ioLog( x));				// Now we log the result to the console.
console.log("not runned yet");	
result.run();						// Run it. Nothing has happened until this, we just have a 


const readFile = (fileName) => 
    new IO(() => fs.readFileSync(fileName))


const program = readFile('meta.txt')
	.bind(fileName=> readFile(fileName))
    .map(content => content.toString().toUpperCase())
    .bind(ioLog);

program.run();
