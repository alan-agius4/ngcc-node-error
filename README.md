# ngcc-node-error
This is a reproduction of the `Node does not exist error` in NGCC. This is thrown when a direct or transitive dependency is missing.

For example in this reproduction, when trying to process `@angular/material/progress-bar` it is failing, because this depends on `@angular/material/core`, and the later on `@angular/cdk`. However, `@angular/cdk` is not installed.

To run the reproduction;
```
npm install
npm test
```

The error itself, is not self explenatory, and might send users on a goose case.
```
throw new Error('Node does not exist: ' + node);
      ^

Error: Node does not exist: /workspace/ngcc-node-error/node_modules/@angular/material/progress-bar
    at DepGraph.dependenciesOf (/workspace/ngcc-node-error/node_modules/dependency-graph/lib/dep_graph.js:187:13)
    at DependencyResolver.sortEntryPointsByDependency (/workspace/ngcc-node-error/node_modules/@angular/compiler-cli/ngcc/src/packages/dependency_resolver.js:42:47)
    at EntryPointFinder.findEntryPoints (/workspace/ngcc-node-error/node_modules/@angular/compiler-cli/ngcc/src/packages/entry_point_finder.js:37:34)
    at Object.mainNgcc [as process] (/workspace/ngcc-node-error/node_modules/@angular/compiler-cli/ngcc/src/main.js:50:34)
    at Object.<anonymous> (/workspace/ngcc-node-error/index.js:4:6)
    at Module._compile (module.js:653:30)
    at Object.Module._extensions..js (module.js:664:10)
    at Module.load (module.js:566:32)
    at tryModuleLoad (module.js:506:12)
    at Function.Module._load (module.js:498:3)
npm ERR! Test failed.  See above for more details.
```
