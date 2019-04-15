// promise
const sleep = time => 
  new Promise(resolve => setTimeout(resolve, time));

sleep(200).then(() => console);

// generator
function* sleepGenerator(time) {
  yield new Promise(resolve => setTimeout(resolve, time));
}

sleepGenerator(200).next().value.then(() => console);

// async
const handleSleep = time => 
  new Promise(resolve => setTimeout(resolve, time));
  
async function sleep(time) {
  return await handleSleep(time);
}