// LocationMarker.js

class LocationMarker {
    constructor({ lat, lng, name, type, title, slug }) {
      this.lat = lat;
      this.lng = lng;
      this.name = name;
      this.type = type;
      this.title = title;
      this.slug = slug;
    }
  
    static fromJson(json) {
      return new LocationMarker({
        lat: json.lat || '',
        lng: json.lng || '',
        name: json.kecamatan || '',
        type: json.type || '',
        title: json.title || '',
        slug: json.slug || '',
      });
    }
  
    toJson() {
      return {
        lat: this.lat,
        lng: this.lng,
        kecamatan: this.name,
        type: this.type,
        title: this.title,
        slug: this.slug,
      };
    }
  }
  
  export default LocationMarker;
  