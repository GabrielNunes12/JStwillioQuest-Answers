
class Materializer {
  constructor(targetName, activated) {
    // your code here
    this.target = targetName;
    this.activated = false;
  }

  activate() {
    return this.activated = true;
  }

  materialize() {
    if(this.activated) return this.target;
    if(!this.activated) return;
  }
  // your code here
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const m = new Materializer('Kevin');
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"