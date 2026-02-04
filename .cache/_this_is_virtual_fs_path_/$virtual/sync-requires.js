
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-company-index-jsx": preferDefault(require("C:\\Users\\user\\Desktop\\roots\\src\\pages\\company\\index.jsx")),
  "component---src-pages-roots-index-jsx": preferDefault(require("C:\\Users\\user\\Desktop\\roots\\src\\pages\\Roots\\index.jsx")),
  "component---src-pages-top-index-jsx": preferDefault(require("C:\\Users\\user\\Desktop\\roots\\src\\pages\\top\\index.jsx"))
}

