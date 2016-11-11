numseq
======
By [Joe Fallon](http://blog.joefallon.net)

> **A simple integer number sequence generator.**

Installation
------------
The easiest way to install `numseq` is with npm. 

```
npm install numseq --save
```

NumSeq
------

`Numseq` is a simple class written in TypeScript that returns the 
next integer each time `#next` is called. The integer sequence 
starts at one (1). This class is perfect for ensuring the rows in a
database have unique values during testing.

### Features

`Numseq` has the following features and benefits:

*   Full suite of unit tests.
*   It can be integrated into any existing project.
*   Can be fully understood in just a few moments.
*   Written in TypeScript.
*   Extremely fast.

### Class Functions

```typescript
public static next():number;  // get the next integer
public static reset();        // reset the sequence
```