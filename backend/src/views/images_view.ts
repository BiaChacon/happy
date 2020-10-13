import Image from "../model/Image";

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `${process.env.URL}/uploads/${image.path}`,
    };
  },
  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
};