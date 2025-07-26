function adds(a:number, b:number): number {
  return a+b;
};

adds(1, 2);

function log(message: string): void { // returns nothing
  console.log(message);
};

function logAndThrow(errorMessage: string): never { // never means that this function will never complete.
  console.log(errorMessage);
  throw new Error(errorMessage);
};

logAndThrow('error message goes here');

function performJob(cb: (m: string) => void) {
  // ...
  cb('jobd done');
}

performJob(log);

function process(val:any) { // unknown type
  if (typeof val === 'object' 
  && !!val 
  && 'log' in val 
  && typeof val.log === 'function') {

  } {
    val.log();
  }
};

process({log})

function processAny(val:any) { 
  // any could get a runtime error;
  val.log();
};

processAny('testing');

function generateError(msg?: string) {
  throw new Error(msg);
}

generateError('An error occured!');

// nullish coalescing ?? not ts specific function js also supports it





