'use strict';
const e = React.createElement;
const domContainer = document.querySelector('#test');

ReactDOM.render(e("h1", {id: "recipe-0", 'data-type': "title"}, "Baked Salmon"), domContainer);
