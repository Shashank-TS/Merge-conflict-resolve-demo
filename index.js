let a=10;
let b=20;
let c=a+b;
console.log("The sum of a and b is: " , a+b);

console.log("added a line is from remote repo");

console.log("new line from local");


// Git conflicts happen when Git is unable to automatically decide which changes to keep. Here are the most common situations:

// 🔹 1. Same Line Modified in Two Branches
// You and someone else edit the same line of the same file in different branches.
// When merging, Git doesn’t know which change to keep.


// 🔹 2. File Modified in One Branch, Deleted in Another
// One branch modifies a file
// Another branch deletes the same file
// Git can’t decide whether to keep or remove it.

// 🔹 3. Same File Renamed Differently
// The same file is renamed differently in two branches
// Git gets confused about the correct filename

// 🔹 4. Same File Added with Different Content
// A file with the same name is created in both branches, but with different content.

// 🔹 5. Rebase Conflicts
// While doing git rebase, commits are replayed one by one.
// If a commit conflicts with existing code → conflict occurs.

// 6. Pulling Changes (git pull) with Local Modifications
// You made local changes and then run git pull
// If remote changes overlap with your local edits → conflict.

// 🔹 9. Binary File Conflicts
// Files like images, PDFs, etc.
// Git cannot merge them automatically → manual decision required.

// 🔹 10. Different Changes in Adjacent Lines (Complex Cases)
// Even if not the exact same line, nearby changes can confuse Git’s merge algorithm.
