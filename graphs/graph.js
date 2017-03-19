function Vertex(label) {
    this.label = label;
}

function Graph(v) {
    this.vertices = v;
    this.vertexList = [];
    this.topSort = topSort;
    this.topSortHelper = topSortHelper;
    this.edges = 0;
    this.adj = [];
    var index;
    for (index = 0; index < this.vertices; index += 1) {
        this.adj[index] = [];
        this.adj[index].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.marked = [];
    for (index = 0; index < this.vertices; index += 1) {
        this.marked[index] = false;
    }
    this.dfs = dfs;
    this.bfs = bfs;
    this.edgeTo = [];
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

/*
function showGraph() {
    var index;
    var j;
    for (index = 0; index < this.vertices; index += 1) {
        putstr(index + " -> ");
        for (j = 0; j < this.vertices; j += 1) {
            if (typeof this.adj[index][j] !== "undefined") {
                putstr(this.adj[index][j] + " ");
            }
        }
        print();
    }
}
*/

function showGraph() {
    var visited = [];
    var index;
    for (index = 0; index < this.vertices; index += 1) {
        putstr(this.vertexList[index] + " -> ");
        visited.push(this.vertexList[index]);
        var j;
        for (j = 0; j < this.vertices; j += 1) {
            if (typeof this.adj[index][j] !== "undefined") {
                if (visited.indexOf(this.vertexList[j]) < 0) {
                    putstr(this.vertexList[j] + " ");
                }
            }
        }
        print();
        visited.pop();
    }
}

function dfs(v) {
    this.marked[v] = true;
    if (typeof this.adj[v] !== "undefined") {
        print("Visited vertex: " + v);
    }
    var w;
    for (w in this.adj[v]) {
        var n = this.adj[v][w];
        if (!this.marked[n]) {
            this.dfs(n);
        }
    }
}

function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // add to the back of queue
    while (queue.length > 0) {
        var v = queue.shift(); // remove from front of queue
        if (typeof v !== "undefined" && typeof v === "number") {
            print("Visited vertex: " + v);
        }
        var n;
        var w;
        for (w in this.adj[v]) {
            n = this.adj[v][w];
            if (!this.marked[n]) {
                this.edgeTo[n] = v;
                this.marked[n] = true;
                queue.push(n);
            }
        }
    }
}

function pathTo(v) {
    this.bfs(v);
    var source = 0;
    if(!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    var index;
    var edges = this.edgeTo.slice(0);
    for (index = v; index != source; index = edges.shift()) {
        if (typeof index === "undefined") {
            break;
        }
        path.push(index);
    }
    path.push(source);
    return path;
}

function hasPathTo(v) {
    return this.marked[v];
}

function topSort() {
    var stack = [];
    var visited = [];
    var index; 
    for (index = 0; index < this.vertices; index += 1) {
        visited[index] = false;
    }

    for (index = 0; index < this.vertices; index += 1) {
        if (visited[index] === false) {
            this.topSortHelper(index, visited, stack);
        }
    }

    for (index = 0; index < stack.length; index += 1) {
        if (typeof stack[index] !== "undefined" && stack[index] !== false) {
            print(this.vertexList[stack[index]]);
        }
    }
}

function topSortHelper(v, visited, stack) {
    visited[v] = true;
    var n;
    var w;
    for (w in this.adj[v]) {
        n = this.adj[v][w];
        if (!visited[w]) {
            this.topSortHelper(visited[n], visited, stack);
        }
    }
    stack.push(v);
}
        
var g = new Graph(5);
/*
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
var vertex = 3;
var paths = g.pathTo(vertex);
print("paths: " + paths);
print("paths length: " + paths.length);
while (paths.length > 0) {
    if (paths.length > 1) {
        putstr(paths.pop() + "-");
    } else {
        putstr(paths.pop());
    }
}
print();
*/
g.vertexList = ["CS1", "CS2", "Data Structures", "Assembly Language", "Operating Systems", "Algorithms"];
g.showGraph();
g.topSort();
