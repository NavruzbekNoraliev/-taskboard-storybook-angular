// import { configure } from '@storybook/angular';

// automatically import all files ending in *.stories.ts
// configure(require.context('../src/stories', true, /\.stories\.ts$/), module);


import { configure } from '@storybook/angular';

import '../src/styles.less';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/', true, /\.stories.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);