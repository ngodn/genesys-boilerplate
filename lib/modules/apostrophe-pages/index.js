// This configures the genesys-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    }

    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/genesys-pages/views/pages!
  ]
};
