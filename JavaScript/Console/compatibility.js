
/* 
- When using or emulating internet explorer 8 or earlier versions(e.g through compatibility View/ Enterprise Mode), the console will only be defined when the developer tools are active, so console.log() statements can cause an exception and prevent code from executing.
- To mitigate this, you can check to see if the console is available before you log:
*/

if (typeof window.console !== "undefined") {
  console.log("Hello World");
}