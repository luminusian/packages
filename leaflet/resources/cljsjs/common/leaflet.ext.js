// Externs for Leaflet
// <http://leafletjs.com>
// This extern is written by hand, do not replace with a generated file!

var eventsKey = {};

var L = {
  "version": {},
  "noConflict": function () {},
  "Util": {
    "extend": function () {},
    "bind": function () {},
    "stamp": function () {},
    "invokeEach": function () {},
    "limitExecByInterval": function () {},
    "falseFn": function () {},
    "formatNum": function () {},
    "trim": function () {},
    "splitWords": function () {},
    "setOptions": function () {},
    "getParamString": function () {},
    "template": function () {},
    "isArray": function () {},
    "emptyImageUrl": {},
    "requestAnimFrame": function () {},
    "cancelAnimFrame": function () {}
  },
  "extend": function () {},
  "bind": function () {},
  "stamp": function () {},
  "setOptions": function () {},
  "Class": function () {},
  "Mixin": {
    "Events": {
      "addEventListener": function () {},
      "hasEventListeners": function () {},
      "removeEventListener": function () {},
      "clearAllEventListeners": function () {},
      "fireEvent": function () {},
      "addOneTimeEventListener": function () {},
      "on": function () {},
      "off": function () {},
      "once": function () {},
      "fire": function () {}
    }
  },
  "Browser": {
    "ie": {},
    "ielt9": {},
    "webkit": {},
    "gecko": {},
    "android": {},
    "android23": {},
    "chrome": {},
    "ie3d": {},
    "webkit3d": {},
    "gecko3d": {},
    "opera3d": {},
    "any3d": {},
    "mobile": {},
    "mobileWebkit": {},
    "mobileWebkit3d": {},
    "mobileOpera": {},
    "touch": {},
    "msPointer": {},
    "pointer": {},
    "retina": {},
    "svg": {},
    "vml": {},
    "canvas": {}
  },
  "Point": function () {},
  "point": function () {},
  "Bounds": function () {},
  "bounds": function () {},
  "Transformation": function () {},
  "DomUtil": {
    "get": function () {},
    "getStyle": function () {},
    "getViewportOffset": function () {},
    "documentIsLtr": function () {},
    "create": function () {},
    "hasClass": function () {},
    "addClass": function () {},
    "removeClass": function () {},
    "_setClass": function () {},
    "_getClass": function () {},
    "setOpacity": function () {},
    "testProp": function () {},
    "getTranslateString": function () {},
    "getScaleString": function () {},
    "setPosition": function () {},
    "getPosition": function () {},
    "TRANSFORM": {},
    "TRANSITION": {},
    "TRANSITION_END": {},
    "disableTextSelection": function () {},
    "enableTextSelection": function () {},
    "disableImageDrag": function () {},
    "enableImageDrag": function () {}
  },
  "LatLng": {
    "lat": {},
    "lng": {}
  },
  "latLng": function () {},
  "LatLngBounds": {
    "extend": function() {},
    "getSouthWest": function() {},
    "getNorthEast": function() {},
    "getNorthWest": function() {},
    "getSouthEast": function() {},
    "getWest": function() {},
    "getSouth": function() {},
    "getEast": function() {},
    "getNorth": function() {},
    "getCenter": function() {},
    "contains": function() {},
    "intersects": function() {},
    "equals": function() {},
    "toBBoxString": function() {},
    "pad": function() {},
    "isValid": function() {}
  },
  "latLngBounds": function () {},
  "Projection": {
    "SphericalMercator": {
      "MAX_LATITUDE": {},
      "project": function () {},
      "unproject": function () {}
    },
    "LonLat": {
      "project": function () {},
      "unproject": function () {}
    },
    "Mercator": {
      "MAX_LATITUDE": {},
      "R_MINOR": {},
      "R_MAJOR": {},
      "project": function () {},
      "unproject": function () {}
    }
  },
  "CRS": {
    "latLngToPoint": function () {},
    "pointToLatLng": function () {},
    "project": function () {},
    "scale": function () {},
    "getSize": function () {},
    "Simple": {
      "latLngToPoint": function () {},
      "pointToLatLng": function () {},
      "project": function () {},
      "scale": function () {},
      "getSize": function () {},
      "projection": {
        "project": function () {},
        "unproject": function () {}
      },
      "transformation": {
        "_a": {},
        "_b": {},
        "_c": {},
        "_d": {},
        "transform": function () {},
        "_transform": function () {},
        "untransform": function () {}
      }
    },
    "EPSG3857": {
      "latLngToPoint": function () {},
      "pointToLatLng": function () {},
      "project": function () {},
      "scale": function () {},
      "getSize": function () {},
      "Simple": {
        "latLngToPoint": function () {},
        "pointToLatLng": function () {},
        "project": function () {},
        "scale": function () {},
        "getSize": function () {},
        "projection": {
          "project": function () {},
          "unproject": function () {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function () {},
          "_transform": function () {},
          "untransform": function () {}
        }
      },
      "code": {},
      "projection": {
        "MAX_LATITUDE": {},
        "project": function () {},
        "unproject": function () {}
      },
      "transformation": {
        "_a": {},
        "_b": {},
        "_c": {},
        "_d": {},
        "transform": function () {},
        "_transform": function () {},
        "untransform": function () {}
      }
    },
    "EPSG900913": {
      "latLngToPoint": function () {},
      "pointToLatLng": function () {},
      "project": function () {},
      "scale": function () {},
      "getSize": function () {},
      "Simple": {
        "latLngToPoint": function () {},
        "pointToLatLng": function () {},
        "project": function () {},
        "scale": function () {},
        "getSize": function () {},
        "projection": {
          "project": function () {},
          "unproject": function () {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function () {},
          "_transform": function () {},
          "untransform": function () {}
        }
      },
      "code": {},
      "projection": {
        "MAX_LATITUDE": {},
        "project": function () {},
        "unproject": function () {}
      },
      "transformation": {
        "_a": {},
        "_b": {},
        "_c": {},
        "_d": {},
        "transform": function () {},
        "_transform": function () {},
        "untransform": function () {}
      }
    },
    "EPSG4326": {
      "latLngToPoint": function () {},
      "pointToLatLng": function () {},
      "project": function () {},
      "scale": function () {},
      "getSize": function () {},
      "Simple": {
        "latLngToPoint": function () {},
        "pointToLatLng": function () {},
        "project": function () {},
        "scale": function () {},
        "getSize": function () {},
        "projection": {
          "project": function () {},
          "unproject": function () {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function () {},
          "_transform": function () {},
          "untransform": function () {}
        }
      },
      "EPSG3857": {
        "latLngToPoint": function () {},
        "pointToLatLng": function () {},
        "project": function () {},
        "scale": function () {},
        "getSize": function () {},
        "Simple": {
          "latLngToPoint": function () {},
          "pointToLatLng": function () {},
          "project": function () {},
          "scale": function () {},
          "getSize": function () {},
          "projection": {
            "project": function () {},
            "unproject": function () {}
          },
          "transformation": {
            "_a": {},
            "_b": {},
            "_c": {},
            "_d": {},
            "transform": function () {},
            "_transform": function () {},
            "untransform": function () {}
          }
        },
        "code": {},
        "projection": {
          "MAX_LATITUDE": {},
          "project": function () {},
          "unproject": function () {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function () {},
          "_transform": function () {},
          "untransform": function () {}
        }
      },
      "EPSG900913": {
        "latLngToPoint": function () {},
        "pointToLatLng": function () {},
        "project": function () {},
        "scale": function () {},
        "getSize": function () {},
        "Simple": {
          "latLngToPoint": function () {},
          "pointToLatLng": function () {},
          "project": function () {},
          "scale": function () {},
          "getSize": function () {},
          "projection": {
            "project": function () {},
            "unproject": function () {}
          },
          "transformation": {
            "_a": {},
            "_b": {},
            "_c": {},
            "_d": {},
            "transform": function () {},
            "_transform": function () {},
            "untransform": function () {}
          }
        },
        "code": {},
        "projection": {
          "MAX_LATITUDE": {},
          "project": function () {},
          "unproject": function () {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function () {},
          "_transform": function () {},
          "untransform": function () {}
        }
      },
      "code": {},
      "projection": {
        "project": function () {},
        "unproject": function () {}
      },
      "transformation": {
        "_a": {},
        "_b": {},
        "_c": {},
        "_d": {},
        "transform": function () {},
        "_transform": function () {},
        "untransform": function () {}
      }
    },
    "EPSG3395": {
      "latLngToPoint": function () {},
      "pointToLatLng": function () {},
      "project": function () {},
      "scale": function () {},
      "getSize": function () {},
      "Simple": {
        "latLngToPoint": function () {},
        "pointToLatLng": function () {},
        "project": function () {},
        "scale": function () {},
        "getSize": function () {},
        "projection": {
          "project": function () {},
          "unproject": function () {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function () {},
          "_transform": function () {},
          "untransform": function () {}
        }
      },
      "EPSG3857": {
        "latLngToPoint": function () {},
        "pointToLatLng": function () {},
        "project": function () {},
        "scale": function () {},
        "getSize": function () {},
        "Simple": {
          "latLngToPoint": function () {},
          "pointToLatLng": function () {},
          "project": function () {},
          "scale": function () {},
          "getSize": function () {},
          "projection": {
            "project": function () {},
            "unproject": function () {}
          },
          "transformation": {
            "_a": {},
            "_b": {},
            "_c": {},
            "_d": {},
            "transform": function () {},
            "_transform": function () {},
            "untransform": function () {}
          }
        },
        "code": {},
        "projection": {
          "MAX_LATITUDE": {},
          "project": function () {},
          "unproject": function () {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function () {},
          "_transform": function () {},
          "untransform": function () {}
        }
      },
      "EPSG900913": {
        "latLngToPoint": function () {},
        "pointToLatLng": function () {},
        "project": function () {},
        "scale": function () {},
        "getSize": function () {},
        "Simple": {
          "latLngToPoint": function () {},
          "pointToLatLng": function () {},
          "project": function () {},
          "scale": function () {},
          "getSize": function () {},
          "projection": {
            "project": function () {},
            "unproject": function () {}
          },
          "transformation": {
            "_a": {},
            "_b": {},
            "_c": {},
            "_d": {},
            "transform": function () {},
            "_transform": function () {},
            "untransform": function () {}
          }
        },
        "code": {},
        "projection": {
          "MAX_LATITUDE": {},
          "project": function () {},
          "unproject": function () {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function () {},
          "_transform": function () {},
          "untransform": function () {}
        }
      },
      "EPSG4326": {
        "latLngToPoint": function () {},
        "pointToLatLng": function () {},
        "project": function () {},
        "scale": function () {},
        "getSize": function () {},
        "Simple": {
          "latLngToPoint": function () {},
          "pointToLatLng": function () {},
          "project": function () {},
          "scale": function () {},
          "getSize": function () {},
          "projection": {
            "project": function () {},
            "unproject": function () {}
          },
          "transformation": {
            "_a": {},
            "_b": {},
            "_c": {},
            "_d": {},
            "transform": function () {},
            "_transform": function () {},
            "untransform": function () {}
          }
        },
        "EPSG3857": {
          "latLngToPoint": function () {},
          "pointToLatLng": function () {},
          "project": function () {},
          "scale": function () {},
          "getSize": function () {},
          "Simple": {
            "latLngToPoint": function () {},
            "pointToLatLng": function () {},
            "project": function () {},
            "scale": function () {},
            "getSize": function () {},
            "projection": {
              "project": function () {},
              "unproject": function () {}
            },
            "transformation": {
              "_a": {},
              "_b": {},
              "_c": {},
              "_d": {},
              "transform": function () {},
              "_transform": function () {},
              "untransform": function () {}
            }
          },
          "code": {},
          "projection": {
            "MAX_LATITUDE": {},
            "project": function () {},
            "unproject": function () {}
          },
          "transformation": {
            "_a": {},
            "_b": {},
            "_c": {},
            "_d": {},
            "transform": function () {},
            "_transform": function () {},
            "untransform": function () {}
          }
        },
        "EPSG900913": {
          "latLngToPoint": function () {},
          "pointToLatLng": function () {},
          "project": function () {},
          "scale": function () {},
          "getSize": function () {},
          "Simple": {
            "latLngToPoint": function () {},
            "pointToLatLng": function () {},
            "project": function () {},
            "scale": function () {},
            "getSize": function () {},
            "projection": {
              "project": function () {},
              "unproject": function () {}
            },
            "transformation": {
              "_a": {},
              "_b": {},
              "_c": {},
              "_d": {},
              "transform": function () {},
              "_transform": function () {},
              "untransform": function () {}
            }
          },
          "code": {},
          "projection": {
            "MAX_LATITUDE": {},
            "project": function () {},
            "unproject": function () {}
          },
          "transformation": {
            "_a": {},
            "_b": {},
            "_c": {},
            "_d": {},
            "transform": function () {},
            "_transform": function () {},
            "untransform": function () {}
          }
        },
        "code": {},
        "projection": {
          "project": function () {},
          "unproject": function () {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function () {},
          "_transform": function () {},
          "untransform": function () {}
        }
      },
      "code": {},
      "projection": {
        "MAX_LATITUDE": {},
        "R_MINOR": {},
        "R_MAJOR": {},
        "project": function () {},
        "unproject": function () {}
      },
      "transformation": {
        "_a": {},
        "_b": {},
        "_c": {},
        "_d": {},
        "transform": function () {},
        "_transform": function () {},
        "untransform": function () {}
      }
    }
  },
  "Map": function () {},
  "map": {
    "addLayer": function () {},
    "hasLayer": function () {},
    "eachLayer": function () {},
    "openPopup": function () {},
    "closePopup": function () {},
    "addControl": function () {},
    "removeControl": function () {},
    "setView": function () {},
    "setZoom": function () {},
    "setZoomIn": function () {},
    "setZoomOut": function () {},
    "setZoomAround": function () {},
    "fitBounds": function () {},
    "fitWorld": function () {},
    "panTo": function () {},
    "panInsideBounds": function () {},
    "panBy": function () {},
    "invalidateSize": function () {},
    "setMaxBounds": function () {},
    "locate": function () {},
    "stopLocate": function () {},
    "remove": function () {},
    "removeLayer": function () {},
    "getCenter": function () {},
    "getZoom": function () {},
    "getMinZoom": function () {},
    "getMaxZoom": function () {},
    "getBounds": function () {},
    "getBoundsZoom": function () {},
    "getSize": function () {},
    "getPixelBounds": function () {},
      "getPixelOrigin": function () {},
      "attributionControl": {
          "setPrefix": function () {},
      },
      "dragging": {
          "disable": function () {},
      },
      "scrollWheelZoom": {
          "disable": function () {},
      },
      "touchZoom": {
          "disable": function () {},
      },
      "doubleClickZoom": {
          "disable": function () {},
      },
  },
  "TileLayer": function () {},
  "tileLayer": {
    "bringToFront": function () {},
    "bringToBack": function () {},
    "setOpacity": function () {},
    "setZIndex": function () {},
    "redraw": function () {},
    "setUrl": function () {},
  },
  "ImageOverlay": function () {},
  "imageOverlay": function () {},
  "Icon": {
    "Default": {
      "imagePath": {},
    },
  },
  "icon": function () {},
  "Marker": function () {},
  "marker": {
    "addTo": function () {},
    "getLatLng": function () {},
    "setLatLng": function () {},
    "setIcon": function () {},
    "setZIndexOffset": function () {},
    "setOpacity": function () {},
    "update": function () {},
    "bindPopup": function () {},
    "unbindPopup": function () {},
    "openPopup": function () {},
    "getPopup": function () {},
    "closePopup": function () {},
    "togglePopup": function () {},
    "setPopupContent": function () {},
    "toGeoJSON": function () {},
  },
  "DivIcon": function () {},
  "divIcon": function () {},
  "Popup": function () {},
  "popup": {
    "addTo": function () {},
    "openOn": function () {},
    "setLatLng": function () {},
    "getLatLng": function () {},
    "setContent": function () {},
    "getContent": function () {},
    "update": function () {},
   },
  "LayerGroup": function () {},
  "layerGroup": {
    "addTo": function () {},
    "addLayer": function () {},
    "removeLayer": function () {},
    "hasLayer": function () {},
    "getLayer": function () {},
    "getLayers": function () {},
    "eachLayer": function () {},
    "clearLayers": function () {},
    "hasLayer": function () {},
    "toGeoJSON": function () {},
   },
  "FeatureGroup": function () {},
  "featureGroup": function () {},
  "Path": function () {},
  "LineUtil": {
    "simplify": function () {},
    "pointToSegmentDistance": function () {},
    "closestPointOnSegment": function () {},
    "_simplifyDP": function () {},
    "_simplifyDPStep": function () {},
    "_reducePoints": function () {},
    "clipSegment": function () {},
    "_getEdgeIntersection": function () {},
    "_getBitCode": function () {},
    "_sqDist": function () {},
    "_sqClosestPointOnSegment": function () {}
  },
  "Polyline": function () {},
  "polyline": {
    "addTo": function () {},       
    "bindPopup": function () {},   
    "bindPopup": function () {},   
    "unbindPopup": function () {}, 
    "openPopup": function () {},   
    "closePopup": function () {},  
    "setStyle": function () {},    
    "getBounds": function () {},   
    "bringToFront": function () {},
    "bringToBack": function () {}, 
    "redraw": function () {}, 
    "addLatLng": function () {}, 
    "setLatLngs": function () {}, 
    "getLatLngs": function () {}, 
    "spliceLatLngs": function () {},
    "getBounds": function () {}, 
    "toGeoJSON": function () {} 
  },
  "PolyUtil": {
    "clipPolygon": function () {}
  },
  "Polygon": function () {},
  "polygon": {
    "addTo": function () {},       
    "bindPopup": function () {},   
    "bindPopup": function () {},   
    "unbindPopup": function () {}, 
    "openPopup": function () {},   
    "closePopup": function () {},  
    "setStyle": function () {},    
    "getBounds": function () {},   
    "bringToFront": function () {},
    "bringToBack": function () {}, 
    "redraw": function () {}, 
    "addLatLng": function () {}, 
    "setLatLngs": function () {}, 
    "getLatLngs": function () {}, 
    "spliceLatLngs": function () {},
    "getBounds": function () {}, 
    "toGeoJSON": function () {}
  },
  "MultiPolyline": function () {},
  "MultiPolygon": function () {},
  "multiPolyline": function () {},
  "multiPolygon": function () {},
  "Rectangle": function () {},
  "rectangle": function () {},
  "Circle": function () {},
  "circle": function () {},
  "CircleMarker": function () {},
  "circleMarker": function () {},
  "GeoJSON": function () {},
  "geoJson": {
    "addData": function () {},
    "setStyle": function () {},
    "resetStyle": function () {}
  },
  "DomEvent": {
    "addListener": function () {},
    "removeListener": function () {},
    "stopPropagation": function () {},
    "disableScrollPropagation": function () {},
    "disableClickPropagation": function () {},
    "preventDefault": function () {},
    "stop": function () {},
    "getMousePosition": function () {},
    "getWheelDelta": function () {},
    // Mouse Event
    "originalEvent": {},
    "containerPoint": {},
    "layerPoint": {},
    "latlng": {},
    // LocationEvent
    "bounds": {},
    "accuracy": {},
    "altitude": {},
    "altitudeAccuracy": {},
    "heading": {},
    "speed": {},
    "timestamp": {},
    // ErrorEvent
    "message": {},
    "code": {},
    // LayerEvent
    "layer": {},
    // LayersControlEvent
    "name": {},
    // TileEvent
    "tile": {},
    "url": {},
    // ResizeEvent
    "oldSize": {},
    "newSize": {},
    // GeoJSONEvent
    "properties": {},
    "geometryType": {},
    "id": {},
    // ?
    "_skipEvents": function () {},
    "_fakeStop": function () {},
    "_skipped": function () {},
    "_checkMouse": function () {},
    "_getEvent": function () {},
    "_filterClick": function () {},
    "on": function () {},
    "off": function () {},
    "_touchstart": {},
    "_touchend": {},
    "addDoubleTapListener": function () {},
    "removeDoubleTapListener": function () {},
    "POINTER_DOWN": {},
    "POINTER_MOVE": {},
    "POINTER_UP": {},
    "POINTER_CANCEL": {},
    "_pointers": function () {},
    "_pointerDocumentListener": {},
    "addPointerListener": function () {},
    "addPointerListenerStart": function () {},
    "addPointerListenerMove": function () {},
    "addPointerListenerEnd": function () {},
    "removePointerListener": function () {}
  },
  "Draggable": function () {},
  "Handler": function () {},
  "Control": function () {},
  "control": {
    "setPosition": function () {},
    "getPosition": function () {},
    "addTo": function () {},
    "removeFrom": function () {},
    "getContainer": function () {},
    "onAdd": function () {},
    "onRemove": function () {},
    "layers": {
      "addOverlay": function () {},
      "addBaseLayer": function () {},
      "removeLayer": function () {}
    },
    "attribution": {
      "setPrefix": function () {},
      "addAttribution": function () {},
      "removeAttribution": function () {}
    }
  },
  "PosAnimation": function () {}
};

L.circleMarker.prototype = function () {};
L.circleMarker.prototype = {
    "setRadius": function () {},
    "addTo": function () {}
};
