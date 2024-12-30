/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */

  tutorialSidebar: [
    {
      type: 'html',
      value: '<iframe frameborder="no" marginwidth="0" marginheight="0" width="280" height="86" src="//music.163.com/outchain/player?type=2&id=2029600395&auto=1&height=66"></iframe>'
    },
    'intro',
    'jrrp',
    'song',
    'game',
    {
      type: 'html',
      value: '<hr color="#888">'
    },
    {
      type: 'category',
      label: 'HTML项目',
      items: ['html/maze', 'html/ball', 'html/art', 'html/gal'],
    },
    {
      type: 'category',
      label: '冷咲话',
      items: [{
        type: 'doc',
        label: '咲希了',
        id: 'joke/joke',
      }],
    }
  ],
};


export default sidebars;