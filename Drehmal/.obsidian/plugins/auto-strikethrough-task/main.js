/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var r = Object.defineProperty;
var g = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var f = Object.prototype.hasOwnProperty;
var p = (s, t) => {
    for (var i in t) r(s, i, { get: t[i], enumerable: !0 });
  },
  W = (s, t, i, o) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let n of u(t))
        !f.call(s, n) &&
          n !== i &&
          r(s, n, {
            get: () => t[n],
            enumerable: !(o = g(t, n)) || o.enumerable,
          });
    return s;
  };
var k = (s) => W(r({}, "__esModule", { value: !0 }), s);
var L = {};
p(L, { default: () => c });
module.exports = k(L);
var m = require("obsidian"),
  c = class extends m.Plugin {
    async onload() {
      console.log("AutoStrikethroughTasksPlugin loaded"),
        this.registerEvent(
          this.app.workspace.on("editor-change", (t) => {
            t.getValue()
              .split(
                `
`
              )
              .forEach((o, n) => {
                var d;
                let a = o.trim(),
                  h = ((d = o.match(/^\s*/)) == null ? void 0 : d[0]) || "";
                if (a.startsWith("- [x]")) {
                  let e = a.slice(6).trim();
                  if (!e.startsWith("~~") || !e.endsWith("~~")) {
                    let l = `- [x] ~~${e}~~`;
                    t.setLine(n, h + l);
                  }
                }
                if (a.startsWith("- [ ]")) {
                  let e = a.slice(6).trim();
                  if (e.startsWith("~~") && e.endsWith("~~")) {
                    let l = `- [ ] ${e.slice(2, -2).trim()}`;
                    t.setLine(n, h + l);
                  }
                }
              });
          })
        );
    }
    onunload() {
      console.log("AutoStrikethroughTasksPlugin unloaded");
    }
  };

/* nosourcemap */