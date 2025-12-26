export interface ImageData {
  id: string;
  src: string;
  title: string;
  description?: string;
  date: string;
  location: {
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  camera?: string;
  aperture?: string;
  iso?: string;
}
