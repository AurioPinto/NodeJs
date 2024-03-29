// Event Emitters

import EventEmitter from "events";

class Job extends EventEmitter {}
job = new Job();

job.on("done", function(timeDone) {
  console.log("Job was Pronounced done at", timeDone);
});
job.emit("done", new Date());
job.removeAllListeners();
