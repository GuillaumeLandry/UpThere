"use strict";
export class Globe {
    nextLayerId;
    wwd;
  
    constructor() {
      // Create a WorldWindow globe on the specified HTML5 canvas
      this.wwd = new WorldWind.WorldWindow();
  
      // Holds the next unique id to be assigned to a layer
      this.nextLayerId = 1;
  
      // Add a BMNGOneImageLayer background layer. We're overriding the default 
      // minimum altitude of the BMNGOneImageLayer so this layer always available.
      this.addLayer(new WorldWind.BMNGOneImageLayer(), {
        category: "background",
        minActiveAltitude: 0
      });
    }
  
    /**
     * Adds a layer to the globe. Applies the optional options' properties to the
     * layer, and assigns the layer a unique ID and category.
     * @param {WorldWind.Layer} layer
     * @param {Object|null} options E.g., {category: "base", enabled: true}
     */
    addLayer(layer, options) {
      // Copy all properties defined on the options object to the layer
      if (options) {
        for (let prop in options) {
          if (!options.hasOwnProperty(prop)) {
            continue; // skip inherited props
          }
          layer[prop] = options[prop];
        }
      }
      // Assign a default category property if not already assigned
      if (typeof layer.category === 'undefined') {
        layer.category = 'overlay'; // the default category
      }
  
      // Assign a unique layer ID to ease layer management 
      layer.uniqueId = this.nextLayerId++;
  
      // Add the layer to the globe
      this.wwd.addLayer(layer);
    }
  
    /**
     * Returns a new array of layers in the given category.
     * @param {String} category E.g., "base", "overlay" or "setting".
     * @returns {Array}
     */
    getLayers(category) {
      return this.wwd.layers.filter(layer => layer.category === category);
    }
}